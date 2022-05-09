import React from 'react';

const OrgProfile = () => {

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
                    <div className='org'>
                        <label>Org. Name</label>
                        <input 
                            type='text' required
                            placeholder='Org. Name'
                        />
                    </div>
                    <div className='phone_no'>
                        <label>Contact Number</label>
                        <input 
                            type='number' required
                            placeholder='Phone No.'
                        />
                    </div>
                    <div className='location'>
                        <label>Location</label>
                        <input 
                            type='text' required
                            placeholder='Location'
                        />
                    </div>
                    <div className='desc'>
                        <label>Description</label>
                        <textarea />
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