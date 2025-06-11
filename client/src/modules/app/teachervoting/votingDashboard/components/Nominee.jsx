import clsx from "clsx"

//CSS
import styles from "./nominee.module.scss"

export const Nominee = () => {
    return (
        <>
            <div className={clsx(styles["nominee-item"])}>
                <h3>Naam</h3>
            </div>
        </>
    )
}