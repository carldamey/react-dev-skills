import { useState } from "react";
import "./styles.css";
import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";

export default function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 4 },
    { name: "CSS", level: 3 },
    { name: "Javascript", level: 4 },
    { name: "Python", level: 3 },
    { name: "Express", level: 3 },
    { name: "Mongoose", level: 3 }
  ]);
  return (
    <div className="App">
      <h1 className="teal-text">React Dev Skills</h1>
      <SkillList skills={skills} />
      <hr />
      <NewSkillForm skills={skills} setSkills={setSkills} />
    </div>
  );
}
