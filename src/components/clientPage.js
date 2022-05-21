import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ClientPage extends Component{
    render(){
        return (
            <>
                <div className='jobspage'>
                    <nav>
                        <ul>
                            <li>
                                <h1>JobsKE</h1>
                            </li>
                            <li>
                                <Link to="/post"><button>Post a Job</button></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    jobs posted
                </div>
            </>
        )
    }
}

export default ClientPage;