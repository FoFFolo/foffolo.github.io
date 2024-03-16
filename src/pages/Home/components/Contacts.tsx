import contactValues from '../../../utils/contacts_data.json';

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
            <li className="flex items-center gap-4">
                <div className='flex'>
                    <img src={img_url} className="w-10 h-8 object-contain object-center"/>
                    <span className='self-center font-extrabold sm:hidden'>:</span>
                </div>
                <h4 className='hidden sm:block sm:font-extrabold'>{type} :</h4>
                <span><a href={link} className="text-blue-600 hover:underline active:no-underline">{value}</a></span>
            </li>
        )
    }

    return (
        <div className="flex justify-center items-center md:text-lg">
            <ul className="grid gap-8">
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