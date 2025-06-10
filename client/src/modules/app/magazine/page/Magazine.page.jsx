import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "./Magazine.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";

const availableMagazines = [
	{
		id: 1,
		title: "DEV4 - Spring Boot",
		url: "/pdf/testVert.pdf",
		thumbnail: "/homepage-image.png",
	},
];

export const Magazine = () => {
	document.title = "Magazine | Shift Festival";

	const [openMagazine, setOpenMagazine] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [error, setError] = useState(null);

	const handleMagazineOpen = (magazine) => {
		setOpenMagazine(magazine);
		setCurrentPage(1);
	};

	const handleDocumentLoad = ({ numPages }) => {
		setTotalPages(numPages);
	};

	const handleError = (error) => {
		console.error("PDF load error:", error.message || error);
		setError("Could not load PDF file. Make sure it's a valid URL or path.");
	};

	const goToNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const goToPreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<section className="inner-wrapper">
			<div className="viewer-layout">
				<div className="magazine-list">
					<h2>Beschikbare Magazines</h2>
					{availableMagazines.map((magazine) => (
						<motion.div key={magazine.id} className={`magazine-card ${openMagazine?.id === magazine.id ? "selected" : ""}`} onClick={() => handleMagazineOpen(magazine)} whileHover={{ scale: 1.02 }}>
							<img src={magazine.thumbnail} alt={magazine.title} />
							<h3>{magazine.title}</h3>
						</motion.div>
					))}
				</div>

				<div className="pdf-display">
					<div className="pdf-display">
						{openMagazine ? (
							<>
								<Document
									file={openMagazine.url}
									onLoadSuccess={handleDocumentLoad}
									onLoadError={handleError}
									loading={<div className="status-message">Loading magazine...</div>}
									error={<div className="status-message error">{error || "Could not load magazine"}</div>}
								>
									<Page pageNumber={currentPage} width={800} />
								</Document>

								<div className="page-navigation">
									<button onClick={goToPreviousPage} disabled={currentPage <= 1}>
										Previous Page
									</button>
									<span>
										Page {currentPage} of {totalPages}
									</span>
									<button onClick={goToNextPage} disabled={currentPage >= totalPages}>
										Next Page
									</button>
								</div>
							</>
						) : (
							<div className="status-message">Select a magazine to start reading</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
