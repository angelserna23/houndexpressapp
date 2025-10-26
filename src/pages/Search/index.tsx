import React from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer";

const Search = () => {
    return (
        <>
            <Header/>
            <main className="main">
                <article className="slogan">
                    <h1 className="slogan__title">📦 Hound Track: Tu envío, siempre a la vista.</h1>
                </article>
                <article className="page">
                    <h2 className="page__title"><span className="page__title-hypertext">Buscar Guias</span></h2>
                </article>
            </main>
            <Footer/>
        </>
    )
}

export default Search;