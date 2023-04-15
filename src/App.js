import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';

function App() {
  const [userDAta, setuserDAta] = useState(null);

  function saveUserData(){
    let encodedToken = localStorage.getItem('token')
    let decodedToken = jwtDecode(encodedToken)
    setuserDAta(decodedToken)

  }



  let router = createBrowserRouter([
    {path:'/',element:<Layout userDAta={userDAta}/>,children:[
      {path:'login',element:<Login saveUserData={saveUserData}  />},
      {path:'register',element:<Register />},
      {path:'home',element:<Home />},
      {path:'*',element:<Login />},

    ]}
  ])
  return (
    <>
    <RouterProvider router={router} />
    
    </>
  );
}

export default App;
