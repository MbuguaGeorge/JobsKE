import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            details: {
                username: '',
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                password2: '',
            }
        }
    }

    submit = (e) => {
        e.preventDefault();
        console.log(this.state.details);
        console.log(this.state.status);
        fetch('http://127.0.0.1:8000/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.details)
        }).then(
            data => {
                console.log(data);
            }
        ).catch(error => console.log(error))
    }
    
    onChange = (e) => {
        const dets = this.state.details;
        dets[e.target.name] = e.target.value;
        this.setState({details : dets})
    }

    render() {
        return (
            <div className='login-container'>
                <h2>Sign Up</h2>
                <form onSubmit={this.submit}>
                    <div className='input-field'>
                        <input 
                            type='text' required
                            name='username'
                            value={this.state.details.username}
                            onChange={this.onChange}
                        />
                        <span></span>
                        <label>User name</label>
                    </div>
                    <div className='input-field'>
                        <input 
                            type='text' required
                            name='firstName'
                            value={this.state.details.firstName}
                            onChange={this.onChange}
                        />
                        <span></span>
                        <label>first name</label>
                    </div>
                    <div className='input-field'>
                        <input 
                            type='text' required
                            name='lastName'
                            value={this.state.details.lastName}
                            onChange={this.onChange}
                        />
                        <span></span>
                        <label>last name</label>
                    </div>
                    <div className='input-field'>
                        <input 
                            type='text' required
                            name='email'
                            value={this.state.details.email}
                            onChange={this.onChange}
                        />
                        <span></span>
                        <label>email</label>
                    </div>
                    <div className='input-field'>
                        <input 
                            type='password' required
                            name='password'
                            value={this.state.details.password}
                            onChange={this.onChange}
                        />
                        <span></span>
                        <label>password</label>
                    </div>
                    <div className='input-field'>
                        <input 
                            type='password' required
                            name='password2'
                            value={this.state.details.password2}
                            onChange={this.onChange}
                        />
                        <span></span>
                        <label>confirm password</label>
                    </div>
                    <input type='submit' value='Signup'/>
                    <div className='signup-link'>Have an account? <Link to="/login">Login</Link></div>
                </form>
            </div>
        )
    }
}

export default Signup;