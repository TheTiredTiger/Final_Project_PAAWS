// Section for adoption with status like approved, pending, rejected

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AdoptionCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" alt="insert some alt text here"/>
      <Card.Body>
        <Card.Title>Animal Name</Card.Title>
        <Card.Text>
          Ref: <br/>
          Adoption status:
        </Card.Text>
        <Button variant="primary">More</Button>
      </Card.Body>
    </Card>
  );
}

export default AdoptionCard;