type SectionProps = {
    title: string;
    children: React.ReactElement
}

export default function Section({ title, children }: SectionProps) {
    return (
        <section className="mt-20 mb-28 [margin-inline:_clamp(.8em,4vw,2em)]">
            <h3 id={title.replace(' ', '')} className='[font-size:_clamp(2em,4vw,2.9em)] mb-8'>{title}</h3>

            {children}
        </section>
    )
}