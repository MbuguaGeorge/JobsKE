import React from 'react';
import {Link} from 'react-router-dom';

const ActualJobPost = ({title, desc, type, category, date, location, slug}) => {
    return(
        <div className='jobs-positions'>
            <Link to={`/apply/${slug}`} style={{textDecoration:'None', color: 'black'}}>
                <h3>{title}</h3>
                <p>{desc.substring(0, 250)}...</p>
                <div className='job-tags'>
                    <ul>
                        <li><button>{type}</button></li>
                        <li><h5>{category}</h5></li>
                        <li><h5>{location}</h5></li>
                        <li><h5>{date}</h5></li>
                    </ul>
                </div>
            </Link>
        </div>
    )
}

export default ActualJobPost;