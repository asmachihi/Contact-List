import { React, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ajoutPerson } from "../Redux/Actions/personActions";

export default function Ajout() {
  const dispatch = useDispatch();
  const [lgShow, setLgShow] = useState(false);

  //on doit créer une State et l'initialiser à vide
  const [person, setPerson] = useState({
    name: "",
    prenom: "",
    age: 0,
    email: "",
  });

  // une fonction qui nous permet de récupérer les valeurs des inputs
  const changePerson = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  return (
    <div className='Ajout'>
      <Button class='btn btn-primary' onClick={() => setLgShow(true)}>
        <h1>Ajouter un nouveau Contact</h1>
      </Button>
      <Modal
        size='lg'
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-lg'>
            Ajouter un nouveau contact
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Nom</Form.Label>
              <Form.Control type='text' name='name' onChange={changePerson} />
              <Form.Text className='text-muted'>Nom obligatoire</Form.Text>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Prénom</Form.Label>
              <Form.Control type='text' name='prenom' onChange={changePerson} />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Age</Form.Label>
              <Form.Control type='text' name='age' onChange={changePerson} />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' name='email' onChange={changePerson} />
              <Form.Text className='text-muted'>
                Adresse E-mail obligatoire
              </Form.Text>
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
              // person: nouveau personne à ajouter
              onClick={() => {
                dispatch(ajoutPerson(person));
              }}
            >
              Confirmer
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
