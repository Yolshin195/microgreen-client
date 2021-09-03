pipeline {
    agent any

    stages {
        stage('install') {
            steps {
                sh 'node --version'
            }
        }

        stage('build') {
            steps {
                sh 'ng build --prod'
            }
        }

        stage('deploy') {
            steps {
                echo 'Deploy!'
            }
        }
    }
}