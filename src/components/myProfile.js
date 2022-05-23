import React from 'react';

const MyProfile = ({first, last, resume, profile, title, desc}) => {

    const convert = first.toUpperCase()
    const initial = last[0].toUpperCase()

    return (
        <div className='container'>
            <div className='floatprofile'>
                <div className='myprofile'>
                    <img src={profile} alt='profile pic' width='80' height='80'/>
                    <label>{convert} {initial}.</label>
                </div>
                <div className='description'>
                    <h1>{title}</h1>
                </div>
            </div>
            <div className='skill-description'>
                <p>
                    {desc}
                </p>
                    <a href={resume}><button>Download CV</button></a>
            </div>
        </div>
    )
}

export default MyProfile;