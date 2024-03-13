import { useEffect, useRef } from 'react';
import cornerLeftUp from '../../../../assets/corner-left-up.svg';

export default function ScrollToTop() {
    const btnContainerRef = useRef<HTMLDivElement | null>(null);
    const btnRef = useRef<HTMLButtonElement | null>(null);

    const showBtn = () => {
        if (!btnContainerRef.current || !btnRef.current) return;

        if (window.scrollY > 750) {
            // btnContainerRef.current.classList.replace("inactive", "active");

            if (btnContainerRef.current.classList.contains("inactive")) {
                btnContainerRef.current.classList.replace("inactive", "active");
            } else {
                btnContainerRef.current.classList.add("active");
            }
        } else {
            btnContainerRef.current.classList.replace("active", "inactive");
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", showBtn);

        () => window.removeEventListener("scroll", showBtn);
    }, []);

    return (
        <div ref={btnContainerRef} className="back-to-top">
            <button ref={btnRef} className="back-to-top__btn" onClick={() => window.scrollTo(0, 0)}>
                <img src={cornerLeftUp} />
            </button>
        </div>
    )
}