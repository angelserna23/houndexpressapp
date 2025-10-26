import React from "react";
import "../../../assets/styles/List/GuidesTableHeader.scss";

const GuidesTableHeader = () => {
    return(
        <thead className="list__table-header">
            <tr className="list__table-header-row">
                <th className="list__table-header-row--title" scope="col">Numero de guias</th>
                <th className="list__table-header-row--title" scope="col">Destinatario</th>
                <th className="list__table-header-row--title" scope="col">Origen</th>
                <th className="list__table-header-row--title" scope="col">Fecha</th>
                <th className="list__table-header-row--title" scope="col">Ultima actualizacion</th>
                <th className="list__table-header-row--title" scope="col">Status</th>
                <th className="list__table-header-row--title" scope="col">Actualizar</th>
                <th className="list__table-header-row--title" scope="col">Historial</th>
            </tr>
        </thead>
    );
}

export default GuidesTableHeader;