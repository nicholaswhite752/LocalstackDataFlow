# DELETING LAMBDA AND EVENT SOURCE

EVENT_SOURCE_UUID=$(awslocal lambda list-event-source-mappings \
    --function-name localstack-lambda | \
    python -c "import sys, json; print(json.load(sys.stdin)['EventSourceMappings'][0]['UUID'])")

awslocal lambda delete-event-source-mapping \
    --uuid ${EVENT_SOURCE_UUID}

awslocal lambda delete-function \
    --function-name localstack-lambda