import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AppliedPost extends Component{
    constructor(props){
        super(props)
        this.state = {
            slug: '',
            post: []
        }
    };

    componentDidMount(){
        const url = window.location.pathname
        const field = url.split('/')
        const slug = field[2]
        this.setState({slug: slug})

        fetch(`https://africastalkingdemo.herokuapp.com/userpost/${slug}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        }).then(
            (res) => res.json()
        ).then(
            (json) => this.setState({post: json})
        ).catch(error => console.log(error))
    };

    render(){
        console.log(this.state.post)
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
                    <h3>The following applied to your job post<span> {this.state.slug}</span></h3>
                    <ul>
                    {this.state.post.map(propose => 
                        <li key = {propose.user.pk}>
                            <Link to={`/user/${propose.user.pk}`}>
                                <h5 style={{textDecoration: 'None', color: 'black'}}>{propose.user.firstname} {propose.user.lastname}</h5>
                            </Link>
                            <p>{propose.proposal}</p>
                        </li>
                    )}
                    </ul>
                </div>
            </>
        )
    }
}

export default AppliedPost;