import React, { useState, useRef, useEffect } from "react";
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
		url: "/pdf/Magazine - For print.pdf",
		thumbnail: "/homepage-image.png",
	},
];

export const Magazine = () => {
	document.title = "Magazine | Shift Festival";

	const [openMagazine, setOpenMagazine] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [error, setError] = useState(null);
	const modalRef = useRef(null);
	const [pdfWidth, setPdfWidth] = useState(800);

	useEffect(() => {
		function updateWidth() {
			if (modalRef.current) {
				setPdfWidth(modalRef.current.offsetWidth - 48); // 48px for padding/margins
			}
		}
		updateWidth();
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, [openMagazine]);

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
		if (currentPage === 1) {
			setCurrentPage(2); // Go from cover to first spread (2-3)
		} else if (currentPage + 2 <= totalPages) {
			setCurrentPage(currentPage + 2);
		} else if (currentPage < totalPages) {
			setCurrentPage(totalPages); // Show last single page if odd number
		}
	};

	const goToPreviousPage = () => {
		if (currentPage === 2) {
			setCurrentPage(1); // Go back to cover
		} else if (currentPage > 2) {
			setCurrentPage(currentPage - 2);
		} else {
			setCurrentPage(1);
		}
	};

	function useIsMobile() {
		const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
		React.useEffect(() => {
			const onResize = () => setIsMobile(window.innerWidth < 1024);
			window.addEventListener("resize", onResize);
			return () => window.removeEventListener("resize", onResize);
		}, []);
		return isMobile;
	}

	const isMobile = useIsMobile();

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
			</div>

			{/* Modal for PDF */}
			{openMagazine && (
				<div className="pdf-modal-overlay" onClick={() => setOpenMagazine(null)}>
					<div className="pdf-modal" ref={modalRef} onClick={(e) => e.stopPropagation()}>
						<button className="pdf-modal-close" onClick={() => setOpenMagazine(null)}>
							&times;
						</button>
						<Document
							file={openMagazine.url}
							onLoadSuccess={handleDocumentLoad}
							onLoadError={handleError}
							loading={<div className="status-message">Loading magazine...</div>}
							error={<div className="status-message error">{error || "Could not load magazine"}</div>}
						>
							{isMobile && totalPages > 0 ? (
								Array.from({ length: totalPages }, (_, idx) => <Page key={idx + 1} pageNumber={idx + 1} width={window.innerWidth - 32} />)
							) : (
								<div style={{ display: "flex", gap: 1 }}>
									{/* Show cover (page 1) alone */}
									{currentPage === 1 ? (
										<Page pageNumber={1} width={pdfWidth / 2 - 8} />
									) : (
										<>
											<Page pageNumber={currentPage} width={pdfWidth / 2 - 8} />
											{currentPage + 1 <= totalPages && <Page pageNumber={currentPage + 1} width={pdfWidth / 2 - 8} />}
										</>
									)}
								</div>
							)}
						</Document>
						{!isMobile && (
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
						)}
					</div>
				</div>
			)}
		</section>
	);
};
