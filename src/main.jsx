import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login/Login';
import Register from './Pages/Home/Login/Register';
import AuthProvider from './Provider/AuthProvider';
import Detail from './Pages/Details/Detail';
import AddToy from './Pages/AddToy/AddToy';
import MyToy from './Pages/MyToy/MyToy';
import AllToy from './Pages/AllToy/AllToy';
import Blogs from './Pages/Blogs/Blogs';
import PrivateRoute from './Provider/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main>Hello world!</Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: 'signup',
        element:<Register></Register>
      },
      {
        path: 'addtoy',
        element:<AddToy></AddToy>
      },
      {
        path: 'detail/:id',
        element:<PrivateRoute><Detail></Detail></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path: 'mytoy',
        element: <MyToy></MyToy>
      },
      {
        path: 'alltoy',
        element: <AllToy></AllToy>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
  </div>
)
