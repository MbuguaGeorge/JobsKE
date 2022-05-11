import React, {Component} from 'react';
import avatar from './img/avatar.jpg';

class Profile extends Component{
    render(){
        return(
            <>
                <div className='status-nav'>
                    <h1>JobsKE</h1>
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
                    </div>
                </div>
            </>
        )
    }
}

export default Profile;