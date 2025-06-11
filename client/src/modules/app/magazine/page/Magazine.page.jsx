import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
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
	const [setTransformFunc, setSetTransformFunc] = useState(null);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [zoom, setZoom] = useState(1);

	useEffect(() => {
		function updateWidth() {
			if (modalRef.current) {
				const width = modalRef.current.offsetWidth - 48;
				setPdfWidth(width);

				// Assume native page is ~1200px wide
				const nativePageWidth = 1200;
				const scale = width / nativePageWidth; // Adjust scale to fit within the modal with some padding
				setInitialScale(scale < 0.5 ? 0.5 : scale); // clamp to a minimum if needed
			}
		}
		updateSliderBackground(zoom);
		updateWidth();
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, [openMagazine]);

	useEffect(() => {
		const handleFullscreenChange = () => {
			if (!document.fullscreenElement) {
				setIsFullscreen(false);
				setInitialScale(1);
			}
		};
		document.addEventListener("fullscreenchange", handleFullscreenChange);
		return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
	}, []);

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
			setCurrentPage(2);
		} else if (currentPage + 2 <= totalPages) {
			setCurrentPage(currentPage + 2);
		} else if (currentPage < totalPages) {
			setCurrentPage(totalPages);
		}
	};

	const goToPreviousPage = () => {
		if (currentPage === 2) {
			setCurrentPage(1);
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

	const enterFullscreen = () => {
		if (fullscreenRef.current?.requestFullscreen) {
			fullscreenRef.current.requestFullscreen();
			setIsFullscreen(true);
			setInitialScale(1.2); // or any larger value you want for fullscreen
		}
	};

	const exitFullscreen = () => {
		if (document.fullscreenElement && document.exitFullscreen) {
			document.exitFullscreen();
			setIsFullscreen(false);
			setInitialScale(1); // reset to normal scale when exiting fullscreen
		}
	};

	const toggleFullscreen = () => {
		if (document.fullscreenElement) {
			exitFullscreen();
		} else {
			enterFullscreen();
		}
	};

	const fullscreenRef = useRef(null);

	const handleZoom = (value) => {
		setZoom(value);
		if (setTransformFunc) setTransformFunc(0, 0, value, 200, "easeOut");
		updateSliderBackground(value);
	};

	function updateSliderBackground(value) {
		const min = 0.5;
		const max = 2;
		const percent = ((value - min) / (max - min)) * 100;
		const slider = document.getElementById("myRange");
		if (slider) {
			slider.style.background = `linear-gradient(to right, #ec6230 0%, #ec6230 ${percent}%, #d5dbe1 ${percent}%, #d5dbe1 100%)`;
		}
	}

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

			{openMagazine && (
				<div className="pdf-modal-overlay" onClick={() => setOpenMagazine(null)}>
					<div className={`pdf-modal${isFullscreen ? " fullscreen" : ""}`} ref={(modalRef, fullscreenRef)} onClick={(e) => e.stopPropagation()}>
						{!isMobile && (
							<div className="pdf-zoom-overlay">
								<button onClick={() => handleZoom(Math.max(0.5, zoom - 0.1))}>
									<img src="/zoom-out.svg" alt="" />
								</button>
								<input type="range" min={0.5} max={2} step={0.01} value={zoom} onChange={(e) => handleZoom(Number(e.target.value))} className="slider" id="myRange" style={{ width: 100 }} />
								<button onClick={() => handleZoom(Math.min(2, zoom + 0.1))}>
									<img src="/zoom-in.svg" alt="" />
								</button>
								<button onClick={toggleFullscreen}>
									<img src="/fullscreen.svg" alt="" />
								</button>
							</div>
						)}

						<button className="pdf-modal-close" onClick={() => setOpenMagazine(null)}>
							&times;
						</button>
						<div className="pdf-center-overlay">
							<Document
								file={openMagazine.url}
								onLoadSuccess={handleDocumentLoad}
								onLoadError={handleError}
								loading={<div className="status-message">Loading magazine...</div>}
								error={<div className="status-message error">{error || "Could not load magazine"}</div>}
							>
								{!isMobile ? (
									<TransformWrapper minScale={0.5} maxScale={2} wheel={{ step: 0.1 }} onZoom={(ref) => setZoom(ref.state.scale)} onInit={({ setTransform }) => setSetTransformFunc(() => setTransform)}>
										{() => (
											<TransformComponent>
												<div style={{ display: "flex", gap: "16px" }}>
													{currentPage === 1 ? (
														<Page pageNumber={1} width={pdfWidth / 2} />
													) : (
														<>
															<Page pageNumber={currentPage} width={pdfWidth / 2} />
															{currentPage + 1 <= totalPages && <Page pageNumber={currentPage + 1} width={pdfWidth / 2} />}
														</>
													)}
												</div>
											</TransformComponent>
										)}
									</TransformWrapper>
								) : (
									// Mobile: scrollable all pages
									Array.from({ length: totalPages }, (_, idx) => <Page key={idx + 1} pageNumber={idx + 1} width={window.innerWidth - 32} />)
								)}
							</Document>
						</div>

						{/* Navigation overlay stays as is */}
						{!isMobile && (
							<div className="pdf-nav-overlay">
								<button onClick={goToPreviousPage} disabled={currentPage <= 1}>
									Previous
								</button>
								<span>
									Page {currentPage} of {totalPages}
								</span>
								<button onClick={goToNextPage} disabled={currentPage >= totalPages}>
									Next
								</button>
							</div>
						)}
					</div>
				</div>
			)}
		</section>
	);
};
