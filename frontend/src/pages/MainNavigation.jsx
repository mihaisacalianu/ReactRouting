import { NavLink } from 'react-router-dom';
import classes from '../components/MainNavigation.module.css';

function MainNavigation() {
  return (
    <>
      <ul className={classes.list}>
        <li>
          <NavLink to="/"className={({isActive})=> isActive ? classes.active : undefined}>
          Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/events"className={({isActive})=> isActive ? classes.active : undefined}>
          Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/events/new"className={({isActive})=> isActive ? classes.active : undefined}>
          New Event
          </NavLink>
        </li>
      </ul>
    </>
  )
}

export default MainNavigation
