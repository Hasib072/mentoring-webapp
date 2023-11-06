import React, { useState } from 'react';
import ProfileDropDown from './ProfileDropDown';

function TopBar(props){
    const [isToggled, setToggled] = useState(false);  
  
  const handleSubMenuToggle = () => {
    setToggled(!isToggled);
    console.log("Sub Profile Menu Opened!");
  };


    return(
        <div className="container-fluid">
          <div className="row">
          <nav className="col topbar">
            <img className="toplogo" src="assets/Logo.jpg"></img>
            <div className="user-profile">
              <img className="user-img" src="assets/profile.png" onClick={handleSubMenuToggle} />
              <a href="#" onClick={handleSubMenuToggle}>&ensp;{props.mentorName} <i  className="fa fa-chevron-down"></i></a>
            </div>
          </nav>
          </div>
          {isToggled && <ProfileDropDown onLoggin={props.onLoggin}/>}
      </div>
    );
}

export default TopBar;