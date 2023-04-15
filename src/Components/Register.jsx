import React from 'react'

export default function Register() {
    return (
        <div>

            <div className="container my-5 py-5">
                <div className="col-md-5 m-auto text-center">
                    <form >
                        <div className="form-group">
                            <input autoComplete='true' placeholder="Enter your name" name="first_name" type="text" className=" form-control" />
                        </div>
                        <div className="form-group my-2 ">
                            <input autoComplete='true' placeholder="Enter your name" name="last_name" type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input autoComplete='true' placeholder="Enter email" type="email" name="email" className="form-control" />
                        </div>
                        <div className="form-group my-2">
                            <input autoComplete='true' placeholder="Enter you password" type="password" name="password" className=" form-control" />
                        </div>
                        <button type="submit" className={'btn btn-info w-100 '}>Register</button>

                        <div className="alert alert-danger mt-2">

                        </div>
                        {/* {message && <div className="alert alert-success mt-2">
                            {message}
                        </div>} */}

                        {/* 
                        {error != "" ? <div className="alert alert-danger mt-2">
                            {error}
                        </div>:""} */}


                    </form>
                </div>
            </div>

        </div>
    )
}
