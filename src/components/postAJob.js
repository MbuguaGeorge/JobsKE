import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PostAJob extends Component{
    render(){
        return(
            <>
                <div className='status-nav'>
                    <Link to="/" style={{textDecoration: 'none'}}><h1>JobsKE</h1></Link>
                </div>
                <div className='post'>
                    <h1>Post a job</h1>
                    <form>
                        <ul>
                            <li>
                                <label>Job Title</label>
                                <input type='text' required 
                                    placeholder='eg. Professional UI Designer '
                                />
                            </li>
                            <li>
                                <label>Company</label>
                                <input type='text' required 
                                    placeholder='eg. Microsoft, ADC'
                                />
                            </li>
                            <li>
                                <h2>Job Type</h2>
                                <span><input type='radio' required />Full Time</span>
                                <span><input type='radio' required />Part Time</span>
                                <span><input type='radio' required />Freelance</span>
                                <span><input type='radio' required />Internship</span>
                            </li>
                            <li>
                                <h2>Location</h2>
                                <input type='text' required 
                                    placeholder='eg. Nairobi'
                                />
                            </li>
                            <li>
                                <h2>Category</h2>
                                <input type='text' required 
                                    placeholder='eg. Software'
                                />
                            </li>
                            <li>
                                <h2>Description</h2>
                                <textarea/>
                            </li>
                        </ul>
                        <input type='submit' 
                            value='Post'
                        />
                    </form>
                </div>
            </>
        )
    }
}

export default PostAJob;