import { useState } from "react"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { HeroBanner } from "./components/HeroBanner"


function App() {

  const [teamMember, setTeamMember] = useState([])

  const handleTeamMembers = (newMember) => {
    setTeamMember([...teamMember, newMember])
  }

  return (
    <>
      <div>
        <Header />
        <HeroBanner />
        <Form memberValue={handleTeamMembers}/>
      </div>
    </>
  )
}

export default App
