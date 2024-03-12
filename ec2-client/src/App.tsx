import { useEffect, useState } from "react"
import BasicCard from "./components/BasicCard"
import { DynamoDBClient, ExecuteStatementCommand, QueryCommand, ScanCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import


export default function Home() {
  //Data Storage for endpoint calls
  const [data, setData]: any[] = useState([]);


  // Endpoint calls for basic endpoints
  useEffect(()=>{

    const fetchLast25Dynamodb = async () => {
      const client = new DynamoDBClient({
        endpoint: "http://localhost.localstack.cloud:4566",
        region: "us-east-1",
        credentials: {
          accessKeyId: "mock",
          secretAccessKey: "mock"
        },
      });
    
      const input = {
        "ExpressionAttributeValues": {
          ":v1": {
            "S": "LambdaValues"
          }
        },
        "KeyConditionExpression": "id = :v1",
        "Limit": 25,
        "ScanIndexForward": false,
        "TableName": "table01"
      };
      const command = new QueryCommand(input)
      const response = await client.send(command);
      //console.log(response)
      
      let listOfData: any[] = []
      response.Items?.forEach((dataPoint: any) => {
        const item = {
          id : dataPoint.id.S,
          timestamp: dataPoint.timestamp.S,
          value: dataPoint.value.S
        }
        listOfData.push(item)
      })
    
      //console.log(listOfData)
      setData(listOfData)
    }

    fetchLast25Dynamodb()

  }, [])

  let CardsAll: any = <BasicCard title="Basic Welcome Endpoint" data={["Reponse: ", "WAITING FOR SERVER RESPONSE"]}/>

  if (data.length > 0) {
    const cards: any[] = []

    data.forEach((dataPoint: any) => {
      const card = <BasicCard title={"Data: " + dataPoint.value} data={["Data Timestamp: " + dataPoint.timestamp , "DynamoDb Partition: " + dataPoint.id]}/>
      cards.push(card)
    })

    CardsAll = cards
  
  }


  //Page contains
  // Header
  // Subheader
  // Card with basic welcome endpoint response
  return (
    <div>
      <div className="p-4 inline-block">
        <h1 className="text-3xl font-bold pb-2">
          AWS EC2 Testing Ground
        </h1>
        <hr/>
        <h2 className="text-2xl font-bold underline pt-2 pb-2">
          Dynamo DB Data Response (LAST 25 INSERTED)
        </h2>
      </div>
      <div className="p-4 inline-block">
        {CardsAll}
      </div>
    </div>

  )
}

// DID NOT WORK WITH SCAN OR SQL STATEMENT DUE TO NATURE OF DYNAMO
// USE RDS FOR THIS TYPE OF DATA, BUT RDS WAS NOT USABLE WITH LOCALSTACK FREE
// const input = {
//   Statement: "SELECT * FROM table01",
//   Limit: 25
// }

// const command = new ExecuteStatementCommand(input);
// const input = {
//   "TableName": "table01"
// };
// const command = new ScanCommand(input);