import { useLoaderData } from 'react-router-dom';
import  EventsList from '../components/EventsList.js'


function EventsPage() {
  const events = useLoaderData();
  console.log('events',events);
  return (
    <div>
      <EventsList events={events}/>
    </div>
  )
}

export async function loader() {
  const response = await fetch('http://localhost:8080/events');
  if(!response.ok){
    return {isError: true, message: 'Could not fetch events'}
  } else {
    const resData = await response.json();
    console.log('resData: ', resData.events);
    return resData.events
  }
}

export default EventsPage;
