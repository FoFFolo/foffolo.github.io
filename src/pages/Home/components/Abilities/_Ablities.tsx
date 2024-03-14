import AbilityCard from "../../../../components/AbilityCard/AbilityCard"
import abilities_data from '../../../../utils/abilities_data.json';

export default function Abilities() {
    type Abilities_dataProps = {
        title: string;
        image_url: string;
    }

    return (
        <div className="abilities__container">
            {abilities_data.map((ability: Abilities_dataProps, id: number) => {
                return <AbilityCard key={id} title={ability.title} image_url={ability.image_url}/>
            })}
        </div>
    )
}