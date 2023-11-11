import { useState } from "react";
import "./NewSkillForm.css";

export default function NewSkillForm({ skills, setSkills }) {
  const [newSkill, setNewSkill] = useState({
    name: "",
    level: 3
  });
  function handleNewSkill(evt) {
    evt.preventDefault();
    setSkills([...skills, newSkill]);
    setNewSkill({ name: "", level: 3 });
  }
  return (
    <form onSubmit={handleNewSkill} className="NewSkillForm">
      <h3>Skill: </h3>
      <input
        name="name"
        value={newSkill.name}
        onChange={(evt) =>
          setNewSkill({ name: evt.target.value, level: newSkill.level })
        }
        className="padding-0"
      ></input>
      <h3>Level: </h3>{" "}
      <select
        name="level"
        value={newSkill.level}
        onChange={(evt) =>
          setNewSkill({ name: newSkill.name, level: evt.target.value })
        }
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button type="submit">ADD SKILL</button>
    </form>
  );
}
