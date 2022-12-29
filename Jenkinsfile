pipeline {
    agent "nodejs-angular-base-image-ci:latest"

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm run build --prod'
            }
        }
        stage('Quality Check') {
            steps {
                echo 'ng list'
            }
        }
        stage('Quality Check') {
            steps {
                echo 'npm run sonar-scanner'
            }
        }
        stage('Container') {
            steps {
                echo 'Container Build'
                sh 'docker build -t frontend:1.0.0 .'
                sh 'docker tag frontend:1.0.0 jfrog.registry.internal/appfrontend:1.0.0'
                sh 'docker push jfrog.registry.internal/app/frontend:1.0.0'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Container Deployment'
                sh 'ssh -i private.key someuser@192.168.1.1 && docker rm frontend && docker run -d -p 80:4200 frontend:1.0.0'
            }
        }
    }

    post {
        always {
            cleanWs()
            deleteDir()
        }
    }
}