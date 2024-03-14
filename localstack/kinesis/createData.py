import random
import string
import boto3

# URL for localstack
endpoint_url = "http://localhost.localstack.cloud:4566"

# Need to pass fake credentials to connect to localstack
client = boto3.client("kinesis", 
                    region_name="us-east-1",
                    endpoint_url=endpoint_url, 
                    aws_access_key_id="mock", 
                    aws_secret_access_key="mock",)

for x in range(10):
    # Basic way to generate random strings
    randomString = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(10))

    response = client.put_record(
        StreamName= 'lambda-stream-input',
        Data= randomString,
        PartitionKey= 'test-id',
    )
