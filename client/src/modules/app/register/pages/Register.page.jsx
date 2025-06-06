import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { clsx } from 'clsx';

//Components
import InputField from "../../../shared/inputfield/InputField.jsx";
import Roles from "../components/Roles.jsx";

//CSS
import styles from "./register.module.css";

export const Register = () => {
	document.title = "Inschrijven | Shift Festival 2025 ";

	const [swalProps, setSwalProps] = useState({});

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		roles: [],
		amount: "",
		message: "",
		subscribeToUpdates: false,
	});

	const handleRoleChange = (roleData) => {
		setFormData((previousData) => ({
			...previousData,
			roles: [roleData],
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post(
				"https://api.shiftfestival.be/api/submit-register-form",
				formData
			);
			Swal.fire({
				title: "Inschrijving succesvol!",
				html: `<p>Bedankt voor je inschrijving we zien je graag op 20/06, er is een bevestigingsmail verstuurd naar ${formData.email}.</p>`,
				icon: "success",
				customClass: {
					popup: "custom-sweet-alert",
					confirmButton: "button pink"
				}
			});
		} catch (error) {
			console.error("Error submitting form:", error);

			let errorMessage = error.response.request.response;
			const parsedMessage = JSON.parse(errorMessage);

			Swal.fire({
				title: "Oeps!",
				html: `<p>Er is al ingeschreven met dit e-mailadres.</p>`,
				icon: "error",
				customClass: {
					popup: "custom-sweet-alert",
					confirmButton: "button pink"
				}
			});
		}
	};

	return (
		<div className={clsx(styles["wrapper"])}>
			{/* <img src="/public/figure_pink.png" alt="" className="blob-pink" />
			<img src="/public/figure_orange.png" alt="" className="blob-orange" /> */}

			<h2 className="white-text">Save the date</h2>
			<form onSubmit={handleSubmit}>
				<InputField
					className={"firstName"}
					InputType={"text"}
					InputName={"Voornaam"}
					Mandatory={true}
					Placeholder={"Voornaam"}
					onChange={(e) => {
						setFormData((previousData) => ({
							...previousData,
							firstName: e.target.value,
						}));
					}}
				/>
				<InputField
					className={"lastName"}
					InputType={"text"}
					InputName={"Achternaam"}
					Mandatory={true}
					Placeholder={"Achternaam"}
					onChange={(e) => {
						setFormData((previousData) => ({
							...previousData,
							lastName: e.target.value,
						}));
					}}
				/>
				<InputField
					className={"email"}
					InputType={"email"}
					InputName={"Email"}
					Mandatory={true}
					Placeholder={"mail@example.com"}
					onChange={(e) => {
						setFormData((previousData) => ({
							...previousData,
							email: e.target.value,
						}));
					}}
				/>
				<Roles
					className={"roles"}
					InputName={"Op welke manier neemt u deel?"}
					Mandatory={true}
					Placeholder={"Select your role"}
					onChange={handleRoleChange}
				/>
				<InputField
					className={"amount"}
					InputType={"number"}
					InputName={"Aantal personen"}
					Mandatory={true}
					Placeholder={"2"}
					onChange={(e) =>
						setFormData((previousData) => ({
							...previousData,
							amount: e.target.value,
						}))
					}
				/>
				<InputField
					className={"message"}
					InputType={"text"}
					InputName={"Bericht"}
					Mandatory={false}
					onChange={(e) =>
						setFormData((previousData) => ({
							...previousData,
							message: e.target.value,
						}))
					}
				/>
				<div className="input-item-wrapper">
					<label htmlFor="subscribeToUpdates">
						<input
							type="checkbox"
							id="subscribeToUpdates"
							name="subscribeToUpdates"
							onChange={(e) => {
								setFormData((previousData) => ({
									...previousData,
									subscribeToUpdates: e.target.checked,
								}));
							}}
						/>
						Ik wil graag op de hoogte blijven en updates ontvangen over dit
						evenement
					</label>
				</div>

				<input type="submit" value="Inschrijven" className="button" />
			</form>
		</div>
	);
};

