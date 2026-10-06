import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import multiMonthPlugin from '@fullcalendar/multimonth'



function Calendar({events}){
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
          events = {events}
        />
    )
    
}

export default Calendar