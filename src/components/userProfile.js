import React, {useRef, useState, useEffect} from 'react';
import avatar from './img/avatar.jpg';
import {Navigate} from 'react-router-dom';

const UserProfile = () => {

    const [profile, setProfile] = useState({
        user : {
            firstname: '',
            lastname: '',
            title: '',
            pic: '',
            description: '',
            category: '',
            phone: '',
            resume: ''
        }
    });

    const HandleUpload = () => {
        const imageRef = useRef();

        const [defaultImage, setDefaultImage] = useState(avatar)
        const [selectedImage, setSelectedImage] = useState();

        const showDialog = () => {
            imageRef.current.click();
        };

        const handleChange = (e) => {    
            const file = e.target.files[0];
            setSelectedImage(file);
        };

        useEffect(() => {
            if(selectedImage){
                const objectURL = URL.createObjectURL(selectedImage);
                setDefaultImage(objectURL);
                return () => URL.revokeObjectURL(objectURL);
            }
        }, [selectedImage]);

        return {
            imageRef,
            defaultImage,
            showDialog,
            handleChange,
        };
    };

    const {
        defaultImage,
        handleChange,
        imageRef,
        showDialog,
    } = HandleUpload();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(profile.user)
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
                <form onSubmit={handleSubmit}>
                    <div className='prof_dets'>
                        <label>Full Name</label>
                        <input 
                            type='text' required
                            placeholder='First Name'
                            name='firstname'
                            value={setProfile.user}
                            onChange={e => setProfile({firstname: e.target.value})}
                        />
                        <input 
                            type='text' required
                            placeholder='Last Name'
                            name='lastname'
                            value={setProfile.lastname}
                            onChange={e => setProfile({lastname: e.target.value})}
                        />
                    </div>
                    <div className='title'>
                        <label>Title</label>
                        <input 
                            type='text' required
                            placeholder='eg. Software developer'
                            name='title'
                            value={setProfile.title}
                            onChange={e => setProfile({title: e.target.value})}
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
                                onChange={handleChange}
                            />
                        </span>
                        
                    </div>
                    <div className='phone_no'>
                        <label>Contact Number</label>
                        <input 
                            type='number' required
                            placeholder='Phone No.'
                            name='phone'
                            value={setProfile.phone}
                            onChange={e => setProfile({phone: e.target.value})}
                        />
                    </div>
                    <div className='desc'>
                        <label>Description</label>
                        <textarea 
                            name='description'
                            value={setProfile.description}
                            onChange={e => setProfile({description: e.target.value})}
                        />
                    </div>
                    <div className='title'>
                        <label>Category</label>
                        <input 
                            type='text' required
                            placeholder='eg. Software'
                            name='category'
                            value={setProfile.category}
                            onChange={e => setProfile({category: e.target.value})}
                        />
                    </div>
                    <div className='resume'>
                        <label>CV/Resume</label>
                        <input 
                            type='file' required
                            name='resume'
                            value={setProfile.resume}
                            onChange={e => setProfile({resume: e.target.value})}
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