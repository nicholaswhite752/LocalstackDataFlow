import { useEffect, useState } from "react"
import BasicCard from "./components/BasicCard"

export default function Home() {
  //Data Storage for endpoint calls
  const [welcomeMessage, setWelcomeMessage] = useState();


  // Endpoint calls for basic endpoints
  useEffect(()=>{

  }, [])


  //Page contains
  // Header
  // Subheader
  // Card with basic welcome endpoint response
  return (
    <div className="p-4 inline-block">
      <h1 className="text-3xl font-bold pb-2">
        Web Api Testing Ground
      </h1>
      <hr/>
      <h2 className="text-2xl font-bold underline pt-2 pb-2">
        Endpoint Response
      </h2>
      <BasicCard title="Basic Welcome Endpoint" data={["Reponse: " + welcomeMessage]}/>
    </div>

  )
}