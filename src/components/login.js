import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component{
    render() {
        return (
            <div className='login-container'>
                <h2>Sign In</h2>
                <form>
                    <div className='input-field'>
                        <input type='text' required/>
                        <span></span>
                        <label>username</label>
                    </div>
                    <div className='input-field'>
                        <input type='password' required/>
                        <span></span>
                        <label>password</label>
                    </div>
                    <div className='pass'>Forgot password ?</div>
                    <input type='submit' value='Login' />
                    <div className='signup-link'>Not a member? <Link to="/signup">Signup</Link></div>
                </form>
            </div>
        )
    }
}

export default Login;