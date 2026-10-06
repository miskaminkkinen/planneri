import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import multiMonthPlugin from '@fullcalendar/multimonth'
import { useState } from 'react'
import {Modal, Form, Button} from 'react-bootstrap'
import interactionPlugin from '@fullcalendar/interaction'


function toInputValue(date){
    const pad = (n) => String(n).padStart(2, '0')
    return(
        date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate()) + 'T' + pad(date.getHours()) + ':' + pad(date.getMinutes())
    )
}


function Calendar({events, onAddEvent}){
    const [showForm, setShowForm] = useState(false)
    const[title, setTitle] = useState('')
    const[start, setStart] = useState('')
    const[end, setEnd] = useState('')
    const[allDay, setAllDay] = useState(false)

    function handleDateClick(info) {
        if(info.allDay) {
            setStart(info.dateStr + 'T09:00')
            setEnd(info.dateStr + 'T10:00')
        }
        else{
            const oneHourLater = new Date(info.date.getTime() + 60 * 60 * 1000)
            setStart(toInputValue(info.date))
            setEnd(toInputValue(oneHourLater))
        }
        setAllDay(false)
        setShowForm(true)
    }

    function handleSubmit(e) {
        e.preventDefault()

        if(allDay){
        onAddEvent({title, start:start.slice(0, 10), allDay: true})
        }
        else{
            if(end <= start){
                alert('Päättymisajan täytyy olla aloitusajan jälkeen')
                return
            }
            onAddEvent({title, start, end, allDay: false})
        }
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
                    <Form.Check
                      className="my-3"
                      label = "Koko päivä"
                      checked = {allDay}
                      onChange = {(e) => setAllDay(e.target.checked)}
                    />

                    {!allDay && (
                        <>
                          <Form.Group className="mb-3">
                            <Form.Label>Alkaen</Form.Label>
                            <Form.Control
                              type = "datetime-local"
                              value = {start}
                              onChange={(e) => setStart(e.target.value)}
                              required
                            />
                          </Form.Group>
                          <Form.Group classname="mb-3">
                            <Form.Label>Päättyy</Form.Label>
                            <Form.Control
                              type = "datetime-local"
                              value = {end}
                              onChange={(e) => setEnd(e.target.value)}
                              required
                            />
                          </Form.Group>

                        </>
                    )}
                     
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