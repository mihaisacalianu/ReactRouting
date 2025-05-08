// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './pages/Root.jsx';
import HomePage from './pages/HomePage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import EventDetailPage from './pages/EventDetailPage.jsx';
import NewEventPage from './pages/NewEventPage.jsx';
import EditEventPage from './pages/EditEventPage.jsx';
// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage done!
//    - EventsPage done!
//    - EventDetailPage done!
//    - NewEventPage done!
//    - EditEventPage done!
// 2. Add routing & route definitions for these five pages
//    - / => HomePage done!
//    - /events => EventsPage done!
//    - /events/<some-id> => EventDetailPage done!
//    - /events/new => NewEventPage done!
//    - /events/<some-id>/edit => EditEventPage done!
// 3. Add a root layout that adds the <MainNavigation> component above all page components done!
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {index: true, element: <HomePage />},
      {path: '/events',element: <EventsPage />},
      {path: '/events/:id',element: <EventDetailPage />},
      {path: '/events/new',element: <NewEventPage />},
      {path: '/events/:id/edit',element: <EditEventPage />},
    ]
  }
]);




function App() {
  return <RouterProvider router={router}/>;
}

export default App;
