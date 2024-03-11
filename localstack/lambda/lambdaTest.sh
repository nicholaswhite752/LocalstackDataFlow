# Test putting data on kinesis and seeing data in dynamo
awslocal kinesis put-record \
    --stream-name lambda-stream-input \
    --partition-key 1 \
    --data "Hello Hello"

awslocal dynamodb scan --table-name table01 --region us-east-1