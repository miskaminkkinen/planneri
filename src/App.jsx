
import './App.css'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Calendar from './pages/Calendar'
import Notes from './pages/Notes'
import Upcoming from './pages/Upcoming'

function App() {
  
  return (
    
    
    <HashRouter>
      <nav>
        <Link to='/'>Calendar</Link>
        <Link to='/upcoming'>Upcoming</Link>
        <Link to='/notes'>Notes</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Calendar />} />
        <Route path='/upcoming' element={<Upcoming />} />
        <Route path='/notes' element={<Notes />} />
      </Routes>
    </HashRouter>
    
  )
}

export default App
