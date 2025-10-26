import React from "react";
import FormStructure from "./FormStructure";
import "../../../assets/styles/Register/FormGeneral.scss";

const FormGeneral = ({ formData, onChange, onSubmit }) => {
    return(
        <article className="form__general">
            <FormStructure 
                formData={formData} 
                onChange={onChange}
                onSubmit={onSubmit}
            />
        </article>
    )
}

export default FormGeneral;