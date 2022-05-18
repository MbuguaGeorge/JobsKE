import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import contract from './img/contract.png';
import org from './img/organization.png';

class Status extends Component{
    state = {
        client: false,
        worker: false,
        status: ''
    }

    handleChangeOne = () => {
        this.setState({worker: false})
        this.setState({client: !this.state.client})
        this.setState({status: 'Client'})
    };

    handleChangeTwo = () => {
        this.setState({client: false})
        this.setState({worker: !this.state.worker})
        this.setState({status: 'Worker'})
    };

    submit = (e) => {
        e.preventDefault()
        localStorage.setItem('status', this.state.status)
    };

    render(){
        let inputField;
        if(this.state.client){
            inputField  =   <input 
                                type='submit'
                                value='Join as a client'
                            />
        }else if(this.state.worker){
            inputField  =   <input 
                                type='submit'
                                value='Apply as a job seeker'
                            />
        }else{
            inputField  =   <input 
                                type='submit'
                                value='Create Account'
                            />
        }
        
        return (
            <>
                <div className='status-nav'>
                    <Link to="/" style={{textDecoration: 'none'}}><h1>JobsKE</h1></Link>
                </div>
                <div className='status-quo'>
                    <h2>Join as a client or job seeker</h2>
                    <form onSubmit={this.submit} >
                        <div className='cur-status'>
                            <ul>
                                <li>
                                    <img src={org} alt='client' width='30'/>
                                    <p>I am a client, looking for job seekers</p>
                                    <input 
                                        type='radio'
                                        checked={this.state.client}
                                        onChange={this.handleChangeOne}
                                    />
                                </li>
                                <li>
                                    <img src={contract} alt='freelancer' width='30'/>
                                    <p>I am a job seeker, looking for work</p>
                                    <input 
                                        type='radio'
                                        checked={this.state.worker}
                                        onChange={this.handleChangeTwo}
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className='button'>
                            {inputField}
                        </div>
                    </form>
                    <div className='signup-link'>Have an account? <Link to="/login">Login</Link></div>
                </div>
            </>
        )
    }
}

export default Status;