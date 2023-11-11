import SkillListItem from "./SkillListItem";

export default function SkillList({ skills }) {
  return (
    <ul className="padding-0">
      {skills.map((skill) => (
        <SkillListItem skill={skill} />
      ))}
    </ul>
  );
}
