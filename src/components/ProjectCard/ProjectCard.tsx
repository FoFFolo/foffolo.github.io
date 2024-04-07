type ProjectCardProps = {
    title: string;
    description: string;
    link: string;
    image_url: string;
    cardWidth: number | undefined;
}

export default function ProjectCard({title, description, link, image_url, cardWidth} : ProjectCardProps) {
    return (
        <div className={`projectcard`} style={{ width: !cardWidth ? 'auto' : `${cardWidth}px` }}>
            <img src={image_url} className="h-32 bg-emerald-500 object-contain object-center select-none
                                    justify-self-center" />
            <div className="h-56 flex flex-col justify-between text-center">
                <div className="projectcard__description">
                    <h3 className='text-xl font-bold mb-2'>{title}</h3>
                    <div id="scroll-style" className="max-h-36 py-2 px-1 text-sm text-gray-700">
                        <span>{description}</span>
                    </div>
                </div>
                <a className="self-center text-black text-center
                             py-2 px-7 rounded-md select-none text-xl
                             border border-solid border-transparent
                             transition-colors ease duration-300
                             bg-yellow-300 hover:bg-yellow-400" 
                    href={link}>Visit</a>
            </div>
        </div>
    )
}