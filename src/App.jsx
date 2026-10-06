
import './App.css'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Calendar from './pages/Calendar'
import Notes from './pages/Notes'
import Upcoming from './pages/Upcoming'
import {Navbar, Nav, Container, } from 'react-bootstrap'

function App() {
  
  return (
    
    
    <HashRouter>
      <Navbar bg = "dark" data-bs-theme= "dark" expand = "md">
        <Container>
          <Navbar.Brand as = {Link} to="/"> Planneri </Navbar.Brand>
          <Navbar.Toggle aria-controls = "main-nav" />
          <Navbar.Collapse id = "main-nav" >
          <Nav>
            <Nav.Link as={Link} to = "/"> Kalenteri </Nav.Link>
            <Nav.Link as={Link} to = "/upcoming"> Tärkeät päivämäärät </Nav.Link>
            <Nav.Link as={Link} to = "/"> Muistiinpanot </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>

      <Routes>
        <Route path='/' element={<Calendar />} />
        <Route path='/upcoming' element={<Upcoming />} />
        <Route path='/notes' element={<Notes />} />
      </Routes>
    </HashRouter>
    
  )
}

export default App
