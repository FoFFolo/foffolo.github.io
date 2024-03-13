type ProjectCardProps = {
    title: string;
    description: string;
    link: string;
    image_url: string;
}

export default function ProjectCard({title, description, link, image_url} : ProjectCardProps) {
    return (
        <div className={`projectcard`}>
            <img src={image_url} />
            {/* <img src={image_url} /> */}
            <div className="projectcard__info">
                <div className="projectcard__description">
                    <h3 className='projectcard__description__title'>{title}</h3>
                    <div className="ds__span">
                        <span>{description}</span>
                    </div>
                </div>
                <a className='project__link' href={link}>Visit</a>
            </div>
        </div>
    )
}