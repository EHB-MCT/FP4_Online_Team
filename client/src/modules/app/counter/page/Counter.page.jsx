import { useState, useEffect } from "react";
import "./Counter.css";
import { useCounterData } from "../../../shared/const/hooks/getCounterData.hook";

export const Counter = () => {
    const { data } = useCounterData();
    const [totalCount, setTotalCount] = useState(0);
    const [roleCounts, setRoleCounts] = useState([]);

    useEffect(() => {
        if (data) {
            setTotalCount(data.total || 0);
            setRoleCounts(data.byRole || []);
        }
    }, [data]);

    return (
        <section className="inner-wrapper large" style={{ minHeight: "40dvh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div className="wrapper">
                <h2 className="green-text">
                    Totale inschrijvingen <br /> {totalCount}
                </h2>

                {roleCounts.length > 0 && (
                    <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem", textAlign: "center" }}>
                        {roleCounts.map((item) => (
                            <li key={item.role}>
                                <strong>{item.role}</strong>: {item.registrations}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};
