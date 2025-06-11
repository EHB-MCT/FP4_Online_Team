import React from "react";
import { NextProject } from "../components/NextProject";
import { useVerified } from "../../../shared/const/context/VerifiedContext/VerifiedContext";

export const ProjectsDetail = () => {
	 const { verified } = useVerified();

	return (
		<>
			<section>
				<div className="inner-wrapper">
					<NextProject />
					        <div>
								{verified && <button>Vote button</button>}
							</div>
				</div>
			</section>
		</>
	);
};
