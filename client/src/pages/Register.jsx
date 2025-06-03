import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

//CSS
import "./Register.css";

//Components
import InputField from "../components/InputField.jsx";
import Roles from "../components/Roles.jsx";

const Register = () => {
	document.title = "Inschrijven | Expo 2025 ";

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
				title: "Success",
				text: "Your registration was successful!",
				icon: "success",
			});
		} catch (error) {
			console.error("Error submitting form:", error);

			let errorMessage = error.response.request.response;
			const parsedMessage = JSON.parse(errorMessage);

			Swal.fire({
				title: "Error",
				text: parsedMessage.message,
				icon: "error",
			});
		}
	};

	return (
		<div className="wrapper">
			<img src="/public/figure_pink.png" alt="" className="blob-pink" />
			<img src="/public/figure_orange.png" alt="" className="blob-orange" />

			<h1>Save the date</h1>
			<form onSubmit={handleSubmit}>
				<InputField
					className={"firstName"}
					InputType={"text"}
					InputName={"Voornaam"}
					Mandatory={true}
					Placeholder={"Michiel"}
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
					Placeholder={"Janssen"}
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
					Placeholder={"michiel.janssen@example.com"}
					onChange={(e) => {
						setFormData((previousData) => ({
							...previousData,
							email: e.target.value,
						}));
					}}
				/>
				<Roles
					className={"roles"}
					InputName={"Rol"}
					Mandatory={true}
					Placeholder={"Select your role"}
					onChange={handleRoleChange}
				/>
				<InputField
					className={"amount"}
					InputType={"number"}
					InputName={"Aantal"}
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

				<input type="submit" value="Inschrijven" />
			</form>
		</div>
	);
};

export default Register;
