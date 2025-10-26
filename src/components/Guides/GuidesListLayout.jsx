import React from "react";
import FoundHound from "../../assets/img/fondo__hound.png";
import GuidesIntro from "./GuidesIntro";
import GuidesTable from "./GuidesTable/GuidesTable";
import "../../assets/styles/List/GuidesListLayOut.scss";

const GuidesListLayout = () => {
    return(
        <article className="list">
            <section className="list__logo">
                <img className="list__logo-img" src={FoundHound} alt="Fondo Hound Express"/>
            </section>

            <section className="list__table">
                <GuidesIntro />
                <GuidesTable />
            </section>
        </article>
    )
}

export default GuidesListLayout