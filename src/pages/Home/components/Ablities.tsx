import abilities_data from '../../../utils/abilities_data.json';

export default function Abilities() {
    type AbilityCardProps = {
        title: string;
        image_url: string;
    }

    function isMobileDevice() {
        return /android|iphone|kindle|ipad|blackberry|IEMobile|Opera mini|webOS|ipod/i.test(navigator.userAgent);
    }

    const AbilityCard = ({ title, image_url }: AbilityCardProps) => {
        // TODO: make the card similar to a military honor badge
        return (
            <div className={`abilitycard ${!isMobileDevice() ? 'hover:scale-110' : ''}`}>
                <img src={image_url} className="w-36 h-36 object-contain select-none pointer-events-none" />
                <div className="max-w-36 text-center mb-5">
                    <h3 className='font-bold'>{title}</h3>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-wrap justify-evenly gap-8
                        p-7 shadow-inset-abilities h-[70vh] overflow-y-scroll
                        md:h-auto md:overflow-y-auto">
            {abilities_data.map((ability: AbilityCardProps, id: number) => {
                return <AbilityCard key={id} title={ability.title} image_url={ability.image_url} />
            })}
        </div>
    )
}