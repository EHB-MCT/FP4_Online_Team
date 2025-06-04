import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

//Components
import InputField from "../../../../shared/inputfield/InputField"

//Routes
import { REQUEST_TOKEN_ROUTE } from "../../requestToken/requestToken.route";

export const Authenticate = () => {

    document.title = "Authenticate | Shift Festival 2025";

    const [formData, setFormData] = useState({
        email: "",
        token: null
    });

    const handleAuthentication = async (e) => {
        e.preventDefault();

        try {
            // await axios.post(
            // "https://api.shiftfestival.be/api/register-voter",
            // formData
            // );

            localStorage.setItem("user", JSON.stringify({
                email: formData.email,
                token: formData.token
            }));

            window.location.href = `/#/voteReGRfguugXNEmMm/${REQUEST_TOKEN_ROUTE.path}`; 
        } catch (error) {
            console.error(error);

            const errorMessage = error.response.request.response;
            const parsedMessage = JSON.parse(errorMessage);

            Swal.fire({
				title: "Error",
				text: parsedMessage.message,
				icon: "error",
				customClass: {
					popup: "custom-sweet-alert",
					confirmButton: "button pink"
				}
			});
        }
    }

    return (
        <>
            <section className="wrapper" >
                <div className="inner-wrapper">
                    <h2>Authenticate</h2>
                    <form onSubmit={ handleAuthentication }>
                        <InputField
                            className={"email"}
                            InputType={"email"}
                            InputName={"Email"}
                            Mandatory={true}
                            Placeholder={"naam.voornaam@ehb.be"}
                            onChange={(e) => {
                                setFormData((previousData) => ({
                                    ...previousData,
                                    email: e.target.value,
                                }));
                            }}
                        />
                        <input type="submit" value="Authenticate" className="button" />

                    </form>
                </div>
            </section>
        </>
    )
}