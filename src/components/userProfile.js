import React, {useRef, useState, useEffect} from 'react';
import avatar from './img/avatar.jpg';

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

    const styles = {
        fontSize: 14,
        padding: 10,
        borderRadius: 3,
        outline: 0,
    }

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
                <form>
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
                        />
                    </div>
                    <div className='desc'>
                        <label>Description</label>
                        <textarea />
                    </div>
                    <div className='category'>
                        <label>Category:</label>
                        <select style={styles}>
                            <option value='Website & Software'>Website & Software</option>
                            <option value='Accounting & Finance'>Accounting & Finance</option>
                            <option value='Health & Hospital'>Health & Hospital</option>
                            <option value='Education & Training'>Education & Training</option>
                            <option value='Graphics & UI/UX Design'>Graphics & UI/UX Design</option>
                        </select>
                    </div>
                    <div className='resume'>
                        <label>CV/Resume</label>
                        <input 
                            type='file' required
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