import React, {Component} from 'react';
import {Link, Navigate} from 'react-router-dom';

class Apply extends Component{
    constructor(props){
        super(props)
        this.state = {
            job: {
                title: '',
                description: '',
                pk: ''
            },
            slug: '',
            username: '',
            user: [],
            proposal: {
                user: '',
                proposal: '',
                jobpost: ''
            },
            redirect: false
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
        //fetch profile picture
        fetch('http://127.0.0.1:8000/user',{
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
        }).then((res) => res.json()
        ).then((json) => {
            this.setState({user: json})
        }).catch(error => console.log(error))

        //fetch current user to get their username
        fetch('http://127.0.0.1:8000/cur', {
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
    };

    submit = (e) => {
        e.preventDefault()
        const slug = this.state.slug;
        fetch(`http://127.0.0.1:8000/proposal/${slug}/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.proposal)
        }).then(
            (data) => console.log(data)
        ).then(
            () => this.setState({redirect: true})
        ).catch(err => console.log(err))
        alert('Your proposal has been sent')
    };

    handleChange = (e) => {
        const details = this.state.proposal;
        details[e.target.name] = e.target.value
        this.setState({proposal: details})

        let value = this.state.user.map(val => val.pk)
        this.setState(prevState => ({
            proposal: {
                ...prevState.proposal,
                user: value[0]
            }
        }));

        this.setState(prevState => ({
            proposal: {
                ...prevState.proposal,
                jobpost: this.state.job.pk
            }
        }));
    };

    render (){
        const {redirect} = this.state;
        if(redirect){
            return <Navigate replace to="/jobs" />
        }
        return (
            <>
                <div className='jobspage'>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/jobs" style={{textDecoration: 'None'}}><h1>JobsKE</h1></Link>
                            </li>
                            {this.state.user.map(users => 
                                <li key={users.profile}>
                                    <img src={users.profile} alt='profile-pic' width='30'/>
                                    <Link to="/profile" style={{textDecoration: 'None'}}><label style={{cursor: 'pointer',color: 'black'}}>{this.state.username}</label></Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
                <div className="apply-job">
                    <h2>{this.state.job.title}</h2>
                    <p>{this.state.job.description}</p>
                    <h3>Send a proposal</h3>
                    <form onSubmit={this.submit}>
                        <textarea required
                            name='proposal'
                            value={this.state.proposal.proposal}
                            onChange={this.handleChange}
                        />
                        <input 
                            type='submit'
                            value='Apply'
                        />
                    </form>
                </div>
            </>
        )
    }
}

export default Apply;