import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UserP from './user_profile';

class User extends Component{

    constructor(props){
        super(props)
        this.state = {
            id: null,
            prof: []
        }
    };

    componentDidMount(){
        const url = window.location.pathname
        const field = url.split('/')
        const id = field[2]
        
        fetch(`http://127.0.0.1:8000/userprofile/${id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        }).then(
            (res) => res.json()
        ).then(
            (json) => this.setState({prof: json})
        ).catch(error => console.log(error))
    };

    render(){
        console.log(this.state.prof)
        return (
            <>
                <div className='jobspage'>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/jobs" style={{textDecoration: 'None'}}><h1>JobsKE</h1></Link>
                            </li>
                            <li>
                                <Link to="/post"><button>Post a Job</button></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {this.state.prof.map(user => 
                    <UserP 
                        key = {user.pk}
                        first = {user.firstname}
                        last = {user.lastname}
                        profile = {user.profile}
                        resume = {user.resume}
                        title = {user.title}
                        desc = {user.description}
                    />
                )}
            </>
        )
    }
}

export default User;