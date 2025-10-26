import React from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer";
import "./Historical.scss";

const Historical = () => {
    return (
        <>
            <Header/>
            <main className="main">
                <article className="slogan">
                    <h1 className="slogan__title">📦 Hound Track: Tu envío, siempre a la vista.</h1>
                </article>
                <article className="page">
                    <h2 className="page__title"><span className="page__title-hypertext">Historial de Guías</span></h2>
                </article>
            </main>
            <Footer/>
        </>
    )
}

export default Historical;