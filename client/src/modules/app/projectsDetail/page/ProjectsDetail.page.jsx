import clsx from "clsx";
import { useEffect, useState } from "react";

//Components
import { NextProject } from "../components/NextProject";

//Hooks
import { useVerified } from "../../../shared/const/context/VerifiedContext/VerifiedContext";

//CSS
import styles from "./projectDetail.module.scss"

export const ProjectsDetail = () => {
	const { verified } = useVerified();
	
	// const [verified, setVerified] = useState(true);
	const [award_ids, setAwardIds] = useState([]);
	const [popupVisibility, setPopupVisibility] = useState(false);
	const [project_id, setProjectId] = useState(null);

	useEffect(() => {
		setProjectId(1)
	}, [])

	const handleOpenVotePopup = () => {
		console.log("click");
		setPopupVisibility(true);
	}
	const handleClosePopup = () => {
		setPopupVisibility(false)
	}

	const handleAwardSelection = (e) => {
		const selectedAwardId = e.currentTarget.id;
		setAwardIds((prev) =>
			prev.includes(selectedAwardId)
				? prev.filter((id) => id !== selectedAwardId)
				: [...prev, selectedAwardId]
		);
	}

	const handleVoteRequest = () => {
		console.log("selected award", award_ids, project_id);
		
		fetch(`https://api.shiftfestival.be/api/vote`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: 'include',
			body: JSON.stringify({
				award_ids,
				project_id
			})
		})
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
							<div className={clsx(styles["project-detail-wrapper--vote-pop-up--header"])}>
								<div className={clsx(styles["project-detail-wrapper--vote-pop-up--header--spacer"])} ></div>
								<h3>Nomineer categorie</h3>
								<div 
									className={clsx(styles["project-detail-wrapper--vote-pop-up--header--close-btn"])}
									onClick={ handleClosePopup }
								>
									<p>
										X
									</p>
								</div>
							</div>

							<div className={clsx(styles["project-detail-wrapper--vote-pop-up--category-wrapper"])}>
								<div className={clsx(
									styles["project-detail-wrapper--vote-pop-up--category-wrapper--category-card"],
									award_ids.includes("1") && styles.selected
								)}>
									<h4 
										className="black-text"
										id="1"
										onClick={ handleAwardSelection }
									>
										Impactprijs
									</h4>
								</div>
								<div className={clsx(
									styles["project-detail-wrapper--vote-pop-up--category-wrapper--category-card"],
									award_ids.includes("2") && styles.selected
								)}>
									<h4 
										className="black-text"
										id="2"
										onClick={ handleAwardSelection }
									>
										Juryprijs
									</h4>
								</div>
								<div className={clsx(
									styles["project-detail-wrapper--vote-pop-up--category-wrapper--category-card"],
									award_ids.includes("3") && styles.selected
								)}>
									<h4 
										className="black-text"
										id="3"
										onClick={ handleAwardSelection }
									>
										Innovatieprijs
									</h4>
								</div>
							</div>
							<div className={clsx(styles["project-detail-wrapper--vote-pop-up--button-wrapper"])}>
								<button
									onClick={ handleVoteRequest }
								>
									Stem
								</button>
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
