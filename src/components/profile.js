import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MyProfile from './myProfile';

class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: []
        }
    };

    componentDidMount(){
        fetch('http://127.0.0.1:8000/user',{
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
        }).then((res) => res.json()
        ).then((json) => {
            this.setState({user: json})
        }).catch(error => console.log(error))
    };

    render(){
        console.log(this.state.user)
        return(
            <>
                <div className='status-nav'>
                    <Link to="/jobs" style={{textDecoration:'None'}}><h1>JobsKE</h1></Link>
                </div>
                <div className='edit-button'>
                    <Link to="/userprofile"><button>Edit Profile</button></Link>
                </div>
                {this.state.user.map(user => 
                    <MyProfile 
                        key = {user.user_profile}
                        first = {user.firstname}
                        last = {user.lastname}
                        resume = {user.resume}
                        profile = {user.profile}
                        title = {user.title}
                        desc = {user.description}
                    />
                )}
            </>
        )
    }
}

export default Profile;