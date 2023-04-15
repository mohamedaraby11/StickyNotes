import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';

function App() {
  let router = createBrowserRouter([
    {path:'/',element:<Layout/>,children:[
      {path:'login',element:<Login />},
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
