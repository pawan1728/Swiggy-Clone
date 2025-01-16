import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AboutUs from './components/AboutUs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Body from './components/Body';
import Error from './components/Error';
import ResMenu from './components/ResMenu';
import Custom from './components/custom';



const appRouter = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <Body />
    },
    {
      path: '/about',
      element: <AboutUs />,
    },
    {
      path:'/contact',
      element:<ContactUs />
    },
    {
    path:'/restaurents/:resId',
    element:<ResMenu />
    },
    {
      path:'/custom/',
      element:<Custom />
      }
  ],
  errorElement:<Error />
}

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
