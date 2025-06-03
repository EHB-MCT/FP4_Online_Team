import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./PlanCarousel.css";

const images = [
	{ src: "/grondplan1.png", label: "Zone 001" },
	{ src: "/grondplan1.png", label: "Zone 002" },
	{ src: "/grondplan1.png", label: "Zone 003" },
	{ src: "/grondplan1.png", label: "Zone 001" },
	{ src: "/grondplan1.png", label: "Zone 002" },
	{ src: "/grondplan1.png", label: "Zone 003" },
];

const PlanCarousel = () => {
	return (
		<Swiper modules={[Navigation]} slidesPerView={3} centeredSlides={true} spaceBetween={10} loop={true} loopedSlides={images.length} navigation className="plan-swiper">
			{images.map((item, index) => (
				<SwiperSlide key={index}>
					<div className="plan-slide">
						<img src={item.src} alt={item.label} className="plan-img" />
						<p className="plan-caption">{item.label}</p>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default PlanCarousel;
