import boto3
from botocore.config import Config
import base64
import uuid
import datetime

def lambda_handler(event, context):
    # URL for localstack
    endpoint_url = "http://localhost.localstack.cloud:4566"

    # Need to pass fake credentials to connect to localstack
    client = boto3.client("dynamodb", 
                        region_name="us-east-1",
                        endpoint_url=endpoint_url, 
                        aws_access_key_id="mock", 
                        aws_secret_access_key="mock",)

    #results = client.scan(TableName="table01")


    for record in event['Records']:
       
       id = uuid.uuid4()
       time = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S.%f')
       #Kinesis data is base64 encoded so decode here
       payload=base64.b64decode(record["kinesis"]["data"])
       print("Decoded payload: " + str(payload))

       client.put_item(
           TableName="table01",
           Item={
               "id": {"S": str(id)},
               "value": {"S": payload.decode("utf-8")},
               "timestamp": {"S": time}
           }
       )

# mocked_event={
#     "Records": [
#         {
#             "kinesis": {
#                 "kinesisSchemaVersion": "1.0",
#                 "partitionKey": "1",
#                 "sequenceNumber": "49590338271490256608559692538361571095921575989136588898",
#                 "data": "SGVsbG8sIHRoaXMgaXMgYSB0ZXN0Lg==",
#                 "approximateArrivalTimestamp": 1545084650.987
#             },
#             "eventSource": "aws:kinesis",
#             "eventVersion": "1.0",
#             "eventID": "shardId-000000000006:49590338271490256608559692538361571095921575989136588898",
#             "eventName": "aws:kinesis:record",
#             "invokeIdentityArn": "arn:aws:iam::111122223333:role/lambda-kinesis-role",
#             "awsRegion": "us-east-2",
#             "eventSourceARN": "arn:aws:kinesis:us-east-2:111122223333:stream/lambda-stream"
#         }
#     ]
# }

# lambda_handler(mocked_event, None)