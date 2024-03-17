import { useEffect, useRef } from 'react';
import cornerLeftUp from '../../../assets/corner-left-up.svg';

export default function ScrollToTop() {
    const btnContainerRef = useRef<HTMLDivElement | null>(null);
    const btnRef = useRef<HTMLButtonElement | null>(null);

    const showBtn = () => {
        if (!btnContainerRef.current || !btnRef.current) return;

        if (window.scrollY > 750) {
            if (btnContainerRef.current.classList.contains("animate-btn_disappears")) {
                btnContainerRef.current.classList.replace("animate-btn_disappears", "animate-btn_appears");
            } else {
                btnContainerRef.current.classList.add("animate-btn_appears");
            }
        } else {
            btnContainerRef.current.classList.replace("animate-btn_appears", "animate-btn_disappears");
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", showBtn);

        () => window.removeEventListener("scroll", showBtn);
    }, []);

    return (
        <div ref={btnContainerRef} id="scroll" className="fixed bottom-4 -right-12">
            <button ref={btnRef} className="bg-orange-400 p-3 rounded-l-lg
                                            flex items-center justify-center
                                            transition ease-out duration-200"
                onClick={() => window.scrollTo(0, 0)}>
                <img src={cornerLeftUp} />
            </button>
        </div>
    )
}