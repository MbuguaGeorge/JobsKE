import React, {Component} from 'react';
import {Link, Navigate} from 'react-router-dom';
import JobsPosted from './jobsPosted';

class ClientPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            jobs: [],
            redirect: false
        }
    }

    componentDidMount(){
        fetch('https://africastalkingdemo.herokuapp.com/jobs',{
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
        }).then((res)=> res.json()
        ).then((json) => {
            this.setState({jobs: json})
        }).catch(error => console.log(error))
    };

    handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('status')

        this.setState({redirect: true})
    }
    
    render(){
        const {redirect} = this.state;
        if(redirect){
            return <Navigate replace to="/"/>
        }
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
                                <h3 onClick={this.handleLogout}>Logout</h3>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='client-jobs'>
                    <h1>Here are your job posts</h1>
                    {this.state.jobs.map(job => 
                        <JobsPosted 
                            key = {job.pk}
                            title = {job.title}
                            desc = {job.description}
                            slug = {job.slug}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default ClientPage;