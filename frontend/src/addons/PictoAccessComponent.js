import { element } from "prop-types";
import React from "react";
import { useRecordContext } from "react-admin";

const PictoAccessComponent = ({source}) => {
    const record = useRecordContext();
    if (!record || !record[source] || typeof record[source] !== 'string' || !record[source] instanceof String) return null;

    return (
        <div>
            <iframe
            title="Découvrez en détail l'accessibilité de VITILAB  sur le site de PictoAccess.fr (ouverture d'un nouvel onglet)"
            src={"https://widget.pictoaccess.fr/accessibility?uid="+record[source]}
            height="150"
            width="400"
            loading="lazy"
            style={{border: "none"}}
            />
       </div>
    )
}

export default PictoAccessComponent;