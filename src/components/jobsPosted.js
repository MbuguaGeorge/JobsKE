import React from 'react';
import {Link} from 'react-router-dom';
import view from './img/views.png';

const JobsPosted = ({title, desc, slug}) => {

    return(
        <>
            <Link to={`/appliedpost/${slug}`} style={{textDecoration:'None', color: 'Black'}}>
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
            </Link>
        </>
    )
}

export default JobsPosted;