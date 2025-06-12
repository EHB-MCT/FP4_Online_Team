import clsx from "clsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

//Components
import { NextProject } from "../components/NextProject";

//Hooks
// import { useVerified } from "../../../shared/const/context/VerifiedContext/VerifiedContext";
import { useProjectWithIdData } from "../../../shared/const/hooks/getProjectWithId.hook";

//CSS
import styles from "./projectDetail.module.scss"

export const ProjectsDetail = () => {
	// const { verified } = useVerified();
	
	const [verified, setVerified] = useState(true);
	const [award_ids, setAwardIds] = useState([]);
	const [popupVisibility, setPopupVisibility] = useState(false);
	const [project_id, setProjectId] = useState(null);

	const { id } = useParams();
	console.log(id)
	const { data } = useProjectWithIdData(id);

	console.log(data);

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
		
		// fetch(`https://api.shiftfestival.be/api/vote`, {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	credentials: 'include',
		// 	body: JSON.stringify({
		// 		award_ids,
		// 		project_id
		// 	})
		// })
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
									)}
									id="1"
									onClick={ handleAwardSelection }
								>
									<img src="temp/badge.webp" alt="Badge voor impactsprijs" />
									<h4 
										className="black-text"
									>
										Impactprijs
									</h4>
								</div>
								<div className={clsx(
										styles["project-detail-wrapper--vote-pop-up--category-wrapper--category-card"],
										award_ids.includes("2") && styles.selected
									)}
									id="2"
									onClick={ handleAwardSelection }
								>
									<img src="temp/badge.webp" alt="Badge voor Juryprijs" />
									<h4 
										className="black-text"
									>
										Juryprijs
									</h4>
								</div>
								<div className={clsx(
										styles["project-detail-wrapper--vote-pop-up--category-wrapper--category-card"],
										award_ids.includes("3") && styles.selected
									)}
									id="3"
									onClick={ handleAwardSelection }
								>
									<img src="temp/badge.webp" alt="Badge voor innovatieprijs" />
									<h4 
										className="black-text"
									>
										Innovatieprijs
									</h4>
								</div>
							</div>
							<div className={clsx(styles["project-detail-wrapper--vote-pop-up--button-wrapper"])}>
								<button
									onClick={ handleVoteRequest }
									className="button"
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
