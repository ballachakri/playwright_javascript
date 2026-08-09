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
            steps { bat 'npm install' }
        }

        stage('Install Playwright Browsers') {
            steps { bat 'npx playwright install --with-deps' }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test --reporter=allure-playwright,html'
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
                bat 'npx allure-commandline generate allure-results -o allure-report --clean'
            }
        }

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

    post {
        always {
            // ✅ PLAYWRIGHT HTML REPORT — appears in sidebar!
            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
        }
        success { echo '✅ All tests passed!' }
        failure { echo '❌ Check reports below.' }
    }
}