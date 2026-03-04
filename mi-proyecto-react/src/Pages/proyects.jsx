import Html from "../Components/html";
import Php from "../Components/php";
import React from "../Components/react";

function Proyects() {
    return (
        <div className="margin">
            <>
                <h2>Proyects</h2>
                <div className="proyect">
                    <Php />
                    <Html />  
                    <React />  
                </div>
            </>
        </div>
    )
}

export default Proyects;