pipeline {
    agent any

    stages {
        stage('install') {
            steps {
                sh 'npm install'
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