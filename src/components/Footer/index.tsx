import React from "react";
import "./Footer.scss";
import LogoClaro from "../../assets/img/logo_claro.png";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import ArrowDownIcon from "../../assets/icons/arrow_down.svg";
import ClockIcon from "../../assets/icons/clock.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import CorreoIcon from "../../assets/icons/mail.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <article className="info">
                <section className="info__form">
                    <form>
                        <div className="info__nombre">
                            <label className="info__form-label">Nombre*</label>
                            <input className="info__form-input" type="text"/>
                        </div>
                        <div className="info__email">
                            <label className="info__form-label">Correo*</label>
                            <input className="info__form-input" type="email"/>
                        </div>
                        <div className="info__contacto">
                            <label className="info__form-label">Telefono de contacto*</label>
                            <input className="info__form-input" type="text"/>
                        </div>
                        <div className="info__mensaje">
                            <label className="info__form-label">Mensaje</label>
                            <textarea className="info__form-input"></textarea>
                        </div>
                        <div className="info__checkbox">
                            <input className="info__form-input" type="checkbox"/>
                            <label className="info__form-label">Acepta politicas de privacidad</label>
                            <div className="info__checkbox-send">
                                <button className="info__checkbox-button">Contactenos</button>
                            </div>
                        </div>
                    </form>
                </section>
                <section className="mensaje">
                    <p className="mensaje__text"><span className="mensaje__text-stay">Estamos a un</span> <br/> <span className="mensaje__text-distance">mensaje de distancia</span></p>
                    <p className="mensaje__text">En Hound Express, entendemos la importancia de mantener una comunicación efectiva y estar disponibles para tus consultas y necesidades.</p>
                </section>
            </article>
            <p className="separacion"></p>
            <article className="socialMedia">
                <section className="socialMedia__redes">
                    <img className="socialMedia__logo" src={LogoClaro} alt="Logo Claro"/>
                    <div className="redes">
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><img className="redes__logo-img" src={LinkedInIcon} alt="" /></a>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img className="redes__logo-img" src={FacebookIcon} alt=""/></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><img className="redes__logo-img" src={InstagramIcon} alt=""/></a>
                    </div>
                    <p className="socialMedia__text">Idioma <img src={ArrowDownIcon} alt="ArrowDownIcon"/></p>
                    <p className="socialMedia__text">
                        Somos un equipo de expertos en logística, tecnología y comercio internacional. 
                        Te queremos ayudar a llevar tu empresa al siguiente nivel con soluciones de 
                        importación, exportación y logística nacional e internacional.
                    </p>
                </section>
                <section className="socialMedia__intefaz">
                    <p className="socialMedia__interfaz-text"><span className="socialMedia__interfaz-text-highlight">Somos</span> <br/> Hound Express</p>
                    <nav>
                        <a className="socialMedia__nav-link" href="#">Inicio</a>
                        <a className="socialMedia__nav-link" href="#">Nostros</a>
                        <p className="socialMedia__nav-text">Servicios</p>
                        <div>
                            <a className="socialMedia__nav-link" href="#">E-commerce</a>
                            <a className="socialMedia__nav-link" href="#">Cargo</a>
                            <a className="socialMedia__nav-link" href="#">Custom</a>
                            <a className="socialMedia__nav-link" href="#">Parcel</a>
                        </div>
                        <a className="socialMedia__nav-link" href="#">Preguntas</a>
                        <a className="socialMedia__nav-link" href="#">Rastrear paquete</a>
                        <a className="socialMedia__nav-link" href="#">Noticias</a>
                        <a className="socialMedia__nav-link" href="#">Blog</a>
                        <a className="socialMedia__nav-link" href="#">Contacto</a>
                    </nav>
                </section>
                <section className="socialMedia__contacto">
                    <p className="socialMedia__contacto-text">Servicio al cliente</p>
                    <div className="socialMedia__horario">
                        <img className="socialMedia__horario-img" src={ClockIcon} alt=""/>
                        <p className="socialMedia__horario-text">Lunes a Viernes de 09:00 a 18:00 hrs <br/> Sabados de 09:00 a 13:00 hrs</p>
                    </div>
                    <p className="socialMedia__contacto-mx">MX</p>
                    <div className="socialMedia__telefono">
                        <img className="socialMedia__telefono-img" src={PhoneIcon} alt=""/>
                        <p className="socialMedia__telefono-text">+52(55) 4000 1920</p>
                    </div>
                    <div className="socialMedia__correo">
                        <img className="socialMedia__correo-img" src={CorreoIcon} alt=""/>
                        <p className="socialMedia__correo-text">sclientes1@hound-express.com</p>
                    </div>
                    <p className="socialMedia__contacto-eua">EUA</p>
                    <div className="socialMedia__telefono">
                        <img className="socialMedia__telefono-img" src={PhoneIcon} alt=""/>
                        <p className="socialMedia__telefono-text">+1(95) 6568 3443</p>
                    </div>
                    <div className="socialMedia__correo">
                        <img className="socialMedia__correo-img" src={CorreoIcon} alt=""/>
                        <p className="socialMedia__correo-text">cslaredo1@hound-express.com</p>
                    </div>
                </section>
            </article>
            <article className="seguridad">
                <nav className="seguridad__nav">
                    <a className="seguridad__nav-link" href="#">Copyright © 2025 Hound Express. Todos los derechos reservados.</a>
                    <a className="seguridad__nav-link" href="#">Términos y condiciones</a>
                    <a className="seguridad__nav-link" href="#">Política de privacidad</a>
                </nav>
            </article>
        </footer>
    )
}

export default Footer