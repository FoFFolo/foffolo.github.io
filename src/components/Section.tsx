type SectionProps = {
    title: string;
    children: React.ReactElement
}

export default function Section({ title, children }: SectionProps) {
    return (
        <section className="mt-20 mb-28">
            <h3 id={title.replace(' ', '')} className='text-4xl md:text-5xl font-bold mb-8'>{title}</h3>
            {children}
        </section>
    )
}