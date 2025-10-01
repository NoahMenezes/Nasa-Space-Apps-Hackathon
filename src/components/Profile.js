import React from 'react';
import './Profile.css';

const Profile = () => {
    // Placeholder data - replace with actual user data fetching (e.g., from Firebase Firestore)
    const userData = {
        callsign: 'Star Voyager 42',
        email: 'user@explorer.com',
        joinDate: '2024-05-20',
        rank: 'Cadet Navigator',
        missionsCompleted: 5
    };

    return (
        <div className="auth-container"> {/* Reusing the centering container from Login/Signin */}
            <div className="profile-box">
                <div className="profile-header">
                    <div className="avatar">
                        {/* Placeholder for Profile Picture or Initial */}
                        {userData.callsign.charAt(0)}
                    </div>
                    <h2>Welcome, {userData.callsign}!</h2>
                    <p className="rank">{userData.rank}</p>
                </div>
                
                <div className="profile-details">
                    <div className="detail-item">
                        <strong>Email:</strong> <span>{userData.email}</span>
                    </div>
                    <div className="detail-item">
                        <strong>Joined:</strong> <span>{userData.joinDate}</span>
                    </div>
                    <div className="detail-item">
                        <strong>Missions:</strong> <span>{userData.missionsCompleted}</span>
                    </div>
                </div>

                <button className="logout-button">Log Out</button>
            </div>
        </div>
    );
};

export default Profile;
