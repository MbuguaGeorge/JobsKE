import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Signup extends Component{
    render() {
        return (
            <div className='login-container'>
                <h2>Sign Up</h2>
                <form>
                    <div className='input-field'>
                        <input type='text' required/>
                        <span></span>
                        <label>first name</label>
                    </div>
                    <div className='input-field'>
                        <input type='text' required/>
                        <span></span>
                        <label>last name</label>
                    </div>
                    <div className='input-field'>
                        <input type='text' required/>
                        <span></span>
                        <label>email</label>
                    </div>
                    <div className='input-field'>
                        <input type='password' required/>
                        <span></span>
                        <label>password</label>
                    </div>
                    <div className='input-field'>
                        <input type='password' required/>
                        <span></span>
                        <label>confirm password</label>
                    </div>
                    <input type='submit' value='Signup' />
                    <div className='signup-link'>Have an account? <Link to="/login">Login</Link></div>
                </form>
            </div>
        )
    }
}

export default Signup;