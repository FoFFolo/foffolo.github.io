import { useState, useEffect } from "react";

export default function Footer() {
    const [lastUpdate, setLastUpdate] = useState("");

    const format_pushed_at_date = (pushed_at: string): string => {
        const formatted_date = 
            new Date(pushed_at).toLocaleString('en-US', { year: "numeric", month: 'long' })
        return formatted_date
    }

    useEffect(() => {
        fetch(`https://api.github.com/repos/FoFFolo/foffolo.github.io`)
            .then((response) => response.json())
            .then((data) => {
                const last_update = format_pushed_at_date(data.pushed_at.split("T")[0]);
                setLastUpdate(last_update);
            });
    }, [])

    return (
        <footer>
            <div className="last-update">
                <h3>Last updated in: {lastUpdate}</h3>
            </div>
        </footer>
    )
}