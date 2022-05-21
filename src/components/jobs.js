import React, {Component} from 'react';
import ClientPage from './clientPage';
import JobSeekerPage from './jobSeekerPage';
import Unregistered from './unregistered';

class Jobs extends Component{
    render(){
        let display;
        let token = localStorage.getItem('token')

        if(token){
            if(localStorage.getItem('status') === 'Client'){
                display = <ClientPage />

            }else if(localStorage.getItem('status') === 'Worker'){
                display = <JobSeekerPage />
                
            }else{
                display = <Unregistered />
            }

        }else{
            display = <Unregistered />
        }

        return(
            <>
                {display}
            </>
        )
    }
}

export default Jobs;