import { useEffect, useMemo, useRef, useState } from "react"
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import chevron_left from '../../../../assets/chevron-left.svg';
import chevron_right from '../../../../assets/chevron-right.svg';
import projectCard_images from '../../../../utils/projectCard_images.json';

type ProjectProps = {
    githubData: Record<string, any>;
}

export default function Projects({ githubData }: ProjectProps) {
    const projectCarouselRef = useRef<HTMLDivElement | null>(null)
    const carouselRef = useRef<HTMLUListElement | null>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const currentPos = useRef(0);
    const hasStoppedScrollY = useRef(false);
    const numCardsOnScreen = useRef(1);
    const [showBtnIfMobile, setShowBtnIfMobile] = useState(false);
    const [carouselOffset, setCarouselOffset] = useState(0);

    const cardsOffsets = useRef([0]);
    const [cardWidth, setCardWidth] = useState<number>();
    const cardPos = useRef(0);

    const dotPos = useRef(0);

    function isMobileDevice() {
        return /android|iphone|kindle|ipad|blackberry|IEMobile|Opera mini|webOS|ipod/i.test(navigator.userAgent);
    }

    function setDOM_properties() {
        if (!projectCarouselRef.current || githubData.length === 1) return;

        let cardDimension: number | undefined = undefined;
        console.log("window width: ", window.innerWidth);
        if (window.innerWidth < 768) {
            // one projectCard
            numCardsOnScreen.current = 1;
            cardPos.current = 1;
            dotPos.current = 0;
            cardDimension = projectCarouselRef.current.offsetWidth - 16;
        } else {
            // two projectCard
            numCardsOnScreen.current = 2;
            cardPos.current = 2;
            dotPos.current = 0;
            cardDimension = (projectCarouselRef.current.offsetWidth - 16) / 2 - 16; // half a normal projectCard width - half flex gap
        }
        setCardWidth(cardDimension);

        // set of projectCard positions
        if (cardWidth) {
            for (let pos = 1; pos < githubData.length + (numCardsOnScreen.current * 2); pos++) {
                cardsOffsets.current[pos] = (cardWidth + 32) * pos;
            }
        }
        console.log("sets of card offsets: ", cardsOffsets.current)

        setCarouselOffset(cardsOffsets.current[cardPos.current])
        setShowBtnIfMobile(isMobileDevice());
    }

    useEffect(() => {
        setDOM_properties();

        window.addEventListener('resize', setDOM_properties);
        () => window.removeEventListener('resize', setDOM_properties);
    }, [cardWidth]);

    type DirectionValues = "sx" | "dx"
    const handleControllerClick = (direction: DirectionValues): void => {
        if (!carouselRef.current || isDragging.current) return;
        isDragging.current = true;

        // add animation when fixCarousel() delete it
        if (!carouselRef.current.classList.contains("carousel-anim")) {
            carouselRef.current.classList.add("carousel-anim");
        }

        if (direction === "sx") {
            if (cardPos.current > 0) {
                cardPos.current--;
                dotPos.current = dotPos.current === 0 ? githubData.length-1 : dotPos.current-1;
                setCarouselOffset(cardsOffsets.current[cardPos.current]);
            } else {
                isDragging.current = false;
            }
        }
        else {
            if (carouselOffset < cardsOffsets.current[cardsOffsets.current.length - 1]) {
                cardPos.current++;
                dotPos.current = dotPos.current === githubData.length-1 ? 0 : dotPos.current+1;
                setCarouselOffset(cardsOffsets.current[cardPos.current]);
            } else {
                isDragging.current = false;
            }
        }
    }

    const Controller = ({ direction }: { direction: DirectionValues }): JSX.Element => {
        return (
            <span
                className={`${showBtnIfMobile && 'hidden'} select-none opacity-0 group-hover:opacity-100 absolute ${direction === 'dx' ? '-right-3' : '-left-3'} bg-gray-50 hover:bg-gray-100 z-10 p-2 rounded-full transition-all ease-in-out duration-300`}
                onClick={() => handleControllerClick(direction)}
            >
                <img src={direction === "sx" ? chevron_left : chevron_right} />
            </span>
        )
    }

    const projectCards = githubData.map((repo: Record<string, any>, id: number): JSX.Element => {
        // console.log(projectImagesUrl[repo.name])
        return <ProjectCard key={id}
            title={repo.name}
            description={repo.description}
            link={repo.html_url}
            cardWidth={cardWidth}
        />
    });

    const getProject = (pos: number, id: number) => {
        return <ProjectCard key={id}
            title={githubData[pos].name}
            description={githubData[pos].description}
            link={githubData[pos].html_url}
            cardWidth={cardWidth}
        />
    }

    const infinite_carousel = useMemo((): JSX.Element[] => {
        if (githubData.length === 1) return [];
        if (numCardsOnScreen.current === 1) {
            // one projectCard
            return [
                getProject(githubData.length - 1, -1),
                projectCards,
                getProject(0, githubData.length + 1),
            ];
        } else {
            // two projectCard
            return [
                getProject(githubData.length - 2, -2),
                getProject(githubData.length - 1, -1),
                projectCards,
                getProject(0, githubData.length + 1),
                getProject(1, githubData.length + 2),
            ];
        }

    }, [cardWidth]);

    const fixCarousel = (): void => {
        if (!carouselRef.current) return;
        console.log("fix carousel")
        document.body.style.overflow = 'unset';

        isDragging.current = false;

        console.log("cardPos:", cardPos.current)

        if (cardPos.current == 0) {
            console.log("movimendo al penultimo")
            // go from first to second-last project
            carouselRef.current.classList.remove("carousel-anim");
            cardPos.current = githubData.length;
            dotPos.current = githubData.length - numCardsOnScreen.current;
            setCarouselOffset(cardsOffsets.current[cardPos.current])
        } else if (cardPos.current == cardsOffsets.current.length - numCardsOnScreen.current) {
            console.log("movimendu al secondo")
            // go from last to second project
            carouselRef.current.classList.remove("carousel-anim");
            cardPos.current = numCardsOnScreen.current;
            dotPos.current = 0;
            setCarouselOffset(cardsOffsets.current[cardPos.current])
        }
    }

    const handlePointerDown = (e: React.PointerEvent<HTMLElement>) => {
        if (!projectCarouselRef.current || !carouselRef.current || isDragging.current) return;
        // console.log((e.target as Element).tagName)

        console.log("pointer down");

        console.log("cardPos:", cardPos.current)
        isDragging.current = true;

        if ((e.target as Element).tagName !== 'A') {
            // if this is active, the hyperlink doesn't work
            projectCarouselRef.current.setPointerCapture(e.pointerId);
        }

        carouselRef.current.classList.remove("carousel-anim");

        startX.current = e.pageX - carouselRef.current.offsetLeft;
        currentPos.current = carouselOffset;
        console.log(startX.current)
    }
    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging.current || !carouselRef.current) return;
        e.preventDefault();

        if (isMobileDevice() && !hasStoppedScrollY.current) {
            document.body.style.overflow = 'hidden';
            hasStoppedScrollY.current = true;
        }

        const x = e.pageX - carouselRef.current.offsetLeft;
        let newOffset = (currentPos.current - (x - startX.current));

        if (newOffset >= 0 && newOffset <= cardsOffsets.current[cardsOffsets.current.length - numCardsOnScreen.current]) {

            setCarouselOffset(newOffset);
            console.log("cardPos:", cardPos.current);
            // console.log("prev offset: ", (cardsOffsets.current[cardPos.current - 1] + cardWidth.current))
            // console.log("next offs: ", (cardsOffsets.current[cardPos.current + 1] - cardWidth.current))
            console.log(newOffset)
            if (cardPos.current >= 0 && newOffset <= (cardsOffsets.current[cardPos.current - 1])) {
                console.log("raggiunto prev card offset");
                cardPos.current = cardPos.current - 1;
                dotPos.current = dotPos.current - 1;
            } else if (cardPos.current < githubData.length && newOffset >= (cardsOffsets.current[cardPos.current + 1])) {
                console.log("raggiunto next card offset");
                cardPos.current = cardPos.current + 1;
                dotPos.current = dotPos.current + 1;
            }
        } else {
            console.log("min or max reached")
            return;
        }
        console.log("------------------------------------")
    }
    const handlePointerUp = () => {
        if (!carouselRef.current || !cardWidth) return;
        console.log("pointer up");
        isDragging.current = false;

        if (isMobileDevice()) hasStoppedScrollY.current = false;

        carouselRef.current.classList.add("carousel-anim");
        console.log("cardPos:", cardPos.current)
        console.log("offset:", carouselOffset)
        // console.log("prev trigger:", (cardsOffsets.current[cardPos.current - 1] + cardWidth.current))
        // console.log("next trigger:", (cardsOffsets.current[cardPos.current + 1] - cardWidth.current))
        if (carouselOffset === 0 || carouselOffset === cardsOffsets.current[cardsOffsets.current.length - numCardsOnScreen.current]) {
            console.log("fix senza anim")
            fixCarousel();
        } else if (carouselOffset <= (cardsOffsets.current[cardPos.current - 1] + cardWidth)) {
            console.log("raggiunto prev trigger")
            setCarouselOffset(cardsOffsets.current[cardPos.current - 1]);
            cardPos.current--;
            dotPos.current = dotPos.current === 0 ? githubData.length-1 : dotPos.current-1;
        } else if (carouselOffset >= (cardsOffsets.current[cardPos.current + 1] - cardWidth)) {
            console.log("raggiunto next trigger")
            setCarouselOffset(cardsOffsets.current[cardPos.current + 1]);
            cardPos.current++;
            dotPos.current = dotPos.current === githubData.length-1 ? 0 : dotPos.current+1;
            console.log("gitlen: ", githubData.length-1)
            console.log("dotPos: ", dotPos.current)
        } else {
            setCarouselOffset(cardsOffsets.current[cardPos.current]);
        }
    }

    return (
        <div className="group relative w-full py-8">
            {
                githubData.length === 1 || (githubData.length === 2 && numCardsOnScreen.current === 2) ?
                        <div ref={projectCarouselRef} className={`m-auto ${githubData.length === 2 ? 'max-w-3xl flex gap-5' : 'max-w-md'}`}>
                            {projectCards}
                        </div>
                    :
                    <>
                        <div className="flex max-w-7xl items-center justify-center m-auto">
                            <Controller direction="sx" />
                            <div ref={projectCarouselRef} className="relative touch-pan-y select-none overflow-x-hidden flex gap-5 justify-start" onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onTransitionEnd={fixCarousel}>
                                <ul ref={carouselRef} className="flex justify-start gap-8 mx-2 my-4 carousel-anim" style={{ transform: `translate3d(-${carouselOffset}px,0,0)` }}>
                                    {infinite_carousel}
                                </ul>
                            </div>
                            <Controller direction="dx" />
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-2">
                            {githubData.map((_: any, i: number) => (
                                numCardsOnScreen.current === 1 ?
                                <span key={i} className={`${dotPos.current === i ? 'bg-yellow-300' : 'bg-gray-500'} p-1 rounded-full `}></span>
                                :
                                <span key={i} className={`${dotPos.current === i || (dotPos.current === githubData.length-1 ? (0 === i) : dotPos.current+1 === i) ? 'bg-yellow-300' : 'bg-gray-500'} p-1 rounded-full `}></span>
                            ))}
                        </div>
                    </>
            }
        </div>
    )
}