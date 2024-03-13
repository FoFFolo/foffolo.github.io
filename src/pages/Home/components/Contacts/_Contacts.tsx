import contactValues from '../../../../utils/contacts_data.json';

export default function Contacts() {
    type ContactProps = {
        type: string;
        link: string;
        value: string;
        img_url: string;
    }

    const contactValuesData: ContactProps[] = contactValues;

    const Contact = ({type, link, value, img_url} : ContactProps): JSX.Element => {
        return (
            <li className="contact">
                <img src={img_url} />
                <h4>{type}: </h4>
                <span><a href={link}>{value}</a></span>
            </li>
        )
    }

    return (
        <div className="contacts__container">
            <ul className="contacts__list">
                {contactValuesData.map((contact: ContactProps, id: number) => {
                    return <Contact key={id}
                        type={contact.type}
                        link={contact.link}
                        value={contact.value}
                        img_url={contact.img_url}
                    />
                })}
            </ul>
        </div>
    )
}