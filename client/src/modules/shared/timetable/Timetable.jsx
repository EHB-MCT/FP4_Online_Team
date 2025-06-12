import "./timetable.css";

export const Timetable = () => {
	return (
		<div className="timetable inner-wrapper">
			<h2>Time table</h2>

			<div className="timetable-grid">
				<div className="timetable-header">
					<div className="time-column"></div>
					<div className="workshop-column">
						<h3>Workshop</h3>
					</div>
					<div className="live-column">
						<h3>Live Show</h3>
					</div>
					<div className="catering-column">
						<h3>Catering</h3>
					</div>
				</div>

				<div className="timetable-content">
					<div className="time-column">
						<div>
							<h3 className="black-text">17h</h3>
						</div>
						<div>
							<h3 className="black-text">18h</h3>
						</div>
						<div>
							<h3 className="black-text">19h</h3>
						</div>
						<div>
							<h3 className="black-text">20h</h3>
						</div>
						<div>
							<h3 className="black-text">21h</h3>
						</div>
					</div>

					<div className="workshop-events">
						<div className="event orange-bg keychain-event">
							<h3>Keychain</h3>
							<p>Fablab</p>
						</div>
						<div className="event orange-bg photobooth-event">
							<h3>AI Photobooth</h3>
							<p>Medialab</p>
						</div>
					</div>

					<div className="live-column">
						<div className="event purple-bg award-show">
							<h3>Award Show + Speech</h3>
							<p>Zone B</p>
						</div>
						<div className="event purple-bg vj-set">
							<h3>VJ-Set</h3>
							<p>Zone B</p>
						</div>
					</div>

					<div className="catering-wrapper">
						<div className="event purple-bg bbq">
							<h3>BBQ</h3>
							<p>Zone B</p>
						</div>
						<div className="event purple-bg bar">
							<h3>Bar</h3>
							<p>Zone B</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
