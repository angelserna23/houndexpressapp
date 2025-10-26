import React from "react";
import LogoRegister from "../../../assets/img/logo_register.png";

const FormLogo = () => {
    return (
        <section className="form__logo">
            <img className="form__logo-img" src={LogoRegister} alt="Logo de Registro" />
        </section>
    )
}

export default FormLogo;