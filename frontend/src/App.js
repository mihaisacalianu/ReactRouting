// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './pages/Root.jsx';
import HomePage from './pages/HomePage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import EventDetailPage from './pages/EventDetailPage.jsx';
import NewEventPage from './pages/NewEventPage.jsx';
import EditEventPage from './pages/EditEventPage.jsx';
import EventsRootLayout from './pages/EventsRoot.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {index: true, element: <HomePage />},
      {path: 'events',element: <EventsRootLayout/>,
        children: [
          {index: true,element: <EventsPage />, loader: async ()=> {
            const response = await fetch('http://localhost:8080/events');
            if(!response.ok){
              //....
            } else {
              const resData = await response.json();
              return resData.events;
            }
          }},
          {path: ':id',element: <EventDetailPage />},
          {path: 'new',element: <NewEventPage />},
          {path: ':id/edit',element: <EditEventPage />},
        ]
      },

    ]
  }
]);




function App() {
  return <RouterProvider router={router}/>;
}

export default App;
