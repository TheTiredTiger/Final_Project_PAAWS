// Should have tiers for Monthly and Yearly: benefits like walking pet, playdates, feedings, video recordings, ability to choose new toy/collar from a selection?

// Create just a card with 2 customizable fields -->

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PaymentPlan() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Payment Plan</Card.Title>
        <Card.Text>
          <h6>(value)/(time)</h6>
          <p>Some fun benefits for monthly plans (upon request)</p>
          <ul>
            <li>Playdates</li>
            <li>Walk your sponsored pet</li>
            <li>Pictures</li>
            <li>Video recordings</li>
            <li>Feedings</li>
            <li>Choose a collar/toy from a list of available options</li>
          </ul>
        </Card.Text>
        <Button variant="primary">More</Button>
      </Card.Body>
    </Card>
  );
}

export default PaymentPlan;