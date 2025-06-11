import clsx from "clsx"

//CSS
import styles from "./awardsInfo.module.scss"

export const AwardsInfo = ({ price_title, badge, description }) => {
    return (
        <div className={clsx(styles["award-info-wrapper"])}> 
            <img className={clsx(styles["awards-info-wrapper--award-badge"])} src="Logo.svg" alt="" />
            <h3 className="white-text" style={{textAlign: "start"}}>
                { price_title }
            </h3>
            <p className="white-text" style={{textAlign: "start"}}>
                { description }
            </p>
        </div>
    )
}