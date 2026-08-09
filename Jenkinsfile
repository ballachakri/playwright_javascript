pipeline {
    agent any

    tools {
        nodejs 'NodeJS-LTS'
    }

    environment {
        ALLURE_RESULTS = 'allure-results'
        ALLURE_REPORT  = 'allure-report'
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '15'))
    }

    triggers {
        cron('H 4 * * *')
    }

    stages {
        stage('Checkout Code') {
            steps { checkout scm }
        }

        stage('Install Dependencies') {
            steps { sh 'npm ci' }
        }

        stage('Install Playwright Browsers') {
            steps { sh 'npx playwright install --with-deps' }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test --reporter=allure-playwright,html'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
                    archiveArtifacts artifacts: 'allure-results/**/*', allowEmptyArchive: true
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                sh 'npx allure-commandline generate allure-results -o allure-report --clean'
            }
        }
    }

    // ✅ PUBLISH REPORT IN POST SECTION — ALWAYS RUNS!
    post {
        always {
            stage('Publish Allure Report') {
                steps {
                    script {
                        allure([
                            results: [[path: 'allure-results']],
                            reportBuildPolicy: 'ALWAYS',
                            includeProperties: false
                        ])
                    }
                }
            }
        }
        success { echo '✅ All tests passed!' }
        failure { echo '❌ Some tests failed — Allure Report is below ↓' }
    }
}