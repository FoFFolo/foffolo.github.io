type ProjectCardProps = {
    title: string;
    description: string;
    link: string;
    image_url: string;
}

export default function ProjectCard({title, description, link, image_url} : ProjectCardProps) {
    console.log(image_url)
    return (
        <div className="w-[400px] md:w-[450px] rounded-lg flex gap-4 py-4 px-3 bg-blue-400 relative shadow-2xl">
            <img src={image_url} className="w-28 h-56 object-contain object-center select-none" />
            <div className="h-56 flex flex-col justify-between">
                <div className="projectcard__description">
                    <h3 className='font-bold mb-2'>{title}</h3>
                    <div className="h-50 overflow-y-auto">
                        <span>{description}</span>
                    </div>
                </div>
                <a className="self-center text-black text-center bg-yellow-300
                             py-1 px-3 rounded-md select-none w-20
                             border border-solid border-transparent
                             transition-colors ease duration-300
                             hover:bg-yellow-400" href={link}>Visit</a>
            </div>
        </div>
    )
}