import React, { useEffect, useState } from "react";
import RegisterIntro from "../Register/RegisterIntro";
import FormGeneral from "./RegisterForm/FormGeneral";
import PrevRegisterGuide from "./RegisterForm/PrevRegisterGuide";

const RegisterLayOut = () => {
    //Estado del formulario inicialmente
    const [formData, setFormData] = useState({
        number: "",
        destinatary: "",
        origin: "",
        destiny: "",
        date: "",
        status: "",
    });
    
    //Estado inicial con todas las guias cargadas
    const [guidesList, setGuidesList] = useState([]);

    //Subir las guias que registremos a nuestro localStorage
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("guides")) || [];
        setGuidesList(stored);
    }, []);

    //Controlar los cambios en los inputs y selects
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]:value }));
    };

    //Manejar el submit del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

            //Armamos el objeto con la informacion que colocamos en FormStructure.jsx
        const newGuide = {
            number: formData.number.trim(),
            destinatary: formData.destinatary.trim(),
            origin: formData.origin.trim(),
            destiny: formData.destiny.trim(),
            date: formData.date,
            status: formData.status,
            history: [
                {
                    date: new Date().toLocaleString(),
                    status: formData.status,
                },
            ],
        };

        //Validacion de que tenga todos los campos completos
        if (
            !newGuide.number ||
            !newGuide.destinatary ||
            !newGuide.origin ||
            !newGuide.destiny ||
            !newGuide.date ||
            !newGuide.status
        ) {
            alert("Favor de ingresar todos los datos al formulario");
            return;
        }

        //Creamos la nueva lista de las guias
        const updateGuides = [...guidesList, newGuide];

        //Guardamos en el estado
        setGuidesList(updateGuides);

        //Forzar en localStorage
        localStorage.setItem("guides", JSON.stringify(updateGuides));

        //Limpiamos el formulario
        setFormData({
            number: "",
            destinatary: "",
            origin: "",
            destiny: "",
            date: "",
            status: "",
        });
    };

    return(
        <>
            <RegisterIntro />

            <FormGeneral 
                formData= {formData} 
                onChange={handleChange}
                onSubmit={handleSubmit}
            />

            <PrevRegisterGuide guidesList={guidesList}/>

        </>
    ) 
}

export default RegisterLayOut;