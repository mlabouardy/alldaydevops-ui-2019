def bucket='add-2019-imdb-demo'

node('slaves'){
    stage('Checkout'){
        checkout scm
    }

    stage('Deploy'){
        if (env.BRANCH_NAME == 'master') {
            sh "aws s3 cp --recursive . s3://${bucket}/production/"
        }
        
        if (env.BRANCH_NAME == 'preprod') {
            sh "aws s3 cp --recursive . s3://${bucket}/staging/"
        }
        
        if (env.BRANCH_NAME == 'develop') {
            sh "aws s3 cp --recursive . s3://${bucket}/sandbox/"
        }
    }
}