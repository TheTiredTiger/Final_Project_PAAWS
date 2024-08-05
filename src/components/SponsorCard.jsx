// Highlight sponsered animals (golds)

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SponserCard() {
  return (
    <>
        <h3>Your sponsored pets</h3>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" alt="insert some alt text here"/>
        <Card.Body>
            <Card.Title>Animal Name</Card.Title>
            <Card.Text>
            Contributing:
            </Card.Text>
            <Button variant="primary">More</Button>
        </Card.Body>
        </Card>
    </>
  );
}

export default SponserCard;