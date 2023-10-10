import MiApi from "./components/MiApi/MiApi";
import { Container } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";

const App = () => {
  const [busqueda, setBusqueda] = useState("");
  const [ordenar, setOrdenar] = useState("");
  return (
    <>
      <Container fluid>
        <Header setBusqueda={setBusqueda} setOrdenar={setOrdenar}/>
        <MiApi busqueda={busqueda} ordenar={ordenar} />
      </Container>
    </>
  );
};

export default App;
