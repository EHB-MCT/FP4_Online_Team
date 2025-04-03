import { useState } from "react"

//Components
import InputField from "../components/InputField.jsx"
import Roles from "../components/Roles.jsx"




const Register = () => {
    
    document.title = "Inschrijven | Expo 2025 ";

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        roles: [],
        amount: "",
        message: "",
        subscribeToUpdates: false
    })

    const handleRoleChange  = (roleData) => {
        setFormData((previousData) => ({
            ...previousData,
            roles: [roleData]
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }


    return (
        <>
            <h1>Save the date</h1>
            <form onSubmit={handleSubmit}>
                <InputField 
                    className={"firstName"}
                    InputName={"Voonaam"}
                    Mandatory={true}
                    Placeholder={"Michiel"}
                    onChange={(e) => {
                        setFormData((previousData) => ({
                            ...previousData,
                            firstName: e.target.value,
                        }))
                    }}
                />
                <InputField 
                    className={"lastName"}
                    InputName={"Achernaam"}
                    Mandatory={true}
                    Placeholder={"Janssen"}
                    onChange={(e) => {
                        setFormData((previousData) => ({
                            ...previousData,
                            lastName: e.target.value,
                        }))
                    }}
                />
                <InputField 
                    className={"email"}
                    InputName={"Email"}
                    Mandatory={true}
                    Placeholder={"michiel.janssen@example.com"}
                    onChange={(e) => {
                        setFormData((previousData) => ({
                            ...previousData,
                            email: e.target.value,
                        }))
                    }}
                />
                <Roles
                    className={"roles"}
                    InputName={"Role"}
                    Mandatory={true}
                    Placeholder={"Select your role"}
                    onChange={handleRoleChange}
                />
                <InputField 
                    className={"amount"}
                    InputName={"amount"}
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
                    InputName={"message"}
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
                                    subscribeToUpdates: e.target.checked
                                }))
                            }}
                        />
                        Ik wil graag op de hoogte blijven en updates ontvangen over dit evenement
                    </label>
                </div>

                <input type="submit" value="Inschrijven" />
            </form>
            
            
        </>
    )
}

export default Register