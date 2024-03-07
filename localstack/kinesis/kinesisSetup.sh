echo "Starting Script"

# Logs into docker container
# docker exec -it localhost-localstack-main sh

# Create Kinesis Stream
awslocal kinesis create-stream --stream-name lambda-stream-input --shard-count 1

