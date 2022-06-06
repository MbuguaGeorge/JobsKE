import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AppliedPost extends Component{
    render(){
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
                <div className='jobs-applied-to'>
                    <h3>The following applied to your job post<span>UI designer</span></h3>
                </div>
            </>
        )
    }
}

export default AppliedPost;