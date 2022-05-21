import React, {Component} from 'react';
import search from './img/magnifying-glass.png';
import {Link} from 'react-router-dom';

class Unregistered extends Component{
    render (){
        return(
            <>
                <div className='jobspage'>
                    <nav>
                        <ul>
                            <li>
                                <h1>JobsKE</h1>
                            </li>
                            <li>
                                <Link to="/status"><button>Sign Up</button></Link>
                            </li> 
                        </ul>
                    </nav>
                </div>
                <div className='searchbar'>
                    <h2>Browse Jobs</h2>
                    <p>Find jobs, employment & career oportunities</p>
                    <div className='search-input'>
                        <input 
                            type="text" required
                            placeholder='Keyword'
                        />
                        <input 
                            type="text" required
                            placeholder='Location'
                        />
                        <div className='search'>
                            <img src={search} alt='search' width='20'/>
                        </div>
                    </div>
                </div>
                <div className='jobs'>
                    <div className='jobs-positions'>
                        <h3>Operations Executive Manager</h3>
                        <p>We are currently looking for an Operations Manager to handle our day to day, and take the team through
                            the development process of the company's software.
                        </p>
                        <div className='job-tags'>
                            <ul>
                                <li><button>Full Time</button></li>
                                <li><h5>Finance</h5></li>
                                <li><h5>Nairobi</h5></li>
                                <li><h5>May 12, 2020</h5></li>
                            </ul>
                        </div>
                    </div>
                    <div className='jobs-positions'>
                        <h3>Operations Executive Manager</h3>
                        <p>We are currently looking for an Operations Manager to handle our day to day, and take the team through
                            the development process of the company's software.
                        </p>
                        <div className='job-tags'>
                            <ul>
                                <li><button>Full Time</button></li>
                                <li><h5>Finance</h5></li>
                                <li><h5>Nairobi</h5></li>
                                <li><h5>May 12, 2020</h5></li>
                            </ul>
                        </div>
                    </div>
                    <div className='jobs-positions'>
                        <h3>Operations Executive Manager</h3>
                        <p>We are currently looking for an Operations Manager to handle our day to day, and take the team through
                            the development process of the company's software.
                        </p>
                        <div className='job-tags'>
                            <ul>
                                <li><button>Full Time</button></li>
                                <li><h5>Finance</h5></li>
                                <li><h5>Nairobi</h5></li>
                                <li><h5>May 12, 2020</h5></li>
                            </ul>
                        </div>
                    </div>
                    <div className='jobs-positions'>
                        <h3>Operations Executive Manager</h3>
                        <p>We are currently looking for an Operations Manager to handle our day to day, and take the team through
                            the development process of the company's software.
                        </p>
                        <div className='job-tags'>
                            <ul>
                                <li><button>Full Time</button></li>
                                <li><h5>Finance</h5></li>
                                <li><h5>Nairobi</h5></li>
                                <li><h5>May 12, 2020</h5></li>
                            </ul>
                        </div>
                    </div>
                    <div className='jobs-positions'>
                        <h3>Operations Executive Manager</h3>
                        <p>We are currently looking for an Operations Manager to handle our day to day, and take the team through
                            the development process of the company's software.
                        </p>
                        <div className='job-tags'>
                            <ul>
                                <li><button>Full Time</button></li>
                                <li><h5>Finance</h5></li>
                                <li><h5>Nairobi</h5></li>
                                <li><h5>May 12, 2020</h5></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='pagination'>
                    <div className='one'>&lt;</div>
                    <div className='one'>1</div>
                    <div className='one'>2</div>
                    <div className='one'>3</div>
                    <div className='one'>4</div>
                    <div className='one'>5</div>
                    <div className='one'>&gt;</div>
                </div>
            </>
        )
    }
}

export default Unregistered;