import { useEffect, useRef } from 'react';
import arrowUp from '../../../assets/arrow-up.svg';

export default function ScrollToTop() {
    const btnContainerRef = useRef<HTMLDivElement | null>(null);
    const btnRef = useRef<HTMLButtonElement | null>(null);
    var prevScrolly = 0;

    const showBtn = () => {
        if (!btnContainerRef.current || !btnRef.current) return;

        if (window.scrollY > 750) {
            // console.log("winScr: " + window.scrollY);
            // console.log("prevScr: " + prevScrolly);
            if (window.scrollY > prevScrolly) {
                prevScrolly = window.scrollY;
                btnContainerRef.current.classList.replace("animate-btn_appears", "animate-btn_disappears");
            } else {
                if (btnContainerRef.current.classList.contains("animate-btn_disappears")) {
                    btnContainerRef.current.classList.replace("animate-btn_disappears", "animate-btn_appears");
                } else {
                    btnContainerRef.current.classList.add("animate-btn_appears");
                }
                prevScrolly = window.scrollY + 10;
            }
        } else {
            prevScrolly = window.scrollY;
            btnContainerRef.current.classList.replace("animate-btn_appears", "animate-btn_disappears");
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", showBtn);

        () => window.removeEventListener("scroll", showBtn);
    }, []);

    return (
        <div ref={btnContainerRef} id="scroll" className="fixed -bottom-16 right-2">
            <button ref={btnRef} className="bg-backToTop py-3 px-4 rounded-full
                                            flex items-center justify-center
                                            transition ease-out duration-200"
                onClick={() => window.scrollTo(0, 0)}>
                <img src={arrowUp} />
            </button>
        </div>
    )
}