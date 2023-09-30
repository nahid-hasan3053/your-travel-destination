import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">    
                    <h1 className="text-5xl font-bold">Login Now!</h1>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <p>Don't have any Account? Please <Link className='font-bold' to='/register'>Register</Link></p>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-success">Login</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;