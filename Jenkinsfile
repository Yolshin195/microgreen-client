pipeline {
    agent any

    stages {
        stage('install') {
            steps {
                sh '/usr/bin/npm install'
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
                sh 'sudo /var/CICD/ygreens-deploy.sh'
            }
        }
    }
}