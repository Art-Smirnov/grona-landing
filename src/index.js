import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CaseModal from './components/CaseModal/CaseModal';
import ErrorPage from './ErrorPage';

import './index.sass';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: 'cases/:caseName',
    //     element: <CaseModal />,
    //   },
    // ],
    children: [
      {
        path: 'cases/bbq-box',
        element: <span>!!!!!!!!!!!!!!</span>,
        // element: <CaseModal />,
      },
      {
        path: 'cases/wizcric',
        element: <CaseModal />,
      },
      {
        path: 'cases/kram',
        element: <CaseModal />,
      },
      {
        path: 'cases/polestar',
        element: <CaseModal />,
      },
    ],
  },
  // {
  //   path: 'cases/:caseName',
  //   element: <CaseModal />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
