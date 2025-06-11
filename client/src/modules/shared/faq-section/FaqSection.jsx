import clsx from "clsx"

//Components
import { FaqDropdown } from "./components/faq-dropdown/FaqDropdown"

//CSS
import styles from "./faqsection.module.scss"

export const FaqSection = () => {
    return(
        <section className={clsx(styles["FAQ-section"])}>
            <div className="inner-wrapper">
                <div className={clsx(styles["FAQ-section--FAQ-wrapper"])}>
                    <h2>FAQ</h2>

                    <FaqDropdown />

                </div>
            </div>
        </section>
    )
}