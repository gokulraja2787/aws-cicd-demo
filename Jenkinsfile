pipeline {

    environment {
        registry = "gokul2787/myapp-aws-cicd-demo"
        registryCredential = 'dockerhub-creds'
        dockerImage = ''
    }
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
        stage('Build Docker Image') {
            steps {
                script {
                    echo "Running docker build for environment $ENV"
                    if (env.ENV == 'dev') {
                        docker.withRegistry( '', registryCredential ) {
                            sh 'docker build -f Dockerfile.dev . -t ${registry}:dev'
                        }
                    } else {
                        docker.withRegistry( '', registryCredential ) {
                            dockerImage = docker.build registry + ":latest"
                        }
                    }
                }
            }
        }
        stage ('Publish Docker Image') {
            steps {
                script {
                    echo "Publish docker image for environment $ENV"
                    if (env.ENV == 'dev') {
                        docker.withRegistry( '', registryCredential ) {
                            sh 'docker push ${registry}:dev'
                        }
                    } else {
                        docker.withRegistry( '', registryCredential ) {
                            dockerImage.push()
                        }
                    }
                }
            }
        }
        stage ('Clean up') {
            steps {
                script {
                    echo "Cleaning up docker images"
                    if (env.ENV == 'dev') {
                        sh "docker rmi $registry:dev"
                    } else {
                        sh "docker rmi $registry:latest"
                    }
                }
            }
        }
        stage ('CD') {
            steps {
                script {
                    echo "Setting auto deploy flag"
                    sh "echo 1 > /jenkins/CD/flag"
                }
            }
        }
    }
}