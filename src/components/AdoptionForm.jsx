// Form with mandatory questions and user contact info so shelter can get in touch

// Either the name of the animal (and ID/chip?) will be locked in from AnimalPage, or there should be the option to add both manually (maybe with Clear form button)

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AdoptionForm() {
    return (
      <Form>
        <Form.Group className="m-3" controlId="formAnimalName">
          <Form.Label>Animal Name</Form.Label>
          <Form.Control type="text" placeholder="Enter the animal's name" />
        </Form.Group>

        <Form.Group className="m-3" controlId="formAnimalRed">
          <Form.Label>Animal Reference</Form.Label>
          <Form.Control type="number" placeholder="Enter the animal's reference" />
        </Form.Group>

        <Form.Group className="m-3" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your first name" />
        </Form.Group>

        <Form.Group className="m-3" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your last name" />
        </Form.Group>

        <Form.Group className="m-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="m-3" controlId="formBasicPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="tel" placeholder="Enter email" />
        </Form.Group>


        {/* Should be yes or no question */}
        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label>Is this your first time adopting a pet? </Form.Label>
          <Form.Control type="text" placeholder="Enter your answer" />
        </Form.Group>

        {/* Should be yes or no question */}
        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label>Do you already have any pets?</Form.Label>
          <Form.Control type="text" placeholder="Enter your answer" />
        </Form.Group>

        {/* Should be a long box for writing */}
        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label>Please describe your current pets in detail.</Form.Label>
          <Form.Control type="text" placeholder="Enter your answer" />
        </Form.Group>

        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label>Why are you interested in this particular animal?</Form.Label>
          <Form.Control type="text" placeholder="Enter your answer" />
        </Form.Group>

        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label>Do you plan to meet this animal before the adoption or have you already met them?</Form.Label>
          <Form.Control type="text" placeholder="Enter your answer" />
        </Form.Group>

        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label>Will the animal have space to play/be entertained?</Form.Label>
          <Form.Control type="text" placeholder="Enter your answer" />
        </Form.Group>

        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label>Will you be able to front initial vet bills, like neutering, as per the shelter's stipulations?</Form.Label>
          <Form.Control type="text" placeholder="Enter your answer" />
        </Form.Group>
        
        <Button className='m-2' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }

export default AdoptionForm;