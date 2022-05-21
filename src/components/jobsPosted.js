import React from 'react'
import view from './img/views.png';

const JobsPosted = ({title, desc}) => {
    return(
        <>
            <div className='job-container'>
                <ol>
                    <li>
                        <h2>{title}</h2>
                    </li>
                    <li>
                        <p>{desc}</p>
                    </li>
                </ol>
                <ul>
                    <li>
                        <span><img src={view} alt='views' width='20'/>100</span>
                    </li>
                    <li>
                        <label>Applied: 45</label>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default JobsPosted;