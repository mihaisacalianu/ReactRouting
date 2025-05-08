import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <>
      <ul>
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/events">Events</Link></li>
      </ul>
    </>
  )
}

export default MainNavigation
