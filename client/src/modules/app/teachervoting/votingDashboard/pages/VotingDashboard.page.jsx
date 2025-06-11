import clsx from "clsx"
import { useEffect,useState } from "react";

//CSS
import styles from "./votingDashboard.module.scss"
import { Nominee } from "../components/Nominee";



export const VotingDashboard = () => {
    const projects = {
        "Impact prijs": [
            { project_id: 1, project_name: "Project Alpha" },
            { project_id: 2, project_name: "Project Beta" },
            { project_id: 3, project_name: "Project Gamma" }
        ],
        "Jury prijs": [
            { project_id: 4, project_name: "Project Delta" },
            { project_id: 5, project_name: "Project Epsilon" },
            { project_id: 6, project_name: "Project Zeta" }
        ],
        "Innovatie prijs": [
            { project_id: 7, project_name: "Project Eta" },
            { project_id: 8, project_name: "Project Theta" },
            { project_id: 9, project_name: "Project Iota" }
        ]
    };

    // const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //     fetch(`https://api.shiftfestival.be/api/votes`)
    //     .then( response => response.json())
    //     .then( data => setProjects(data) );
    // }, [])

    return (
        <>
            <section className={clsx(styles["voting-dashboard-wrapper"])}>
                <div className="inner-wrapper">
                    <h2>Jouw top 3</h2>

                    <div className={clsx(styles["voting-dashboard-wrapper--category-wrapper"])}>
                        <h3>Impactsprijs</h3>
                        <div className={clsx(styles["voting-dashboard-wrapper--category-wrapper--nominees-wrapper"])}>
                            
                            { 
                                projects["Impact prijs"].map((element) => (
                                    <Nominee 
                                        key={element.project_id}
                                        project_name={element.project_name}
                                        project_id={element.project_id}
                                    />
                                ))
                            }
                            
                        </div>
                    </div>

                    <div className={clsx(styles["voting-dashboard-wrapper--category-wrapper"])}>
                        <h3>Jurypijs</h3>
                        <div className={clsx(styles["voting-dashboard-wrapper--category-wrapper--nominees-wrapper"])}>
                            { 
                                projects["Jury prijs"].map((element) => (
                                    <Nominee 
                                        key={element.project_id}
                                        project_name={element.project_name}
                                        project_id={element.project_id}
                                    />
                                ))
                            }
                        </div>
                    </div>

                    <div className={clsx(styles["voting-dashboard-wrapper--category-wrapper"])}>
                        <h3>Innovatiepijs</h3>
                        <div className={clsx(styles["voting-dashboard-wrapper--category-wrapper--nominees-wrapper"])}>
                            { 
                                projects["Innovatie prijs"].map((element) => (
                                    <Nominee 
                                        key={element.project_id}
                                        project_name={element.project_name}
                                        project_id={element.project_id}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}