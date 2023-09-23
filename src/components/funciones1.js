import React, { Component } from 'react';

class Juego extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultEmpate: 0,
      resultCompu: 0,
      resultUsuario: 0,
      total: 0,
      nombre: '',
      saludo: '',
      advertencia: 'El Juego es al mejor de 5',
      option: '',
      optionPC: '',
      result: '',
    };
  }

  reset = () => {
    setState({
      resultEmpate: 0,
      resultCompu: 0,
      resultUsuario: 0,
      total: 0,
      saludo: '',
      advertencia: 'El Juego es al mejor de 5',
      option: '',
      optionPC: '',
      result: '',
      nombre: '', // Limpiar el nombre
    });
  };

  jugar = () => {
    const {
      total,
      resultCompu,
      resultUsuario,
      nombre,
      option,
    } = this.state;

    if (total !== 5 && resultCompu !== 3 && resultUsuario !== 3) {
      if (nombre.trim() === "") {
        alert("Por favor, ingrese su nombre antes de jugar.");
        return;
      }

      this.setState({
        saludo: `¡Hola, ${nombre}! Comenzemos el juego.`,
        advertencia: 'El Juego es al mejor de 5',
      });

      // OPCION DE LA PC
      const numDecimal = Math.random() * 3;
      const optionPC = Math.floor(numDecimal);

      let resultPC;
      if (optionPC === 0) {
        resultPC = "Piedra";
      } else if (optionPC === 1) {
        resultPC = "Papel";
      } else {
        resultPC = "Tijera";
      }

      this.setState({ optionPC });

      if (resultPC === option) {
        this.setState((prevState) => ({
          result: "Empate",
          resultEmpate: prevState.resultEmpate + 1,
          total: prevState.total + 1,
        }));
      } else if (
        (resultPC === "Piedra" && option === "Tijeras") ||
        (resultPC === "Tijera" && option === "Papel") ||
        (resultPC === "Papel" && option === "Piedra")
      ) {
        this.setState((prevState) => ({
          result: "Gana la Computadora",
          resultCompu: prevState.resultCompu + 1,
          total: prevState.total + 1,
        }));
      } else {
        this.setState((prevState) => ({
          result: "Gana el usuario",
          resultUsuario: prevState.resultUsuario + 1,
          total: prevState.total + 1,
        }));
      }
    }

    if (total === 5 || resultCompu === 3 || resultUsuario === 3) {
      let adver;
      if (resultCompu > resultUsuario) {
        adver = "FIN DEL JUEGO! Gano la computadora, porfavor resetee para seguir jugando";
      } else if (resultUsuario > resultCompu) {
        adver = "FIN DEL JUEGO! Gano el Usuario, porfavor resetee para seguir jugando";
      } else {
        adver = "Empate!";
      }

      this.setState({ advertencia: adver });
    }
  };

  // Función para seleccionar una opción en el select según la imagen clicada
  seleccionar = (opcion) => {
    this.setState({ option: opcion });
  };

  render() {
    const {
      saludo,
      advertencia,
      option,
      optionPC,
      result,
      resultUsuario,
      resultCompu,
      resultEmpate,
      total,
      nombre,
    } = this.state;

    return (
      <div>
        <input
          type="text"
          id="nombre"
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={(e) => this.setState({ nombre: e.target.value })}
        />
        <button onClick={this.reset}>Resetear</button>
        <button onClick={this.jugar}>Jugar</button>

        <p>{saludo}</p>
        <p id="advertencia">{advertencia}</p>
        <select
          id="select"
          value={option}
          onChange={(e) => this.setState({ option: e.target.value })}
        >
          <option value="Piedra">Piedra</option>
          <option value="Papel">Papel</option>
          <option value="Tijera">Tijera</option>
        </select>
        <p id="optionJugador">La opcion del Usuario es: {option}</p>
        <p id="optionPc">La opcion de la PC es: {optionPC}</p>
        <p id="result">{result}</p>
        <p id="resultU">Usuario: {resultUsuario}</p>
        <p id="resultPc">Computadora: {resultCompu}</p>
        <p id="resultE">Empate: {resultEmpate}</p>
        <p>Total: {total}</p>
      </div>
    );
  }
}

export default Juego;
