import React from 'react'
import { Container,Navbar } from 'react-bootstrap';

const NavBar=()=>{

return(
   <div>
        <Navbar  variant="dark">
        <Container>
        <Navbar.Brand href="#home">
           <img src="https://www.freeiconspng.com/uploads/contacts-icon--26.png" width="50" alt="Simple Png Contact" />
           Contact List
        </Navbar.Brand>
        </Container>
        </Navbar>
</div>
)
}

export default NavBar
