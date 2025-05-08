import React from 'react'
import { useLoaderData } from 'react-router-dom';
import  EventsList from '../components/EventsList.js'


function EventsPage() {

  const events = useLoaderData();

  return (
    <div>
      <EventsList events={events}/>
    </div>
  )
}

export default EventsPage
