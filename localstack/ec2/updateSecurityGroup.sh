# Localstack only supports default SG
awslocal ec2 authorize-security-group-ingress \
    --group-id default \
    --protocol tcp \
    --port 8000 \
    --cidr 0.0.0.0/0

awslocal ec2 authorize-security-group-ingress \
  --group-id default \
  --protocol tcp \
  --port 8080