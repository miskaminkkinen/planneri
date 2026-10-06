import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import multiMonthPlugin from '@fullcalendar/multimonth'

const testEvents = [
    {
        id: '1',
        Title: 'Hammaslääkäri',
        Start:'2026-10-15T14:00',
        end: '2026-10-15T15:00',
        allDay: false,
    },
    {
        id: '2',
        Title: 'Loma',
        Start:'2026-10-15',
        allDay: true,
    },
]

function Calendar(){
    return (
        <FullCalendar
          plugins = {[dayGridPlugin, timeGridPlugin, multiMonthPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'multiMonthYear, dayGridMonth, timeGridWeek',
          }}
          firstDay={1}
          events = {testEvents}
        />
    )
    
}

export default Calendar