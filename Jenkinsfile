pipeline {
    agent any

    stages {
        stage('Init') {
            steps {
                git([url: 'https://github.com/gokulraja2787/aws-cicd-demo.git', branch: 'main'])
                sh "npm i"
                sh "npm run clean"
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
                echo "Archiving build"
                sh "tar -czf aws-cicd-demo.tar.xz build/*"
            }
        }
        stage('publish docker image') {
            steps {
                echo "Pending impl"
            }
        }
    }
}