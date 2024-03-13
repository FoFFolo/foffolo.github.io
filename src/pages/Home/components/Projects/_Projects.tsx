import { useEffect, useRef, useState } from "react"
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import chevron_left from '../../../../assets/chevron-left.svg';
import chevron_right from '../../../../assets/chevron-right.svg';

type ProjectProps = {
    githubData: Record<string, any>;
    projectImagesUrl: Record<string, string>;
}

export default function Projects({ githubData, projectImagesUrl }: ProjectProps) {
    const projectCarouselRef = useRef<HTMLDivElement | null>(null)
    const carouselRef = useRef<HTMLUListElement | null>(null);
    const panelWidth = useRef(0);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const currentPos = useRef(0);
    const maxScroll = useRef(0);
    const [carouselOffset, setCarouselOffset] = useState(0);

    function setDOM_properties() {
        if (!carouselRef.current || !projectCarouselRef.current) return;

        // METODO GIUSTO
        // panelWidth.current = Math.round((carouselRef.current.offsetWidth - (30 * (projectsOnCarousel - 1))) / projectsOnCarousel);
        panelWidth.current = (carouselRef.current.offsetWidth - (30 * (githubData.length - 1))) / githubData.length;
        // console.log("ProjectCard Width: ", panelWidth.current)

        // Impostare la lunghezza del carousel, sommando alla dimensione della projectCard, 60px(30px+30px per il gap), + 120px per visualizzare gli altri progetti
        // const projectCarouselWidth = panelWidth.current + 60 + 120
        // projectCarouselRef.current.style.width = `${projectCarouselWidth}px`;

        // maxScroll.current = carouselRef.current.offsetWidth - panelWidth.current - 120 - 60 - 1;
        maxScroll.current = carouselRef.current.offsetWidth - projectCarouselRef.current.offsetWidth;

        // console.log("maxScroll:", maxScroll.current)
        
        // // possibleScrollArea.current.start = Math.round((panelWidth.current - 60))
        // possibleScrollArea.current.start = (panelWidth.current - 60)
        // possibleScrollArea.current.end = (maxScroll.current - panelWidth.current + 60)
        // console.log("endScroll: ", possibleScrollArea.current.end)

        // // const startOffset = (Math.round(panelWidth.current) * 2) - 60 + 30
        // const startOffset = (panelWidth.current * 2) - 60 + 30
    }

    useEffect(() => {
        setDOM_properties();

        window.addEventListener('resize', setDOM_properties);
        () => window.removeEventListener('resize', setDOM_properties);
    }, []);

    type DirectionValues = "sx" | "dx"
    const handleControllerClick = (direction: DirectionValues): void => {
        if (!carouselRef.current || isDragging.current) return;
        isDragging.current = true;

        // add animation when fixCarousel() delete it
        if (!carouselRef.current.classList.contains("carousel-animation")) {
            carouselRef.current.classList.add("carousel-animation");
        }

        // console.log("direction:", direction)
        if (direction === "sx") {
            // console.log("sinistra")
            if (carouselOffset-panelWidth.current >= 0 && carouselOffset-panelWidth.current <= maxScroll.current) {
                // console.log("degrada")
                setCarouselOffset(prevCarouselOffset => prevCarouselOffset-panelWidth.current);  
            }else if(carouselOffset == 0) {
                // console.log("niente")
                isDragging.current = false;
            }else if (carouselOffset-panelWidth.current <= 0) {
                // console.log("cane")
                setCarouselOffset(0);
            }
        } 
        else {
            // console.log("destra")
            if (carouselOffset+panelWidth.current >= 0 && carouselOffset+panelWidth.current <= maxScroll.current) {
                // console.log("avanza")
                setCarouselOffset(prevCarouselOffset => prevCarouselOffset+panelWidth.current);
            } else if (carouselOffset == maxScroll.current) {
                isDragging.current = false;
            } else if (carouselOffset+panelWidth.current >= maxScroll.current) {
                setCarouselOffset(maxScroll.current);
            }
        }
    }

    const Controller = ({ direction }: { direction: DirectionValues }): JSX.Element => {
        return (
            <span
                className={`controller ${direction}`}
                onClick={() => handleControllerClick(direction)}
            >
                <img src={direction === "sx" ? chevron_left : chevron_right} />
            </span>
        )
    }

    const projectCards = (): JSX.Element[] | undefined => {
        return githubData.map((repo: Record<string, any>, id: number): JSX.Element => {
            console.log(projectImagesUrl[repo.name])
            return <ProjectCard key={id}
                title={repo.name}
                description={repo.description}
                link={repo.html_url}
                image_url={projectImagesUrl[repo.name]}
            />
        });
    }

    // const handleSetOffsets = (baseValue: number): void => {
    //     setCarouselOffset({
    //         "offset": baseValue,
    //         "prevTriggerOffset": baseValue - (panelWidth.current / 4),
    //         "nextTriggerOffset": baseValue + (panelWidth.current / 4),
    //         "panelCenterPos": baseValue
    //     });
    // }

    // const getProject = (pos: number, id: number) => {
    //     return <ProjectCard key={id}
    //         title={githubData[pos].name}
    //         description={githubData[pos].description}
    //         link={githubData[pos].html_url}
    //     />
    // }

    // const infinite_carousel = useMemo(() => {
    //     if (githubData.length === 1) {
    //         return projectCards();
    //     } else if (githubData.length === 2) {
    //         return [
    //             getProject(1, -1),
    //             projectCards(),
    //             getProject(0, -3),
    //         ];
    //     } else {
    //         return [
    //             getProject(githubData.length - 1, -1),
    //             projectCards(),
    //             getProject(0, -3),
    //         ];
    //     }
    // }, [])

    // const fixCarousel = (): void => {
    //     if (!carouselRef.current) return;
    //     isDragging.current = false;

    //     let newFixPos: number | null = null

    //     if (carouselOffset.offset <= possibleScrollArea.current.start) {
    //         // go to third to last project
    //         carouselRef.current.classList.remove("carousel-animation");
    //         // newFixPos = Math.round(maxScroll.current - (panelWidth.current * 2) - 30 + 60);
    //         newFixPos = maxScroll.current - (panelWidth.current * 2) - 30 + 60;
    //     } else if (carouselOffset.offset >= possibleScrollArea.current.end) {
    //         // go to third project
    //         carouselRef.current.classList.remove("carousel-animation");
    //         // newFixPos = Math.round(panelWidth.current * 2 + 60 - 90);
    //         newFixPos = panelWidth.current * 2 + 60 - 90;
    //     }

    //     if (newFixPos) {
    //         handleSetOffsets(newFixPos);
    //     }
    // }

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!projectCarouselRef.current || !carouselRef.current) return;
        // console.log(e.target)
        
        // console.log("pointer down");

        isDragging.current = true;

        if (!(e.target as Element).classList.contains("project__btn")) {
            // if this is active, the hyperlink doesn't work
            projectCarouselRef.current.setPointerCapture(e.pointerId);
        }

        carouselRef.current.classList.remove("carousel-animation");

        startX.current = e.pageX - carouselRef.current.offsetLeft;
        currentPos.current = carouselOffset;
    }
    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging.current || !carouselRef.current) return;
        e.preventDefault();

        const x = e.pageX - carouselRef.current.offsetLeft;
        let newOffset = (currentPos.current - (x - startX.current));

        if (newOffset >= 0 && newOffset <= maxScroll.current) {
            setCarouselOffset(newOffset);
        } else {
            return;
        }
    }
    const handlePointerUp = () => {
        // if (!carouselRef.current) return;
        // console.log("pointer up");
        isDragging.current = false;

        // let fixedOffset: number | null = null;

        // carouselRef.current.classList.add("carousel-animation");
        // if (carouselOffset.offset <= carouselOffset.prevTriggerOffset) {
        //     console.log("RAGGIUNTO PREV");
        //     // fixedOffset = Math.round(panelOffsets.panelCenterPos - (panelWidth.current + 30));
        //     fixedOffset = carouselOffset.panelCenterPos - (panelWidth.current + 30);
        // } else if (carouselOffset.offset >= carouselOffset.nextTriggerOffset) {
        //     console.log("RAGGIUNTO NEXT");
        //     fixedOffset = Math.round(carouselOffset.panelCenterPos + (panelWidth.current + 30));
        //     fixedOffset = carouselOffset.panelCenterPos + (panelWidth.current + 30);
        // } else {
        //     console.log("return to the center one");
        //     setCarouselOffset({
        //         ...carouselOffset,
        //         "offset": carouselOffset.panelCenterPos,
        //     });
        // }

        // if (fixedOffset) handleSetOffsets(fixedOffset)
    }

    return (
        <div className="projects__container">
            {
                githubData.length === 1 ?
                    <>{projectCards()}</>
                    :
                    <>
                        <Controller direction="sx" />
                        <div ref={projectCarouselRef} className="projects__carousel" onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onTransitionEnd={() => isDragging.current = false}>
                            <ul ref={carouselRef} className="carousel carousel-animation" style={{ transform: `translate3d(-${carouselOffset}px,0,0)` }}>
                                {projectCards()}
                            </ul>
                        </div>
                        <Controller direction="dx" />
                    </>
            }
        </div>
    )
}