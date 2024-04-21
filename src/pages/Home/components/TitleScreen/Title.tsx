import { useState, useEffect } from "react"

export default function Title() {
    const [isPageLoading, setIsPageLoading] = useState(true);

    useEffect(() => {
        setIsPageLoading(false);
    }, []);

    const TextAppears = ({ animation, children }: { animation: string, children: string }) => {
        return (
            <h1 className={`opacity-0 ${animation}`}>{children}</h1>
        )
    }

    const TypingText = ({ animation, children }: { animation: string, children: string }) => {
        return (
            <p className={`w-0 text-start border-r-[.1em] border-transparent overflow-hidden whitespace-nowrap my-0 ${animation}`}>{children}</p>
        )
    }

    return (
        !isPageLoading ?
            <div className="flex flex-col justify-center items-center text-center">
                <div className="text-fn_clamp font-righteous 
                                        tracking-[.20rem] not-italic text-blue-950">
                    {/* <h1 className="border-r-[.1em] overflow-hidden whitespace-nowrap my-0 mx-auto animate-surname_anim">Serratore</h1> */}
                    <TextAppears animation="animate-surname-anim">Serratore</TextAppears>
                    <TextAppears animation="animate-name-anim">Federico</TextAppears>
                </div>
                <div className="font-kodemono text-lg text-green-700">
                    <div className="flex gap-2">
                        <TextAppears animation="animate-greater-anim">&gt; </TextAppears>
                        <TypingText animation="animate-first-anim">Developer for</TypingText>
                    </div>
                    {/* <TypingText animation="w-full">everything</TypingText> */}
                    <div className="absolute">
                        <TypingText animation="animate-second-anim ml-5">everything</TypingText>
                    </div>
                </div>
            </div>
            : null
    )
}