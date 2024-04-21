import { useState, useEffect } from "react"

export default function Title() {
    const [isPageLoading, setIsPageLoading] = useState(true);

    useEffect(() => {
        setIsPageLoading(false);
    }, []);

    const DescriptionSpan = ({ children, animation }: { children: string | JSX.Element, animation: string }) => {
        return (
            <span className={`opacity-0 text-start ${animation} font-semibold`}>{children}</span>
        )
    }

    return (
        !isPageLoading ?
        <div className="flex flex-col justify-center items-center text-center">
            <div className="text-fn_clamp font-righteous 
                                        tracking-[.20rem] not-italic text-blue-950">
                <h1 className="border-r-[.1em] overflow-hidden whitespace-nowrap my-0 mx-auto animate-surname_anim">Serratore</h1>
                <h1 className="w-0 overflow-hidden whitespace-nowrap my-0 mx-auto animate-name_anim">Federico</h1>
            </div>
            <div className="font-kodemono text-lg text-green-700">
                <div className="first__sentence">
                    {/* <span>{">"} </span> */}
                    <DescriptionSpan animation="animate-first_anim"><span>{">"} </span></DescriptionSpan>
                    <DescriptionSpan animation="animate-first_anim">Developer </DescriptionSpan>
                    <DescriptionSpan animation="animate-second_anim">for</DescriptionSpan>
                </div>
                <DescriptionSpan animation="animate-third_anim">everything</DescriptionSpan>
            </div>
        </div>
        : null
    )
}