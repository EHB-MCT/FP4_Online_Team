import clsx from "clsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";

//Components
import { Magazine } from "../../magazine/page/Magazine.page";

//Hooks
import { useVerified } from "../../../shared/const/context/VerifiedContext/VerifiedContext";
import { useProjectWithIdData } from "../../../shared/const/hooks/getProjectWithId.hook";

//CSS
import styles from "./projectDetail.module.scss"

export const ProjectsDetail = () => {
	const { verified } = useVerified();
	
	// const [verified, setVerified] = useState(true);
	const [award_ids, setAwardIds] = useState([]);
	const [popupVisibility, setPopupVisibility] = useState(false);
	const [project_id, setProjectId] = useState(1);
	const [isMobile, setIsMobile] = useState(false)
 
	const { id } = useParams();
	const { data: project, isLoading } = useProjectWithIdData(id);

	// document.title = `${project[0].name} | Shift Festival`

	useEffect(() => {
		setProjectId(1)
		if(window.innerWidth < 767){
			setIsMobile(true)
		}else{
			setIsMobile(false)
		}
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
		Swal.fire({
			title: "Stem succesvol!",
			icon: "success",
			customClass: {
				popup: "custom-sweet-alert",
				confirmButton: "button pink"
			}
		});
	}

	if (isLoading) {
		return <section className="large inner-wrapper">Loading...</section>;
	}

	// Show error state if no project data
	if (!project || !project[0]) {
		return <section className="large inner-wrapper">Project not found</section>;
	}

	return (
		<>
			<section
				className={clsx(styles["project-detail-wrapper"])}
			>
				<div className={ isMobile !== true ? "inner-wrapper" : "" }>
					 {
						verified && 
						<div className={clsx(styles["project-detail-wrapper--voting-wrapper"])} >
							<button
								className="blue-button"
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

					<div className={clsx(styles["project-detail-wrapper--main-wrapper"])}>
						<div className={clsx(styles["project-detail-wrapper--main-wrapper--project-header"])}>
							<h1 className={clsx(styles["project-detail-wrapper--main-wrapper--project-header--title"], "black-text")}>{ project && project[0].name }</h1>
							<h4 className="black-text">{ project && project[0].creator_name }</h4>
						</div>
						{/* <NextProject /> */}
						<div className={clsx(styles["project-detail-wrapper--main-wrapper--project-image"])}>
							<img src={ project && project[0].key_image_path} alt="foto van het eindwerk" />
						</div>
						<div className={clsx(styles["project-detail-wrapper--main-wrapper--main-section"])}>
							<div className={clsx(styles["project-detail-wrapper--main-wrapper--main-section--left-wrapper"])}>
								<div className={clsx(styles["project-detail-wrapper--main-wrapper--main-section--left-wrapper--summary-wrapper"])}>
									<div className={clsx(styles["project-detail-wrapper--main-wrapper--main-section--left-wrapper--summary-wrapper--info-wrapper"])}>
										{/* Promotor */}
										<p style={{fontSize: "16pt"}}>Promotor</p>
										<p className="blue-text" style={{fontSize: "18pt"}}>{ project && project[0].promotor_name }</p>
									</div>
									<div className={clsx(styles["project-detail-wrapper--main-wrapper--main-section--left-wrapper--summary-wrapper--info-wrapper"])}>
										<p style={{fontSize: "16pt"}}>Categorie</p>
										<span className={clsx(styles["project-detail-wrapper--main-wrapper--main-section--left-wrapper--summary-wrapper--info-wrapper--category-tag"])}>
											{ project && project[0].category }
										</span>
									</div>
									<div className={clsx(styles["project-detail-wrapper--main-wrapper--main-section--left-wrapper--summary-wrapper--info-wrapper"])} style={{marginBottom: "0"}}>
										<a href="https://www.linkedin.com/feed/"><img src="icons/linkedin.svg" alt="Link naar linkedin van de student" /></a>
									</div>
								</div>
								<div className={clsx(styles["project-detail-wrapper--main-wrapper--main-section--left-wrapper--description-wrapper"])}>
									<p className="white-text" style={{fontSize: "16pt"}}>Beschrijving</p>
									<p className="white-text">
										{
											project && project[0].description
										}
									</p>
								</div>
							</div>
							<div className={clsx(styles["project-detail-wrapper--main-wrapper--main-section--right-wrapper"])}>
								{project && project[0].showreel_url && (
									<iframe
										className={clsx(styles["project-detail-wrapper--main-wrapper--main-section--right-wrapper--teaser-video"])}
										src={`https://www.youtube.com/embed/${project[0].showreel_url}`}
										width="100%"
										height="100%" 
										style={{ border: "0"}} 
										allowFullScreen={true} 
										loading="lazy" 
										referrerPolicy="no-referrer-when-downgrade"
										title="Project showreel video"
									/>
								)}
							</div>
						</div>
						<div className={clsx(styles["project-detail-wrapper--main-wrapper--magazine-wrapper"])}>
							{/* Magazine */}
							{
								project && project[0].magazine_pdf_path &&
								<Magazine
									id={ project[0].id }
									magazine_path={ project[0].magazine_pdf_path }
									project_name={ project[0].name }
									key_image={ project[0].key_image_path }
								/>
							}
						</div>
					</div>
				</div>
			</section>
		</>

	);
};