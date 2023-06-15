import React from "react";
import './Bandera.css';

function Bandera ({pais}) {
    return pais ? <img src={pais.flag} alt='' className="flagStyle"/> : <div></div>
}

export default Bandera;