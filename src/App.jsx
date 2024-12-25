import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { Line } from "./components/Line";

function App() {
  const [teamMember, setTeamMember] = useState([]);

  const handleTeamMembers = (newMember) => {
    setTeamMember([...teamMember, newMember]);
  };

  const Lines = [
    {
      name: "Line UP",
      primaryColor: "#E06B69",
      secondaryColor: "linear-gradient(to bottom, #E06B69 0%, #FF9E9C 100%);",
    },
    {
      name: "Line A",
      primaryColor: "#57C278",
      secondaryColor: "linear-gradient(to bottom, #57C278 0%, #9CF3B7 100%);",
    },
    {
      name: "Line B",
      primaryColor: "#82CFFA",
      secondaryColor: "linear-gradient(to bottom, #82CFFA 0%, #A3DEFF 100%);",
    }
  ];

  return (
    <>
      <div>
        <Header />
        <HeroBanner />
        <Form memberValue={handleTeamMembers} />
        {Lines.map(e => {
          return <Line 
          key={e.name} 
          name={e.name} 
          primaryColor={e.primaryColor} 
          secondaryColor={e.secondaryColor}
          teamMembers={teamMember} 
          />
        })}
      </div>
    </>
  );
}

export default App;
