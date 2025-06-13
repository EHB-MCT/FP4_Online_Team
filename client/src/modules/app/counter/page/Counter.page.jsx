import { useState, useEffect } from "react";

//Counter
import "./Counter.css";

//Hooks
import { useCounterData } from "../../../shared/const/hooks/getCounterData.hook";

export const Counter = () => {
    const { data } = useCounterData();
    const [count, setCount] = useState(null);

    useEffect(() => {
        if (data && typeof data.count !== "undefined") {
            setCount(data.count);
        }
    }, [data]);

    return (
        <section className="inner-wrapper large" style={{minHeight: "40dvh", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div className="wrapper">
                <h2 className="green-text">
                    Totale inschrijvingen <br /> {count}
                </h2>
            </div>
        </section>
    );
};