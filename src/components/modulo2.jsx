import React from "react";
import './modulo2.css';
function Componente2() {
    return (
        <div id="resultado">
            <div id="contador">
                <h3>Contador: </h3>
                <h4 id="resultU">Usuario: </h4>
                <h4 id="resultPc">Computadora: </h4>
                <h4 id="resultE">Empate: </h4>
            </div>
            <br/>
            <br/>
            <br/>
            <div id="tabla1">
            <table id="tabla">
                <thead>
                    <tr>
                        <th>RESULTADOS DEL JUEGOS</th>
                    </tr>
                    <tr>
                        <td id="optionJugador">Opcion del Usuario:</td>
                        <td id="optionPc">Opcion Computadora:</td>
                        <td id="result">Resultado General:</td>
                    </tr>
                </thead>
            </table>
            </div>
        </div>
        )
     }

     export default Componente2;