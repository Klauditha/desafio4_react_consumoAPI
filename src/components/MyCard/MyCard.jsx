import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import MyModal from "../MyModal/MyModal";
import "./MyCard.css";

const MyCard = ({
  poster_path,
  backdrop_path,
  title,
  overview,
  release_date,
  vote_average,
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card
        className=" g-dark text-dark bg-opacity-25 mycard"
        border="light"
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" src={backdrop_path} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <>
              <label>
                <b>Fecha lanzamiento: </b>
                {release_date}
              </label>
              <label>
                <b>Puntuación Usuarios:</b>
                {vote_average * 10}%
              </label>
            </>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="dark" size="sm" onClick={() => setShow(true)}>
            Ver más
          </Button>
          <MyModal
            show={show}
            setShow={setShow}
            title={title}
            overview={overview}
            backdrop_path={poster_path}
            onHide={() => setShow(false)}
          />
        </Card.Footer>
      </Card>
    </>
  );
};

export default MyCard;
