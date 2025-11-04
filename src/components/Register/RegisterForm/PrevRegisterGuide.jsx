import React from "react";
import { useSelector } from "react-redux";
import "../../../assets/styles/Register/PrevRegisterGuides.scss";

const PrevRegisterGuide = () => {
  const guides = useSelector((state) => state.guides);

  return (
    <>
      <article className="guides">
        {(!guides || guides.length === 0) ? (
          <p
            className="guides__info-text"
            style={{ gridColumn: "1 / -1", textAlign: "center", color: "#8a8a8a" }}
          >
            No hay guias registradas todavia
          </p>
        ) : (
          guides.map((guide, idx) => {
            const lastHistory = guide.history[guide.history.length - 1];

            return (
              <section
                key={guide.number + "-" + idx}
                className="guides__info showGuides"
              >
                <div className="guides__container">
                  <h2 className="guides__info-title">Numero de guia: </h2>
                  <p className="guides__info-text">{guide.number}</p>
                </div>

                <div className="guides__container">
                  <h2 className="guides__info-title">Destinatario: </h2>
                  <p className="guides__info-text">{guide.destinatary}</p>
                </div>

                <div className="guides__container">
                  <h2 className="guides__info-title">Origen: </h2>
                  <p className="guides__info-text">{guide.origin}</p>
                </div>

                <div className="guides__container">
                  <h2 className="guides__info-title">Destino: </h2>
                  <p className="guides__info-text">{guide.destiny}</p>
                </div>

                <div className="guides__container">
                  <h2 className="guides__info-title">Fecha: </h2>
                  <p className="guides__info-text">{guide.date}</p>
                </div>

                <div className="guides__container">
                  <h2 className="guides__info-title">Estado: </h2>
                  <p className="guides__info-text">{lastHistory.status}</p>
                </div>
              </section>
            );
          })
        )}
      </article>
    </>
  );
};

export default PrevRegisterGuide;
