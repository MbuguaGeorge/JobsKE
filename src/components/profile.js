import React, {Component} from 'react';
import avatar from './img/avatar.jpg';
import {Link} from 'react-router-dom';

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
                    <h1>JobsKE</h1>
                </div>
                <div className='edit-button'>
                    <Link to="/userprofile"><button>Edit Profile</button></Link>
                </div>
                <div className='container'>
                    <div className='floatprofile'>
                        <div className='myprofile'>
                            <img src={avatar} alt='profile pic' width='80'/>
                            <label>George M.</label>
                        </div>
                        <div className='description'>
                            <h1>Web Developer</h1>
                        </div>
                    </div>
                    <div className='skill-description'>
                        <p>
                            Are you looking for a web application developer? Well, you are in luck!
                            Hello, my name is George Mbugua and I am a full-stack web application developer. For the past 2 years, I have been developing and designing web applications for
                            a range of clients. I build and redesign professional websites for companies that require a complex site to advertise their work.
                            My greatest strength is in problem-solving and thinking out of the box.
                        </p>
                        <button>Download CV</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Profile;