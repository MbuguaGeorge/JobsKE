import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import mag from './img/magistrate.png';
import doc from './img/stethoscope.png';
import cafe from './img/restaurant.png';
import design from './img/design-thinking.png';
import software from './img/coding.png';
import acc from './img/excel.png';
import work from './img/work2.jpg';
import team from './img/team.png';
import scout from './img/scout.png';
import hire from './img/hire.png';

class Home extends Component{
    render() {
        return (
            <>
                <div className='hero'>
                    <nav>
                        <h1>JobsKE</h1>
                    </nav>
                    <div className='details'>
                        <h3>EXPLORE THOUSANDS OF JOBS</h3>
                        <h4>FINDING A JOB HAS NEVER BEEN THIS EASY.</h4>
                    </div>
                        <div className='categories'>
                        <div className='cat1'>
                            <h5>Website & Software</h5>
                            <img src={software} alt='logo' width='30'/>
                            <p>150 Open positions</p>
                        </div>
                        <div className='cat1'>
                            <h5>Education & Training</h5>
                            <img src={mag} alt='logo' width='30'/>
                            <p>200 Open positions</p>
                        </div>
                        <div className='cat1'>
                            <h5>Graphics & UI/UX Design</h5>
                            <img src={design} alt='logo' width='30'/>
                            <p>100 Open positions</p>
                        </div>
                        <div className='cat1'>
                            <h5>Accounting & Finance</h5>
                            <img src={acc} alt='logo' width='30'/>
                            <p>50 Open positions</p>
                        </div>
                        <div className='cat1'>
                            <h5>Restaurant & Food</h5>
                            <img src={cafe} alt='logo' width='30'/>
                            <p>300 Open positions</p>
                        </div>
                        <div className='cat1'>
                            <h5>Health & Hospital</h5>
                            <img src={doc} alt='logo' width='30'/>
                            <p>20 Open positions</p>
                        </div>
                    </div>
                </div>
                <div className='explore'>
                    <h1>Apply to open jobs</h1>
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
                    <Link to="/jobs">
                        <input 
                            type='submit'
                            value='Load More'
                        />
                    </Link>
                </div>
                <section>
                    <div className='work'>
                        <h2>HUNDREDS OF CANDIDATES</h2>
                        <h3>Find the one right for your organization.</h3>
                        <p>We have developed the most significant system that can help you
                            find the right candidate for your company. We provide you the means 
                            to scan a candidate before you even message them for a chat about a job position. 
                        </p>
                        <button>Post Job</button>
                    </div>
                    <div className='work2'>
                        <img src={work} alt='work' width='650'/>
                    </div>
                </section>
                <div className='footer'>
                    <div className='footer1'>
                        <img src={team} alt='' width='60'/>
                        <h2>Post Your Jobs</h2>
                        <p>As an organization, you get to post jobs for clients to
                            apply for those positions.
                        </p>
                    </div>
                    <div className='footer1'>
                        <img src={scout} alt='' width='60'/>
                        <h2>Find Jobs</h2>
                        <p>As an organization, you get to post jobs for clients to
                            apply for those positions.
                        </p>
                    </div>
                    <div className='footer1'>
                        <img src={hire} alt='' width='60'/>
                        <h2>Scout & Hire</h2>
                        <p>As an organization, you get to post jobs for clients to
                            apply for those positions.
                        </p>
                    </div>
                </div>
                <div className='copyright'>
                    <h5>Copyright © 2022 George Mbugua. All Rights Reserved.</h5>
                </div>
            </>
        )
    }
}

export default Home;