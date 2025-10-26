import React from "react";
import FormLogo from "./FormLogo";
import "../../../assets/styles/Register/FormStructure.scss";

const FormStructure = ({ formData, onChange, onSubmit }) => {
    return (
        <>
            <form className="form" onSubmit={onSubmit}>
                <div className="form__guia">
                    <label className="form__label">Numero de guia *</label>
                    <input 
                        className="form__input guide" 
                        type="text"
                        name="number"
                        value={formData.number}
                        onChange={onChange}
                    />
                </div>
                <div className="form__destinatario">
                    <label className="form__label">Destinatario *</label>
                    <input 
                        className="form__input destinatary" 
                        type="text"
                        name="destinatary"
                        value={formData.destinatary}
                        onChange={onChange}
                    />
                </div>
                <div className="form__origen">
                    <label className="form__label">Origen *</label>
                    <input 
                        className="form__input origin" 
                        type="text"
                        name="origin"
                        value={formData.origin}
                        onChange={onChange}
                    />
                </div>
                <div className="form__destino">
                    <label className="form__label">Destino *</label>
                    <input 
                        className="form__input destiny" 
                        type="text"
                        name="destiny"
                        value={formData.destiny}
                        onChange={onChange}
                    />
                </div>
                <div className="form__fecha">
                    <label className="form__label">Fecha de creacion *</label>
                    <input 
                        className="form__input date" 
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={onChange}
                    />
                </div>
                <div className="form__estado">
                    <label className="form__label">Estado *</label>
                    <select 
                        className="form__select-status"
                        name="status"
                        value={formData.status}
                        onChange={onChange}
                    >
                        <option value="">---Selecciona un estado---</option>
                        <option value="pendiente">Pendiente</option>
                        <option value="transito">En transito</option>
                        <option value="entregado">Entregado</option>
                    </select>
                </div>
                <div className="form__button">
                    <button
                        className="form__send"
                        type="submit"
                    >
                        Registrar
                    </button>
                </div>
            </form>
            <FormLogo />
        </>
    )
}

export default FormStructure;