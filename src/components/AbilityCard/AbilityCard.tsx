type AbilityCardProps = {
    title: string;
    image_url: string;
}

export default function AbilityCard({title, image_url}: AbilityCardProps) {
    // TODO: make the card similar to a military honor badge
    return(
        <div className="abilitycard">
            <img src={image_url} />
            <div className="abilitycard__description">
                <h3>{title}</h3>
            </div>
        </div>
    )
}