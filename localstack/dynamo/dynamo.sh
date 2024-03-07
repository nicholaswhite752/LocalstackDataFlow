echo "Starting Script"

# Creates db cluster
awslocal dynamodb create-table \
    --table-name table01 \
    --key-schema \
        AttributeName=id,KeyType=HASH \
    --attribute-definitions \
        AttributeName=id,AttributeType=S \
    --billing-mode PAY_PER_REQUEST \
    --region us-east-1


# AttributeName=value,AttributeType=S \
# AttributeName=timestamp,AttributeType=S \

# awslocal dynamodb put-item \
#     --table-name table01 \
#     --item '{"id":{"S":"some-uuid"}, "value":{"S":"some-value"}, "timestamp":{"S":"some-timestamp"}}' \
#     --region us-east-1

# awslocal dynamodb get-item --table-name table01 --key '{"id": {"S": "some-uuid"}}' --region us-east-1
# awslocal dynamodb scan --table-name table01 --region us-east-1

