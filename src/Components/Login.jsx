import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Login({saveUserData}) {
    let navigate = useNavigate()

    const [user, setuser] = useState({
        "email": "",
        "password": ""


    });

    const [isLoading, setisLoading] = useState(false);
    const [error, seterror] = useState("");
    const [message,setmessage] = useState("");

    function getUserData({ target }) {
        setuser({ ...user, [target.name]: target.value });

    }

    async function login(e) {
        e.preventDefault();
        seterror("")
        setisLoading(true)
        console.log(user);


        let { data } = await axios.post(`https://sticky-note-fe.vercel.app/signin`, user)
        if(data.message === 'success'){
            setmessage(data.message)
            localStorage.setItem('token' , data.token)
            saveUserData();
            navigate('/home');

        }else {
            seterror(data.message)
        }


        setisLoading(false)
        console.log(data);
    }
    return (
        <div>

            <div className="container my-5 py-5">
                <div className="col-md-5 m-auto text-center">
                    <form onSubmit={login}>
                       
                     
                        <div className="form-group">
                            <input onChange={getUserData} autoComplete='true' placeholder="Enter email" type="email" name="email" className="form-control" />
                        </div>
                        <div className="form-group my-2">
                            <input onChange={getUserData} autoComplete='true' placeholder="Enter you password" type="password" name="password" className=" form-control" />
                        </div>
                        <button type="submit" className={'btn btn-info w-100 ' + (isLoading ? "disabled" : "")}>{isLoading === true ? <i className="fa fa-spinner fa-spin" aria-hidden="true"></i> : "Login"}</button>



                        {error && <div className="alert alert-danger mt-2">
                            {error}
                        </div>}
                    </form>
            <button  className='btn btn-danger w-100'><Link to={'/register'}> Register</Link></button>
                </div>
            </div>
        </div>
    )
}
