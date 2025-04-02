import { useEffect, useState } from "react";

function Cookie() {
	const [showBanner, setShowBanner] = useState(false);

	useEffect(() => {
		const cookies = document.cookie
			.split("; ")
			.find((row) => row.startsWith("cookiesAccepted="));
		if (!cookies) {
			setShowBanner(true);
		}
	}, []);

	const acceptCookies = () => {
		document.cookie = "cookiesAccepted=true; max-age=31536000; path=/";
		console.log("Cookie set:", document.cookie);
		setShowBanner(false);
	};

	const rejectCookies = () => {
		document.cookie = "cookiesAccepted=false; max-age=31536000; path=/";
		setShowBanner(false);
	};

	const resetCookies = () => {
		document.cookie =
			"cookiesAccepted=; expires=Thu, 01 Jan 2070 00:00:00 UTC; path=/;";
		setShowBanner(true);
	};

	if (!showBanner && document.cookie.includes("cookiesAccepted")) {
		return (
			<button
				onClick={resetCookies}
				style={{ position: "fixed", bottom: 20, right: 20 }}
			>
				Change cookie settings
			</button>
		);
	}

	if (!showBanner) return null;

	return (
		<div
			style={{
				position: "fixed",
				bottom: 20,
				left: 20,
				right: 20,
				background: "#333",
				color: "#fff",
				padding: "1rem",
				borderRadius: "8px",
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<span>We use cookies to improve your experience 🍪</span>
			<div>
				<button onClick={acceptCookies} style={{ marginRight: "10px" }}>
					Accept
				</button>
				<button onClick={rejectCookies}>Reject</button>
			</div>
		</div>
	);
}

export default Cookie;
