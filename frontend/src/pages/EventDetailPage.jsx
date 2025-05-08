import {useRouteLoaderData} from 'react-router-dom';
import EventItem from '../components/EventItem.js';

function EventDetailPage() {
  const loaderData = useRouteLoaderData('event-detail');
  return (
    <EventItem event={loaderData}/>
  )
}
export async function loader1({request,params}) {
  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if(!response.ok){
    throw new Error("Could not fetch details for selected element!");
  }else{
    const data = await response.json();
    return data.event;
  }
}

export default EventDetailPage;
