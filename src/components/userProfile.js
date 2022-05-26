import React, {useRef, useState, useEffect} from 'react';
import avatar from './img/avatar.jpg';

const UserProfile = () => {
    const [profile, setProfile] = useState({
        user_profile: 1,
        firstname: '',
        lastname: '',
        title: '',
        profile: '',
        description: '',
        category: '',
        contact: '',
        resume: ''
    });

    const resumeRef = useRef();

    const HandleUpload = () => {
        const imageRef = useRef();

        const [defaultImage, setDefaultImage] = useState(avatar)
        const [selectedImage, setSelectedImage] = useState();

        const showDialog = () => {
            imageRef.current.click();
        };

        useEffect(() => {
            if(profile.pic){
                const objectURL = URL.createObjectURL(profile.pic);
                setDefaultImage(objectURL);
                return () => URL.revokeObjectURL(objectURL);
            }
        }, [selectedImage]);

        return {
            imageRef,
            defaultImage,
            showDialog,
        };
    };

    const {
        defaultImage,
        imageRef,
        showDialog,
    } = HandleUpload();


    const handleSubmit = (e) => {
        e.preventDefault()
        const uploadData = new FormData();
        uploadData.append('user_profile', profile.user_profile)
        uploadData.append('firstname', profile.firstname)
        uploadData.append('lastname', profile.lastname)
        uploadData.append('title', profile.title)
        uploadData.append('profile', profile.profile, profile.profile.name)
        uploadData.append('description', profile.description)
        uploadData.append('category', profile.category)
        uploadData.append('contact', profile.contact)
        uploadData.append('resume', profile.resume, profile.resume.name)
        fetch('http://127.0.0.1:8000/profile', {
            method: 'POST',
            body: uploadData
        }).then(
            data => {
                console.log(data)
            }
        ).catch(error => console.log(error))
        console.log(profile)
    };

    return(
        <>
            <div className='status-nav'>
                <h1>JobsKE</h1>
            </div>
            <div className='profile'>
                <div className='prof_details'>
                    <h2>Profile Info</h2>
                    <p>Tell us about yourself. This information will be made public to potential
                        employers.
                    </p>
                </div>
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <div className='prof_dets'>
                        <label>Full Name</label>
                        <input 
                            type='text' required
                            placeholder='First Name'
                            name='firstname'
                            value={profile.firstname}
                            onChange={e => setProfile(profile => ({
                                ...profile, firstname: e.target.value
                            }))}
                        />
                        <input 
                            type='text' required
                            placeholder='Last Name'
                            name='lastname'
                            value={profile.lastname}
                            onChange={e => setProfile(profile => ({
                                ...profile, lastname: e.target.value
                            }))}
                        />
                    </div>
                    <div className='title'>
                        <label>Title</label>
                        <input 
                            type='text' required
                            placeholder='eg. Software developer'
                            name='title'
                            value={profile.title}
                            onChange={e => setProfile(profile => ({
                                ...profile, title: e.target.value
                            }))}
                        />
                    </div>
                    <div className='profile_pic'>
                        <label>Profile Picture</label>
                        <span>
                            <img className='prof_img' src={defaultImage} alt='profile' onClick={showDialog} style={{cursor: 'pointer'}}/>
                            <input 
                                ref={imageRef}
                                type='file'
                                style={{display: 'none'}}
                                accept='image/*'
                                onChange={e => setProfile(profile => ({
                                ...profile, profile: e.target.files[0]
                            }))}
                            />
                        </span>
                        
                    </div>
                    <div className='phone_no'>
                        <label>Contact Number</label>
                        <input 
                            type='number' required
                            placeholder='Phone No.'
                            name='phone'
                            value={profile.contact}
                            onChange={e => setProfile(profile => ({
                                ...profile, contact: e.target.value
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
                    <div className='title'>
                        <label>Category</label>
                        <input 
                            type='text' required
                            placeholder='eg. Software'
                            name='category'
                            value={profile.category}
                            onChange={e => setProfile(profile => ({
                                ...profile, category: e.target.value
                            }))}
                        />
                    </div>
                    <div className='resume'>
                        <label>CV/Resume</label>
                        <input 
                            ref={resumeRef}
                            type='file' required
                            name='resume'
                            //value={profile.resume}
                            onChange={e => setProfile(profile => ({
                                ...profile, resume: e.target.files[0]
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

export default UserProfile;