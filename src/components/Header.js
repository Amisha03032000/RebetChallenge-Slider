import React from "react";
import "../styles/Header.css"; 

const Header = () => {
  return (
    <header className="header">
            <div className="profile">
                <div className="profile-image">
                    <img src="lat.png"/>
                </div>
                <div className="profile-name-lat">Lat</div>
            </div>


            <div className="vs">VS</div>


            <div className="profile">
            <div className="profile-status">

                <div className="profile-name">You</div>
                <div className="profile-waiting">Waiting...</div>
            </div>
                <div className="profile-image profile-placeholder">
                    <img src="glass.png" alt="Ava" />
                </div>
                
            </div>
        </header>
  );
}

export default Header;
