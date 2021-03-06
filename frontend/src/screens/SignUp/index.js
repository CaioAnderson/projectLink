import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="container h-100 tp-5">
            <h1>Sign up</h1>
            <div className="d-flex flex-column h-100">
                <form action="">
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="Password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password Confirmation</label>
                        <input type="Password" className="form-control" />
                    </div>
                    <button className="btn btn-primary btn-round">Submit</button>

                </form>
                <div className="container text-center fixed-bottom pb-5">
                    <div className="text-muted">Already have an Account ?</div>
                    <Link to="/sign-in"> Sign-In</Link>
                </div>
            </div>
        </div>
    )
};

export default SignUp;