import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "./Magazine.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const availableMagazines = [
	{
		id: 1,
		title: "DEV4 - Spring Boot",
		url: "/pdfs/DEV4_Spring_Boot.pdf",
		thumbnail: "/homepage-image.png",
	},
];

export const Magazine = () => {
	document.title = "Magazine | Shift Festival";

	const [openMagazine, setOpenMagazine] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	const handleMagazineOpen = (magazine) => {
		setOpenMagazine(magazine);
		setCurrentPage(1);
	};

	const handleDocumentLoad = ({ numPages }) => {
		setTotalPages(numPages);
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
						<motion.div
							key={magazine.id}
							className={`magazine-card ${
								openMagazine?.id === magazine.id ? "selected" : ""
							}`}
							onClick={() => handleMagazineOpen(magazine)}
							whileHover={{ scale: 1.02 }}
						>
							<img src={magazine.thumbnail} alt={magazine.title} />
							<h3>{magazine.title}</h3>
						</motion.div>
					))}
				</div>

				<div className="pdf-display">
					{openMagazine ? (
						<>
							<Document
								file={openMagazine.url}
								onLoadSuccess={handleDocumentLoad}
								loading={
									<div className="status-message">Loading magazine...</div>
								}
								error={
									<div className="status-message error">
										Could not load magazine
									</div>
								}
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
								<button
									onClick={goToNextPage}
									disabled={currentPage >= totalPages}
								>
									Next Page
								</button>
							</div>
						</>
					) : (
						<div className="status-message">
							Select a magazine to start reading
						</div>
					)}
				</div>
			</div>
		</section>
	);
};
