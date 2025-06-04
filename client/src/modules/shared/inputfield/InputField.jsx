const InputField = ( { className, InputType,  InputName, Mandatory, Placeholder, onChange } ) => {

    if(Mandatory){
        return(
            <div className="input-item-wrapper">
                <h3 style={{textAlign: "start"}}>{ InputName } *</h3>
                <input 
                    type={ InputType } 
                    name={ className } 
                    id={ className } 
                    placeholder={ Placeholder } 
                    required
                    onChange={onChange}
                    {...(InputType === "number" ? { min: "0" } : {})}
                />
            </div>
        )
    }else{
        return(
            <div className="input-item-wrapper">
                <h3 style={{textAlign: "start"}}>{ InputName }</h3>
                <textarea 
                    name={ className } 
                    id={ className }
                    placeholder={Placeholder}
                    onChange={onChange}
                ></textarea>
            </div>
        )
    }

   

}

export default InputField