
import './App.css'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Calendar from './pages/Calendar'
import Notes from './pages/Notes'
import Upcoming from './pages/Upcoming'
import {Navbar, Nav, Container, } from 'react-bootstrap'
import {useState} from 'react'

const testEvents = [
  {
    id: '1',
    title: 'Hammaslääkäri',
    start: '2026-10-15T14:00',
    end: '2026-10-15T15:00',
    allDay: false,
  },
  {
    id: '2',
    title: 'Sähkölasku',
    start: '2026-10-20',
    allDay: true,
  },
]

function App() {
  const [events, setEvents] = useState(testEvents)

  function addEvent(newEvent){
    setEvents([...events, {...newEvent, id: crypto.randomUUID() }])
  }
  
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
            <Nav.Link as={Link} to = "/notes"> Muistiinpanot </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>

      <Routes>
        <Route path='/' element={<Calendar events = {events} onAddEvent={addEvent}/>} />
        <Route path='/upcoming' element={<Upcoming events = {events}/>} />
        <Route path='/notes' element={<Notes events = {events}/>} />
      </Routes>
    </HashRouter>
    
  )
}

export default App
