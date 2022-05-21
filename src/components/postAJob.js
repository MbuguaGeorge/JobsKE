import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PostAJob extends Component{
    constructor(props){
        super(props)
        this.state = {
            fullTime: false,
            partTime: false,
            freelancer: false,
            intern: false,
            details: {
                title: '',
                type: '',
                category: '',
                location: '',
                description: ''
            }
        }
    };

    submit = (e) => {
        e.preventDefault()
        console.log(this.state.details)
    };

    handleChange = (e) => {
        let dets = this.state.details
        dets[e.target.name] = e.target.value
        this.setState({details: dets})
    };

    handleChange1 = () => {
        this.setState({intern: false})
        this.setState({partTime: false})
        this.setState({freelancer: false})
        this.setState({fullTime: !this.state.fullTime})
        this.setState(prevState => ({
            details: {
                ...prevState.details,
                type: 'Full Time'
            }
        }));
    };

    handleChange2 = () => {
        this.setState({fullTime: false})
        this.setState({intern: false})
        this.setState({freelancer: false})
        this.setState({partTime: !this.state.partTime})
        this.setState(prevState => ({
            details: {
                ...prevState.details,
                type: 'Part Time'
            }
        }));
    };

    handleChange3 = () => {
        this.setState({fullTime: false})
        this.setState({partTime: false})
        this.setState({intern: false})
        this.setState({freelancer: !this.state.freelancer})
        this.setState(prevState => ({
            details: {
                ...prevState.details,
                type: 'Freelancer'
            }
        }));
    };

    handleChange4 = () => {
        this.setState({fullTime: false})
        this.setState({partTime: false})
        this.setState({freelancer: false})
        this.setState({intern: !this.state.intern})
        this.setState(prevState => ({
            details: {
                ...prevState.details,
                type: 'Internship'
            }
        }));
    };

    render(){
        return(
            <>
                <div className='status-nav'>
                    <Link to="/" style={{textDecoration: 'none'}}><h1>JobsKE</h1></Link>
                </div>
                <div className='post'>
                    <h1>Post a job</h1>
                    <form onSubmit={this.submit} >
                        <ul>
                            <li>
                                <label>Job Title</label>
                                <input type='text' required 
                                    placeholder='eg. Professional UI Designer '
                                    name='title'
                                    value={this.state.details.title}
                                    onChange={this.handleChange}
                                />
                            </li>
                            <li>
                                <h2>Job Type</h2>
                                <span><input type='radio' required 
                                    checked={this.state.fullTime}
                                    onChange={this.handleChange1}
                                />Full Time</span>
                                <span><input type='radio' required 
                                    checked={this.state.partTime}
                                    onChange={this.handleChange2}
                                />Part Time</span>
                                <span><input type='radio' required 
                                    checked={this.state.freelancer}
                                    onChange={this.handleChange3}
                                />Freelance</span>
                                <span><input type='radio' required 
                                    checked={this.state.intern}
                                    onChange={this.handleChange4}
                                />Internship</span>
                            </li>
                            <li>
                                <h2>Location</h2>
                                <input type='text' required 
                                    placeholder='eg. Nairobi'
                                    name='location'
                                    value={this.state.details.location}
                                    onChange={this.handleChange}
                                />
                            </li>
                            <li>
                                <h2>Category</h2>
                                <input type='text' required 
                                    placeholder='eg. Software'
                                    name='category'
                                    value={this.state.details.category}
                                    onChange={this.handleChange}
                                />
                            </li>
                            <li>
                                <h2>Description</h2>
                                <textarea required
                                    name='description'
                                    value={this.state.details.description}
                                    onChange={this.handleChange}
                                />
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