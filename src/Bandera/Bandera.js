import React from "react";
import './Bandera.css';
import PropTypes from 'prop-types'
import { paisShape } from "../shape";


function Bandera ({pais}) {

    const {name,flag,iso2,iso3} = pais;
    console.log(pais);
    return pais ? <img src={flag} alt='' className="flagStyle"/> : <div></div>
}

Bandera.propTypes = {
    pais:paisShape
}

export default Bandera;