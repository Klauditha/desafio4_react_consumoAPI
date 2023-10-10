import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import './MyModal.css'
const MyModal = ({ show, setShow, title, overview, backdrop_path }) => {
  return (
    <>
      <Modal
        size="md"
        show={show}
        onHide={() => setShow(false)}
        fullscreen={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col id="modal-text" md="6" className="text-justify">
                {overview}
              </Col>
              <Col md="6">
                {" "}
                <Image className="modal-img" src={backdrop_path} thumbnail />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
