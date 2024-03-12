
# Zip up code
#zip function.zip lambda-code.py

# This form of zip was not compataible with create function
# Had to manually create zip on windows with right click and send to zip
# tar.exe -a -c -f function.zip lambda-code.py

# Deploy
awslocal lambda create-function \
    --function-name localstack-lambda \
    --runtime python3.9 \
    --zip-file "fileb://function.zip" \
    --handler lambda-code.lambda_handler  \
    --role arn:aws:iam::000000000000:role/lambda-role

# Gets kinesis arn for stream input
KINESIS_ARN=$(awslocal kinesis describe-stream \
    --stream-name lambda-stream-input | \
    python -c "import sys, json; print(json.load(sys.stdin)['StreamDescription']['StreamARN'])")

# Connect stream to lambda function
awslocal lambda create-event-source-mapping \
    --function-name localstack-lambda \
    --batch-size 500 \
    --starting-position LATEST \
    --event-source-arn ${KINESIS_ARN}
