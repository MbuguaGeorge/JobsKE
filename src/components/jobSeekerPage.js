import React, {Component} from 'react';
import search from './img/magnifying-glass.png';
import {Link, Navigate} from 'react-router-dom';
import ActualJobPost from './actualJobPost';

class JobSeekerPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            jobs: [],
            username:'',
            user: [],
            redirect: false
        }
    };

    componentDidMount(){
        fetch('https://africastalkingdemo.herokuapp.com/joblist', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
        }).then((res) => res.json()
        ).then((json) => {
            this.setState({jobs: json})
        }).catch(error => console.log(error))
        //fetch current user to get their username
        fetch('https://africastalkingdemo.herokuapp.com/cur', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
        }).then(
            (res) => res.json()
        ).then(
            (json) => {
                this.setState({username: json.username})
            }
        ).catch(err => console.log(err))
        //fetch current user's profile to get their profile picture
        fetch('https://africastalkingdemo.herokuapp.com/user',{
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
        }).then((res) => res.json()
        ).then((json) => {
            this.setState({user: json})
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
                    <nav style={{borderBottom: 'None',paddingBottom: '10px'}}>
                        <ul>
                            <li>
                                <Link to="/jobs" style={{textDecoration: 'None'}}><h1>JobsKE</h1></Link>
                            </li>
                            {this.state.user.map(users => 
                                <li key={users.profile}>
                                    <img src={users.profile} alt='profile-pic' width='30'/>
                                    <Link to="/profile" style={{textDecoration: 'None'}}><label style={{cursor: 'pointer',color: 'black'}}>{this.state.username}</label></Link>
                                    <h3 onClick={this.handleLogout} style={{marginLeft: '10px', marginTop: '10px'}}>Logout</h3>
                                </li>
                            )}
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
                    {this.state.jobs.map(job => 
                        <ActualJobPost 
                            key = {job.slug}
                            title = {job.title}
                            desc = {job.description}
                            type = {job.type}
                            category = {job.category}
                            location = {job.location}
                            date = {job.created_on}
                            slug = {job.slug}
                        />
                    )}
                <div className='pagination'>
                    <div className='one'>&lt;</div>
                    <div className='one'>1</div>
                    <div className='one'>2</div>
                    <div className='one'>3</div>
                    <div className='one'>4</div>
                    <div className='one'>5</div>
                    <div className='one'>&gt;</div>
                </div>
                </div>
            </>
        )
    }
}

export default JobSeekerPage;