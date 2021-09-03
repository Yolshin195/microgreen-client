pipeline {
    agent {
        docker {
            image 'johnpapa/angular-cli'
        }
    }

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