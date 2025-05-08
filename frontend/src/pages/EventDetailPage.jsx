import { useParams } from 'react-router-dom';

function EventDetailPage() {
  const params = useParams();
  return (
    <div>
      <h1>Event Detail Page</h1>
      <h2>Event number: {params.id}</h2>
    </div>
  )
}

export default EventDetailPage;
