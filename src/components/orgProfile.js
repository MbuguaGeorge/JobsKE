import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

const OrgProfile = () => {

    const [profile, setProfile] = useState({
        firstname: '',
        lastname: '',
        description: '',
        orgname: '',
        contact: '',
        location: '',
        user_profile: ''
    });

    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://africastalkingdemo.herokuapp.com/cur', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        }).then(
            (res) => res.json()
        ).then(
            json => {
                setProfile(profile => ({
                    ...profile, user_profile: json.pk
                }))
            }
        ).catch(err => console.log(err))
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault()
        async function fetchData() {
            const data = await fetch('https://africastalkingdemo.herokuapp.com/org', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(profile)
            })

            const res = await data.json()
            setRedirect(!redirect)
            console.log(res)
        }

        fetchData()
    };

    if (redirect){
        return navigate('/jobs', {replace: true})
    };

    return(
        <>
            <div className='status-nav'>
                <h1>JobsKE</h1>
            </div>
            <div className='profile'>
                <div className='prof_details'>
                    <h2>Organization Info</h2>
                    <p>Tell us about your organization. This information will not be made public to others.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='prof_dets'>
                        <label>Full Name</label>
                        <input 
                            type='text' required
                            placeholder='First Name'
                            value={profile.firstname}
                            onChange={e => setProfile(profile => ({
                                ...profile, firstname: e.target.value
                            }))}
                        />
                        <input 
                            type='text' required
                            placeholder='Last Name'
                            value={profile.lastname}
                            onChange={e => setProfile(profile => ({
                                ...profile, lastname: e.target.value
                            }))}
                        />
                    </div>
                    <div className='org'>
                        <label>Org. Name</label>
                        <input 
                            type='text' required
                            placeholder='Org. Name'
                            value={profile.orgname}
                            onChange={e => setProfile(profile => ({
                                ...profile, orgname: e.target.value
                            }))}
                        />
                    </div>
                    <div className='phone_no'>
                        <label>Contact Number</label>
                        <input 
                            type='number' required
                            placeholder='Phone No.'
                            value={profile.contact}
                            onChange={e => setProfile(profile => ({
                                ...profile, contact: e.target.value
                            }))}
                        />
                    </div>
                    <div className='location'>
                        <label>Location</label>
                        <input 
                            type='text' required
                            placeholder='Location'
                            value={profile.location}
                            onChange={e => setProfile(profile => ({
                                ...profile, location: e.target.value
                            }))}
                        />
                    </div>
                    <div className='desc'>
                        <label>Description</label>
                        <textarea 
                            name='description'
                            value={profile.description}
                            onChange={e => setProfile(profile => ({
                                ...profile, description: e.target.value
                            }))}
                        />
                    </div>
                    <div className='submit_personal'>
                        <input 
                            type='submit'
                            value='Save'
                            className='btn btn-primary'
                        />
                    </div>

                </form>
            </div>
        </>
    )
}

export default OrgProfile;