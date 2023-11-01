
import React, { useState } from 'react';

import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import MainBody from './components/MainBody';
import HomeTab from './components/HomeTab';
import MentorTab from './components/MentorTab';
import MenteeTab from './components/MenteeTab';
import ReportsTab from './components/Reports';



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


  return (
    <div className="App">
      <TopBar mentorName={M_Name}/>
      <div className='row'>
        <Sidebar onTabChange={handleTabChange} />
        
        {mainBodyToRender}
        

      </div>
    </div>
  );
}

export default App;
