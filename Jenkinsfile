pipeline {
    agent any

    tools {
        // Ensure node14 is configured in global tools.
        node "node14"
    }

    stages {
        stage('Init') {
            steps {
                git([url: 'https://github.com/gokulraja2787/aws-cicd-demo.git', branch: 'main'])
                sh "npm i"
            }

        }
        stage('Quality') {
            steps {
                sh "npm test -- --coverage"
            }
        }
        stage('Prod Build') {
            steps {
                sh "npm run build"
            }
        }
    }
}