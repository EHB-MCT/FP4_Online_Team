import { useState } from "react";

//Components
import InputField from "./InputField.jsx";

const Roles = ( { className, InputName, Mandatory, Placeholder, onChange} ) => {

    const [isCompanySelected, setIsCompanySelected] = useState(false);
    const [companyName, setCompanyName] = useState("");
    const [sponsorship, setSponsorship] = useState(false);

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;

        if(selectedValue === "company"){
            setIsCompanySelected(true);
            onChange({
                role:"company",
                companyName: companyName || "",
                sponsorship: sponsorship || false
            });
        }else{
            setIsCompanySelected(false)
            onChange({ role: selectedValue });
        }
        
    }

    const handleCompanyNameChange = (e) => {
        const value = e.target.value;
        setCompanyName(value);

        onChange({
            role:"company",
            companyName: value,
            sponsorship
        });
    }

    const handleSponsorshipChange = (e) => {
        const value = e.target.checked;
        setSponsorship(value);

        onChange({
            role: "company",
            companyName,
            sponsorship: value
        });
    }

    return(
        <div className="input-item-wrapper">
            <h4>{ InputName } *</h4>
            <select 
                name={ className } 
                id={ className } 
                placeholder={Placeholder} 
                required={Mandatory} 
                onChange={handleSelectChange}
            >
                <option value="" disabled selected>Selecteer rol</option>
                <option value="student">Student</option>
                <option value="staff-ehb">Docent / Personeel EHB</option>
                <option value="parents-friends">Ouders / Vrienden</option>
                <option value="alumni">Alumni</option>
                <option value="company">Bedrijf / Organisatie</option>
                <option value="other">Ander</option>
            </select>

            {
                isCompanySelected ? (
                    <>
                        <InputField 
                            className={"companyName"}
                            InputName={"Bedrijfsnaam"}
                            InputType={"text"}
                            Mandatory={true}
                            Placeholder={"DigiMi"}
                            onChange={handleCompanyNameChange}
                        />
                        <div className="extra-field input-item-wrapper">
                            <label htmlFor="companyCheckbox">
                                <input
                                    type="checkbox"
                                    id="sponsorCheckbox"
                                    name="Checkbox"
                                    onChange={handleSponsorshipChange}
                                />
                                Ja, ons bedrijf wil dit evenement sponsoren. Stuur ons meer informatie!
                            </label>
                        </div>
                    </>
                ) : null
            }
        </div>
    )
}

export default Roles;