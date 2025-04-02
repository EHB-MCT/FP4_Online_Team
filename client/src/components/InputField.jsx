const InputField = ( { className,  InputName, Mandatory, Placeholder, onChange } ) => {

    if(Mandatory){
        return(
            <div className="input-item-wrapper">
                <h4>{ InputName } *</h4>
                <input 
                    type="text" 
                    name={ className } 
                    id={ className } 
                    placeholder={ Placeholder } 
                    required
                    onChange={onChange}
                />
            </div>
        )
    }else{
        return(
            <div className="input-item-wrapper">
                <h4>{ InputName }</h4>
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