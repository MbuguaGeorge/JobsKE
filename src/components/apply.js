import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import avatar from './img/avatar.jpg';

class Apply extends Component{
    constructor(props){
        super(props)
        this.state = {
            job: {
                title: '',
                description: ''
            },
            slug: ''
        }
    };

    componentDidMount(){
        const url = window.location.pathname
        const field = url.split('/')
        const slug = field[2]
        this.setState({slug: slug})

        fetch(`http://127.0.0.1:8000/joblist/${slug}/`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then(
            (res) => res.json()
        ).then(
            (json) => this.setState({job: json})
        ).catch(error => console.log(error))
    };

    render (){
        return (
            <>
                <div className='jobspage'>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/jobs" style={{textDecoration: 'None'}}><h1>JobsKE</h1></Link>
                            </li>
                            <li>
                                <img src={avatar} alt='profile-pic' width='30'/>
                                <Link to="/profile"><label style={{textDecoration: 'None',cursor: 'pointer',color: 'black'}}>georgeey</label></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="apply-job">
                    <h2>{this.state.job.title}</h2>
                    <p>{this.state.job.description}</p>
                    <button>Apply</button>
                </div>
            </>
        )
    }
}

export default Apply;