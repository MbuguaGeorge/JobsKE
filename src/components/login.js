import React, {Component} from 'react';
import {Link, Navigate} from 'react-router-dom';

class Login extends Component{
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    componentDidMo

    submit = (e) => {
        e.preventDefault()
        fetch('http://127.0.0.1:8000/login',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(this.state.credentials)
        }).then(
            res => {
                console.log(res)
                res.json().then(data => {
                    console.log(data)
                    if(data.token){
                        localStorage.setItem('token', data.token)
                    }
                    if(!data.token){
                        localStorage.setItem('token', data.error)
                    }
                })
            }
        ).catch(error => console.log(error))
    };

    handleChange = (e) => {
        const cred = this.state.credentials
        cred[e.target.name] = e.target.value
        this.setState({credentials: cred})
    };

    render() {
        if(localStorage.getItem('token')){
            return <Navigate to="/jobs"/>
        }

        return (
            <div className='login-container'>
                <h2>Sign In</h2>
                <form onSubmit={this.submit}>
                    <div className='input-field'>
                        <input type='text' required
                            value={this.state.credentials.username}
                            name = 'username'
                            onChange={this.handleChange}
                        />
                        <span></span>
                        <label>username</label>
                    </div>
                    <div className='input-field'>
                        <input type='password' required
                            value={this.state.credentials.password}
                            name='password'
                            onChange={this.handleChange}
                        />
                        <span></span>
                        <label>password</label>
                    </div>
                    <div className='pass'>Forgot password ?</div>
                    <input type='submit' value='Login'/>
                    <div className='signup-link'>Not a member? <Link to="/signup">Signup</Link></div>
                </form>
            </div>
        )
    }
}

export default Login;