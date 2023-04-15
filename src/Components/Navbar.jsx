import React from 'react'
import { Link, useLocation } from 'react-router-dom'
export default function Navbar({ userDAta }) {

   function logout(){
    localStorage.clear();
   }
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    {userDAta !== null ? <Link to={"home"}> Notes</Link>
                        : null}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       
                        {userDAta == null ? <>  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2">
                                <Link to={"register"}>Register</Link>

                            </li>
                            <li className="nav-item px-2">
                                <Link to={"login"}>Login</Link>

                            </li>
                        </ul></> : <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2">
                                <Link onClick={logout} to={"/register"}>logout</Link>

                            </li>
                        </ul>}


                    </div>
                </div>
            </nav>
        </div>
    )
}
