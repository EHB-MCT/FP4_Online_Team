import { useState, useEffect } from "react";

export const FilterButton = ({ project_category, onClick }) => {
    
    const [projectColor, setProjectColor] = useState("")
    
    useEffect(() => {

        if(project_category === "Experience Design"){
            setProjectColor("#5269BC")
        }else if(project_category === "Web & Mobile"){
            setProjectColor("#E61453")
        }else if(project_category === "XR & 3D"){
            setProjectColor("#B54A98")
        }else if(project_category === "Digital Design"){
            setProjectColor("#D83D0E")
        }

    }, []);
    
    return (
        <div 
            className="filter"
            value={ project_category }
            onClick={ onClick }

            style={{ backgroundColor: projectColor}}
        >
            <p>{ project_category }</p>
        </div>
    )
}