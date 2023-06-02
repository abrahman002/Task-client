import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import BookMark from './Components/BookMark/BookMark';
import Updated from './Components/Update/Updated';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
  {
    path:'/bookmark',
    element:<BookMark></BookMark> 
  },
  {
    path:'/update/:id',
    element:<Updated></Updated>,
    loader:({params})=>fetch(`https://assignment-server-abdurrahmanislamhossainx223-gmailcom.vercel.app/userdata/${params.id}`)
  }]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
