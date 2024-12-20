import React from 'react';
import "../styles/NflStatus.css"; 

const NflStatus = () => {
    return (
        <div className="nfl-status-container">
            <div className="nfl-logo-text">
                <img src="lat.png" alt="NFL Logo" className="nfl-logo" />
                NFL
            </div>
            <div className="pending-status">
                PENDING
            </div>
        </div>
    );
};

export default NflStatus;
