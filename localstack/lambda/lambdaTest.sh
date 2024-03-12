# Test putting data on kinesis and seeing data in dynamo
awslocal kinesis put-record \
    --stream-name lambda-stream-input \
    --partition-key 1 \
    --data "Hello Hello"

awslocal dynamodb scan --table-name table01 --region us-east-1

# awslocal logs describe-log-groups
# awslocal logs describe-log-streams --log-group-name "/aws/lambda/localstack-lambda"
# awslocal logs get-log-events --log-group-name '/aws/lambda/localstack-lambda' --log-stream-name '2024/03/12/[$LATEST]9077cd4cd639b963f241d8b95f3480a8' 