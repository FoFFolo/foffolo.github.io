import SKillCard from "../../../../components/SkillCard/SkillCard"
import skills_data from '../../../../utils/skills_data.json';

export default function Skills() {
    type Skills_dataProps = {
        title: string;
        image_url: string;
    }

    return (
        <div className="skills__container">
            {skills_data.map((skill: Skills_dataProps, id: number) => {
                return <SKillCard key={id} title={skill.title} image_url={skill.image_url}/>
            })}
        </div>
    )
}