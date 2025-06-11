import clsx from "clsx"

//CSS
import styles from "./nominee.module.scss"

export const Nominee = ({ project_name }) => {
    return (
        <>
            <div className={clsx(styles["nominee-item"])}>
                <h3>{ project_name }</h3>
            </div>
        </>
    )
}