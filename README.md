# LocalstackDataFlow

Steps: 

1. Start docker compose 
2. Create Dynamo table
3. Create kinesis stream
4. Create lambda and event source mapping
5. Run ec2-client web app
6. Run data creation script in kinesis folder

This will run a program that places records on kinesis, processes with lambda, and places data into dynamo db.
A web app can then be ran locally to see some data points. (NOTE: This web app could be ran on EC2 in an actual env. Localstack free does not fully emulate EC2 instances)