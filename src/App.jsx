import MiApi from "./components/MiApi/MiApi";
import { Container } from "react-bootstrap";
import './App.css'

const App = () => {
  return (
    <>
      <Container>
        <h1>Peliculas</h1>
        <MiApi />
      </Container>
    </>
  );
};

export default App;
