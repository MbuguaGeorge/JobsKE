import React from 'react';

const UserP = ({first, last, resume, profile, title, desc}) => {

    const convert = first.toUpperCase()
    const initial = last[0].toUpperCase()

    return (
        <div className='container' style={{marginTop: '150px'}}>
            <div className='floatprofile'>
                <div className='myprofile'>
                    <img src={`https://africastalkingdemo.herokuapp.com${profile}`} alt='profile pic' width='80' height='80'/>
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
                    <a href={`https://africastalkingdemo.herokuapp.com${resume}`}><button>Download CV</button></a>
            </div>
        </div>
    )
}

export default UserP;