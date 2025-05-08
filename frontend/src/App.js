// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './pages/Root.jsx';
import HomePage from './pages/HomePage.jsx';
import EventsPage , {loader} from './pages/EventsPage.jsx';
import EventDetailPage, {loader1} from './pages/EventDetailPage.jsx';
import NewEventPage from './pages/NewEventPage.jsx';
import EditEventPage from './pages/EditEventPage.jsx';
import EventsRootLayout from './pages/EventsRoot.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />},
      { path: 'events',element: <EventsRootLayout/>,
        children: [
            {index: true,
            element: <EventsPage />,
            loader:loader
            },
            { path: ':id',
              // element: <EventDetailPage />,
              id: 'event-detail',
              loader: loader1,
              children: [
                { path: 'edit', element: <EditEventPage />},
                {index: true,element: <EventDetailPage /> }
                ]
            },
            {path: 'new',element: <NewEventPage />}
          ]
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
