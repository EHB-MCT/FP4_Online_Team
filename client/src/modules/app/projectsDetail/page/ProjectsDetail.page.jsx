import clsx from "clsx";

//Components
import { NextProject } from "../components/NextProject";

//Hooks
import { useVerified } from "../../../shared/const/context/VerifiedContext/VerifiedContext";

//CSS
import styles from "./projectDetail.module.scss"
import { useState } from "react";

export const ProjectsDetail = () => {
	//  const { verified } = useVerified();

	const [verified, setVerified] = useState(true);
	const [popupVisibility, setPopupVisibility] = useState(false);

	const handleOpenVotePopup = () => {
		console.log("click");
		setPopupVisibility(true);
	}

	return (
		<>
			<section className={clsx(styles["project-detail-wrapper"])}>
				<div className="inner-wrapper">
					<NextProject />
					{
						verified && 
						<div className={clsx(styles["project-detail-wrapper--voting-wrapper"])} >
							<button
								onClick={ handleOpenVotePopup }
							>
								Vote button
							</button>
						</div>

					}
					{

						verified && popupVisibility &&
						<div className={clsx(styles["project-detail-wrapper--vote-pop-up"])}>
							<h3>Nomineer categorie</h3>
							<div className={clsx(styles["project-detail-wrapper--vote-pop-up--category-wrapper"])}>
								<div className={clsx(styles["project-detail-wrapper--vote-pop-up--category-wrapper--category-card"])}>
									<h4 
										className="black-text"
									
									>
										Impactprijs
									</h4>
								</div>
								<div className={clsx(styles["project-detail-wrapper--vote-pop-up--category-wrapper--category-card"])}>
									<h4 
										className="black-text"
									>
										Juryprijs
									</h4>
								</div>
								<div className={clsx(styles["project-detail-wrapper--vote-pop-up--category-wrapper--category-card"])}>
									<h4 
										className="black-text"
									>
										Innovatieprijs
									</h4>
								</div>
								<button></button>
							</div>
						</div>

					}

					<div>
						<h2>Project naam</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolores aliquam voluptates voluptatum optio dicta eveniet excepturi consequatur suscipit delectus, doloribus repudiandae quia, nobis velit facere autem labore corporis nulla.
							Tenetur, perferendis doloremque tempore ipsam consectetur ea est ipsum consequatur voluptatem, voluptatibus nihil voluptates nulla deleniti quam excepturi ex odit nobis consequuntur quidem obcaecati cum nostrum. Ullam laudantium tempore suscipit.
						</p>
						<img src="homepage-image.png" alt="" />
					</div>
				</div>
			</section>
		</>
	);
};
