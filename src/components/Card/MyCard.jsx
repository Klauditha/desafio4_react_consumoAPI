import Card from 'react-bootstrap/Card';
const MyCard = ({backdrop_path,title,overview,release_date
}) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={backdrop_path} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {release_date}
        </Card.Text>
      </Card.Body>
    </Card></>
  )
}

export default MyCard