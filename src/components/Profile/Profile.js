import React from 'react';
import './Profile.css';

const Profile = ({profile, times}) => {
    let total = 0;

    for (const times of profile){
        total = total + times.time;
    }
    return (
        <div>
            <div>
                <h2>Practice Details</h2>
                <div className='times'>
                    <h3>practice Time</h3>
                    <p> {total} Hours</p>
                </div><br />
                <div className='times'>
                    <h3>Break Time</h3>
                    <p> {times} Minutes</p>
                </div>
                <br />
                <button className='active-btn'>Activity Completed</button>
                
            </div>
            
        </div>
    );
};

export default Profile;