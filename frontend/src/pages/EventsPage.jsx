import React from 'react'
import { Link } from 'react-router-dom'

const events = [
  {id: 1, name:'football'},
  {id: 2, name:'tennis'},
  {id: 3, name:'gym'},
  {id: 4, name:'run'},
]
function EventsPage() {
  return (
    <div>
      <h1>Events Page</h1>
      <ul>
        {events.map((event)=><li key={event.id}><Link to={`/events/${event.id}`}>{event.name}</Link></li>)}
      </ul>
    </div>
  )
}

export default EventsPage
