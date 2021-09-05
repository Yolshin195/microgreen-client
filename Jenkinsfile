pipeline {
    agent any

    stages {
        stage('install') {
            steps {
                sh '/usr/bin/node install'
            }
        }

        stage('build') {
            steps {
                sh '/usr/bin/npm run prod'
            }
        }

        stage('deploy') {
            steps {
                echo 'Deploy!'
            }
        }
    }
}