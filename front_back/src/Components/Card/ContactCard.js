import { React, useState } from "react";
import { Card, Modal, Button, Form } from "react-bootstrap";
import "./contactCard.css";
import {
  deletePerson,
  modifierPerson,
} from "../../Redux/Actions/personActions";
import { useDispatch } from "react-redux";

const ContactCard = ({ personne }) => {
  const dispatch = useDispatch();
  const [lgShow, setLgShow] = useState(false);

  // créer une State avec les anciens valeurs qui existe déjà au niveau de la base de données
  const [person, setPerson] = useState({
    name: personne.name,
    prenom: personne.prenom,
    age: personne.age,
    email: personne.email,
  });

  // fonction qui permet de récupérer les nouveaux valeurs attribués 
  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  return (
    <div className='contact-card'>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant='top' />
        <Card.Body>
          <Card.Title>
            <img
              src='https://www.freeiconspng.com/uploads/contact-icon-png-14.png'
              width='50'
              alt='Contact .ico'
            />
          </Card.Title>
          <Card.Text> {personne.name} </Card.Text>
          <Card.Text> {personne.prenom} </Card.Text>
          <Card.Text> {personne.age} </Card.Text>
          <Card.Text> {personne.email} </Card.Text>

          <div className='modif'>
            <Button class='btn btn-primary' onClick={() => setLgShow(true)}>
              Modifier
            </Button>
            <Modal
              size='lg'
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby='example-modal-sizes-title-lg'
            >
              <Modal.Header closeButton>
                <Modal.Title id='example-modal-sizes-title-lg'>
                  Modifier vos informations
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className='mb-3'>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                      type='text'
                      name='name'
                      onChange={handleChange}
                      defaultValue={person.name} // avoir les nouveaux valeurs
                    />
                    <Form.Text className='text-muted'>
                      Nom obligatoire
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control
                      type='text'
                      name='prenom'
                      onChange={handleChange}
                      defaultValue={person.prenom}
                    />
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type='text'
                      name='age'
                      onChange={handleChange}
                      defaultValue={person.age}
                    />
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type='email'
                      name='email'
                      onChange={handleChange}
                      defaultValue={person.email}
                    />
                    <Form.Text className='text-muted'>
                      Adresse E-mail obligatoire
                    </Form.Text>
                  </Form.Group>
                  {/* personne._id: on recupere props pour qu'on puisse avoir un acces lel id
                       person: modification apporté au personne input  */}
                  <Button
                    variant='primary'
                    type='submit'
                    onClick={() =>
                      dispatch(modifierPerson(personne._id, person))
                    }
                  >
                    Confirmer
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </div>
          <button
            type='button'
            class='btn btn-primary'
            onClick={() => dispatch(deletePerson(personne._id))}
          >
            Supprimer
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCard;
