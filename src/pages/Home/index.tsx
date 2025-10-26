import React from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import HoundVideo from "../../assets/videos/Hound-Express.mp4";
import WorldGif from "../../assets/img/world.gif";
import HistoriaImg from "../../assets/img/historia.png";
import MisionImg from "../../assets/img/mision.png";
import Vision from "../../assets/img/vision.png";
import "./Home.scss";

const Home = () => {
    return(
        <>
        <Header />
        <main className="main">
            <article className="slogan">
                <h1 className="slogan__title">📦 Hound Track: Tu envío, siempre a la vista.</h1>
            </article>
            <article className="barra">
                <p className="barra__text">text</p>
            </article>
            <article className="introduction">
                <section className="carousel__varios">
                    <div className="carousel__container">
                        <div className="carousel__slide active">
                            <img className="carousel__slide-img" src={HistoriaImg} alt="slide1"/>
                        </div>
                        <div className="carousel__slide">
                            <img className="carousel__slide-img" src={MisionImg} alt="slide2"/>
                        </div>
                        <div className="carousel__slide">
                            <img className="carousel__slide-img" src={Vision} alt="slide3"/>
                        </div>
                    </div>
                    <button className="carousel__btn prev">⟨</button>
                    <button className="carousel__btn prev">⟩</button>
                </section>
                <section className="video">
                    <video className="video__media" muted autoPlay loop>
                        <source className="video__media-asset" type="video/mp4" src={HoundVideo}/>
                    </video>
                    <p className="video__text">"Rastrea. Controla. Recibe. ¡Sin sorpresas!"</p>
                    <img className="video__img" src={WorldGif}/>
                </section>
            </article>
            <article className="valores">

            </article>
        </main>
        <Footer />
        </>
    )
}

export default Home;