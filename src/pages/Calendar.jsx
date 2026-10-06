import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import multiMonthPlugin from '@fullcalendar/multimonth'
import { useState } from 'react'
import {Modal, Form, Button} from 'react-bootstrap'
import interactionPlugin from '@fullcalendar/interaction'


function Calendar({events, onAddEvent}){
    const [showForm, setShowForm] = useState(false)
    const[title, setTitle] = useState('')
    const[start, setStart] = useState('')

    function handleDateClick(info) {
        setStart(info.dateStr)
        setShowForm(true)
    }

    function handleSubmit(e) {
        e.preventDefault()
        onAddEvent({title, start, allDay: true})
        setTitle('')
        setShowForm(false)
        }
    return (
        <>
        <FullCalendar
          plugins = {[dayGridPlugin, timeGridPlugin, multiMonthPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'multiMonthYear, dayGridMonth, timeGridWeek',
          }}
          firstDay={1}
          events = {events}
        />

        <Modal show = {showForm} onHide={() => setShowForm(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Uusi tapahtuma</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                          value={title}
                          onChange = {(e) => setTitle(e.target.value)}
                          required
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button type = "submit">Tallenna</Button>
                </Modal.Footer>
            </Form>
        </Modal>
        </>
    )

    
}

export default Calendar