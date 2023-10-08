import MiApi from "./components/MiApi/MiApi";
import { Container } from "react-bootstrap";
import "./App.css";
import Buscador from "./components/Buscador/Buscador";
import { useState } from "react";
import Ordenar from "./components/Ordenar/Ordenar";

const App = () => {
  const [busqueda, setBusqueda] = useState("");
  const [ordenar, setOrdenar] = useState("");
  return (
    <>
      <Container fluid>
        <h1>Recomendaciones de Películas Más Populares</h1>
        <div id="inputCabecera" >
          <Buscador setBusqueda={setBusqueda} />
          <Ordenar setOrdenar={setOrdenar} />
        </div>
        <MiApi busqueda={busqueda} ordenar={ordenar} />
      </Container>
    </>
  );
};

export default App;
