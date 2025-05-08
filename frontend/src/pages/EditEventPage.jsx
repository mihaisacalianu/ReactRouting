import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm.js';

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  const event = data;
  return (
    <EventForm event={event}/>
  )
}

export default EditEventPage;
