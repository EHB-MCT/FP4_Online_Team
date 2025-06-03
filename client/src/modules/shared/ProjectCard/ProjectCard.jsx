//CSS
import styles from "./projectCard.module.css";

export const ProjectCard = ({ project_name, student, banner_image }) => {

    return (
        <div className={styles.card}>
            <div className={styles.banner_image}>
                <img src={banner_image} alt="image of project" />
            </div>
            <div className={styles.textBox}>
                <p className={styles.projectName}>
                    <strong>{project_name}</strong>
                </p>
                <p className={styles.name}>{student}</p>
            </div>
        </div>
    );

};