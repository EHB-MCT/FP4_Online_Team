import clsx from "clsx"
import { useEffect,useState } from "react";

//CSS
import styles from "./votingDashboard.module.scss"
import { Nominee } from "../components/Nominee";

export const VotingDashboard = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`https://api.shiftfestival.be/api/votes`)
        .then( response => response.json())
        .then( data => setProjects(data) );
    }, [])

    return (
        <>
            <section className={clsx(styles["voting-dashboard-wrapper"])}>
                <div className="inner-wrapper">
                    <h2>Jouw top 3</h2>

                    <div className={clsx(styles["voting-dashboard-wrapper--category-wrapper"])}>
                        <h3>Impactsprijs</h3>
                        <div className={clsx(styles["voting-dashboard-wrapper--category-wrapper--nominees-wrapper"])}>
                            
                            {
                                
                            }
                            
                        </div>
                    </div>

                    <div className={clsx(styles["voting-dashboard-wrapper--category-wrapper"])}>
                        <h3>Jurypijs</h3>
                        <div className={clsx(styles["voting-dashboard-wrapper--category-wrapper--nominees-wrapper"])}>
                            <Nominee />

                            <Nominee />

                            <Nominee />

                        </div>
                    </div>

                    <div className={clsx(styles["voting-dashboard-wrapper--category-wrapper"])}>
                        <h3>Innovatiepijs</h3>
                        <div className={clsx(styles["voting-dashboard-wrapper--category-wrapper--nominees-wrapper"])}>
                            <Nominee />

                            <Nominee />

                            <Nominee />

                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}