import Swal from "sweetalert2";
import { useEffect, useState } from "react";

//Components
import InputField from "../../../../shared/inputfield/InputField";

//Routes
import { PROJECTS_ROUTE } from "../../../projects/projects.route";

export const RequestToken = () => {

    document.title = "Authenticate | Shift Festival 2025";

    const [formData, setFormData] = useState({
        email: JSON.parse(localStorage.getItem("user"))?.email || "",
        token: null
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);

        if (!user || user.email === "" || user.email === null) {
            window.location.href = "/#/voteReGRfguugXNEmMm";
        }
    }, [])

    const handleValidation = async (e) => {
        e.preventDefault();

        try {
            // await axios.post(
            //     "https://api.shiftfestival.be/api/validate-token",
            //     formData
            // );
            localStorage.setItem("user", JSON.stringify({
                email: formData.email,
                token: formData.token,
                validated: true
            }))

            Swal.fire({
                title: "Succes",
                text: "Token is validated, now you can vote",
                icon: "success",
                customClass: {
                    popup: "custom-sweet-alert",
                    confirmButton: "button pink"
                }
            })
            .then(() => {
                window.location.href = `/#/${PROJECTS_ROUTE.path}`
            });
            
            
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
            <section>
                <div className="inner-wrapper">
                    <h2>Validate token</h2>
                    <p style={{ textAlign: "center"}}>Er is een token naar uw email gestuud</p>
                    <form onSubmit={ handleValidation }>
                        <InputField
                            className={"text"}
                            InputType={"text"}
                            InputName={"Token"}
                            Mandatory={true}
                            Placeholder={"Token"}
                            onChange={(e) => {
                                setFormData((previousData) => ({
                                    ...previousData,
                                    token: e.target.value,
                                }));
                            }}
                        />
                        <input type="submit" value="Validate" className="button" />

                    </form>
                </div>
            </section>
        </>
    )
}