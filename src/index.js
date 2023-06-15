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
  },
  {
    path: 'cases/:caseName',
    element: <CaseModal />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
