import React, { useState, useEffect} from "react";
import GuidesTableHeader from "./GuidesTableHeader";
import GuidesTableBody from "./GuidesTableBody";
import "../../../assets/styles/List/GuidesTable.scss";

const GuidesTable = () => {
    const [guides, setGuides] = useState([]);
    const [expanded, setExpanded] = useState([]);

    //Aqui cargamos las guias al momento de que se cargue la pagina
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("guides")) || [];
        setGuides(stored);
    }, []);

    //Que cambie el historial de despliegue
    const toggleHistory = (guideNumber) => {
        setExpanded((prev) => {
            if(prev.includes(guideNumber)) {
                return prev.filter((num) => num !== guideNumber)
            }
            return [...prev, guideNumber]
        })
    }

    //Actualizacion de la guia de acuerdo a los 3 estados que tenemos
    const handleUpdateGuide = (guideNumber) => {
        setGuides((prevGuides) => {
            const updatedGuides = prevGuides.map((g) => {
                if (g.number !== guideNumber) return g; 

                const newGuide = {...g };

                const lastHistory = newGuide.history[newGuide.history.length - 1];
                const currentStatus = lastHistory.status;

                const estados = ["pendiente", "transito", "entregado"];
                const currentIndex = estados.indexOf(currentStatus);

                const nextStatus =
                    currentIndex < estados.length - 1
                        ? estados[currentIndex + 1]
                        : estados[currentIndex];
                
                if(nextStatus === currentStatus) {
                    return newGuide
                }

                const newEntry = {
                    date: new Date().toLocaleString(),
                    status: nextStatus
                }

                newGuide.history = [...newGuide.history, newEntry];

                return newGuide;
            });

            localStorage.setItem("guides", JSON.stringify(updatedGuides))

            return updatedGuides;
        })
    }

    return(
        <div className="list__tb">
            <table className="list__table">
                <GuidesTableHeader />
                <GuidesTableBody
                    guides={guides} 
                    expanded={expanded}
                    toggleHistory={toggleHistory}
                    onUpdateGuide={handleUpdateGuide}
                />
            </table>
        </div>
    );
}

export default GuidesTable;