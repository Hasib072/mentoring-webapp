
import React, { useState } from 'react';

import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import MainBody from './components/MainBody';
import HomeTab from './components/HomeTab';
import MentorTab from './components/MentorTab';
import MenteeTab from './components/MenteeTab';
import ReportsTab from './components/Reports';
import LoginPage from './components/LoginPage';



let M_Name = "Sample Name";

function App() {
  const [activeTab, setactiveTab] = useState(1);

  const handleTabChange = (value) => {
    setactiveTab(value);
  };

  let mainBodyToRender;

  if (activeTab === 1) {
    mainBodyToRender = <HomeTab />;
  } else if (activeTab === 2) {
    mainBodyToRender = <MentorTab />;
  } else if (activeTab === 3) {
    mainBodyToRender = <MenteeTab />;
  } else if (activeTab === 4) {
    mainBodyToRender = <ReportsTab />;
  } else {
    mainBodyToRender = <MainBody />;
  }

  const [isLoggedin, setisLoggedin] = useState(0);

  const handleLoggin = (value) => {
    setisLoggedin(value);
  };

  if (isLoggedin === 0) {
    return (
      <LoginPage onLoggin={handleLoggin}/>
    );
  }else {

    return (
      <div className="App">
        <TopBar mentorName={M_Name} onLoggin={handleLoggin}/>
        <div className='row'>
          <Sidebar onTabChange={handleTabChange} />
          
          {mainBodyToRender}
          
  
        </div>
      </div>
    );

  }

  
}

export default App;
