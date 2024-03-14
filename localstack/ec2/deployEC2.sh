awslocal ec2 describe-security-groups

# NOTE: THIS IS HOW YOU WOULD DO IT
# But localstack free only emulates the EC2 service responses
# Localstack pro will do a full running ec2 instance that is interactable
SG_ID=$(awslocal ec2 describe-security-groups | \
    python -c "import sys, json; print(json.load(sys.stdin)['SecurityGroups'][0]['GroupId'])")

awslocal ec2 run-instances \
    --image-id ami-ff0fea8310f3 \
    --count 1 \
    --instance-type t3.nano \
    --key-name my-key \
    --security-group-ids ${SG_ID} \
    --user-data file://./user_script.sh