type SkillCardProps = {
    title: string;
    image_url: string;
}

export default function SKillCard({title, image_url}: SkillCardProps) {
    // TODO: make the card similar to a military honor badge
    return(
        <div className="skillcard">
            <img src={image_url} />
            <div className="skillcard__description">
                <h3>{title}</h3>
            </div>
        </div>
    )
}