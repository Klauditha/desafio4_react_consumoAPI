import Form from "react-bootstrap/Form";
const Ordenador = ({ setOrdenar }) => {
  return (
    <Form.Select
      aria-label="Default select example"
      onChange={(e) => setOrdenar(e.target.value)}
    >
      <option>Ordenar por:</option>
      <option value="titleAsc">Titulo Ascendente</option>
      <option value="titleDesc">Titulo Descendente</option>
      <option value="dateAsc">Fecha Lanzamiento Ascendente</option>
      <option value="dateDesc">Fecha Lanzamiento Descendente</option>
      <option value="AverageAsc">Mayor puntuación</option>
      <option value="AverageDesc">Menor puntuación</option>
    </Form.Select>
  );
};

export default Ordenador;
