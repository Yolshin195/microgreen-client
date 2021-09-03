pipeline {
    agent {
        docker {
            image 'node:14'
        }
    }

    stages {
        stage('install') {
            steps {
                sh 'id'
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