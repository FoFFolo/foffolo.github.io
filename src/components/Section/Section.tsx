type SectionProps = {
    title: string;
    children: React.ReactElement
}

export default function Section({ title, children }: SectionProps) {
    return (
        <section className="section__container">
            <h3 id={title.replace(' ', '')} className='section__title'>{title}</h3>

            {children}
        </section>
    )
}