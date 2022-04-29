import React, {Component} from 'react';

class UserProfile extends Component{
    render() {
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
                        <h2>Personal Info</h2>
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
                        <span>P</span>
                    </div>
                    <div className='phone_no'></div>
                </div>
            </>
        )
    }
}

export default UserProfile;