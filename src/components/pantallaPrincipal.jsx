import React from "react";
import './principal.css';
import piedra from '../img/piedra.png';
import papel from '../img/papel.png';
import tijera from '../img/cortar-con-tijeras.png';
import jugar from './funciones1.js'
function Componente1() {
  Juego 
  return (
    <>
      <button>
        <a href="">Inicio Direcciones</a>
      </button>
      <br />
      <h1>Bienvenidos al Juego! Piedra - Papel - Tijera </h1>
      <br />

      <div>
        <p>Ingrese su nombre:</p>
        <input type="text" required="" />
        <h3 id="saludo"></h3>
        <h1 id="advertencia"></h1>
        <br />
        <h2>La computadora eligira su movimiento automaticamente</h2>
        <h3>A continuacion le mostramos los resultados: </h3>
      </div>
      <div>
        <br />
        <button onclick={"seleccionar('Piedra')"}>
          <img src={piedra} alt="" width={100} height={100} />
        </button>
        <button onclick="seleccionar('Papel')">
          <img src={papel} alt="" width={100} height={100} />
        </button>
        <button onclick="seleccionar('Tijera')">
          <img src={tijera} alt="" width={100} height={100} />
        </button>
        <br/>
        <select name="select" id="select">
          <option value="Piedra">Piedra</option>
          <option value="Papel">Papel</option>
          <option value="Tijera">Tijera</option>
        </select>
        <br />
      
      <button onClick={jugar}>Jugar!</button>
      </div>
    </>
  )
}

export default Componente1;