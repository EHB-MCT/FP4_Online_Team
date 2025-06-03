export function PrivacyPolicy() {
	return (
		<div style={{ padding: "2rem" }}>
			<h1>Privacy Policy</h1>
			<p>Last updated: April 2, 2025</p>

			<h2>What Data We Collect</h2>
			<p>We do not collect any personal or sensitive user information.</p>

			<h2>Cookies</h2>
			<p>
				We use a single cookie to store whether you accepted or rejected the
				cookie banner. This cookie is stored in your browser and is not sent to
				any server.
			</p>
			<ul>
				<li>
					<strong>Name:</strong> cookiesAccepted
				</li>
				<li>
					<strong>Value:</strong> true or false
				</li>
				<li>
					<strong>Expires:</strong> After 1 year
				</li>
			</ul>

			<h2>How to Change Your Choice</h2>
			<p>
				You can change your cookie preference anytime by clicking "Change cookie
				settings" at the bottom of the screen.
			</p>
		</div>
	);
}