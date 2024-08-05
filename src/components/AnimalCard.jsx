// Card with minimal info on the animal, such as name, species, approximate age, gender

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AnimalCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" alt="insert some alt text here"/>
      <Card.Body>
        <Card.Title>Animal Name</Card.Title>
        <Card.Text>
          Species: <br/>
          Gender: <br/>
          Age: <br/>
          Known illnesses: <br/>
          Ref:
        </Card.Text>
        <Button variant="primary">More</Button>
      </Card.Body>
    </Card>
  );
}

export default AnimalCard;