import Form from "react-bootstrap/Form";

const Buscador = ({ setBusqueda }) => {
  return (
    <Form.Control
      type="text"
      placeholder="Ingrese su búsqueda"
      onChange={(e) => setBusqueda(e.target.value)}
    />
  );
};

export default Buscador;
