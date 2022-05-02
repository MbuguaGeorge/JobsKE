import React, {useRef, useState, useEffect} from 'react';
import avatar from './img/avatar.jpg';
import cam from './img/camera.png';
import {Link} from 'react-router-dom';

const UserProfile = () => {

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

    console.log(defaultImage);

    return(
        <>
            <div className='prof_creation'>
                <ul>
                    <li>
                        <span>1</span>
                        <h3>Personal Info</h3>
                    </li>
                        <div className='gt'>&gt;</div>
                    <li>
                        <span>2</span>
                        <h3>Professional Info</h3>
                    </li>
                        <div className='gt'>&gt;</div>
                    <li>
                        <span>3</span>
                        <h3>Linked Accounts</h3>
                    </li>
                </ul>
            </div>
            <div className='profile'>
                <div className='prof_details'>
                    <h2>Profile Info</h2>
                    <p>Tell us about yourself. This information will be made public to potential
                        employers.
                    </p>
                    <h5>* Mandatory fields</h5>
                </div>
                <div className='prof_dets'>
                    <label>Full Name</label>
                    <input 
                        type='text' required
                        placeholder='First Name'
                    />
                    <input 
                        type='text' required
                        placeholder='Last Name'
                    />
                </div>
                <div className='profile_pic'>
                    <label>Profile Picture</label>
                    <span>
                        <img className='prof_img' src={defaultImage} alt='profile' />
                        <input 
                            ref={imageRef}
                            type='file'
                            style={{display: 'none'}}
                            accept='image/*'
                            onChange={handleChange}
                        />
                    </span>
                    <img className='cam_img' src={cam} alt='camera' width='30' height='30' onClick={showDialog}/>
                </div>
                <div className='phone_no'>
                    <label>Contact Number</label>
                    <input 
                        type='number' required
                        placeholder='Phone No.'
                    />
                </div>
                <div className='desc'>
                    <label>Description</label>
                    <textarea />
                </div>
            </div>
            <div className='submit_personal'>
                <Link to="/" className='btn btn-primary'>Save</Link>
            </div>
        </>
    )
}

export default UserProfile;