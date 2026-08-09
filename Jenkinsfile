pipeline {
    agent any

    tools {
        nodejs 'NodeJS-LTS'   // ← Must match EXACT name from Step 2
    }

    environment {
        ALLURE_RESULTS = 'allure-results'
        ALLURE_REPORT  = 'allure-report'
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '15'))
    }

    triggers {
        cron('H 4 * * *') // Daily at 04:00 UTC (optional)
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test --reporter=allure-playwright,html'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
                    archiveArtifacts artifacts: "${ALLURE_RESULTS}/**/*", allowEmptyArchive: true
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                sh 'npx allure-commandline generate ${ALLURE_RESULTS} -o ${ALLURE_REPORT} --clean'
            }
        }

        stage('Publish Allure Report') {
            steps {
                script {
                    allure([
                        results: [[path: "${ALLURE_RESULTS}"]],
                        reportBuildPolicy: 'ALWAYS',
                        includeProperties: false
                    ])
                }
            }
        }
    }

    post {
        success { echo '✅ All tests passed!' }
        failure { echo '❌ Some tests failed — check Allure Report below.' }
    }
}