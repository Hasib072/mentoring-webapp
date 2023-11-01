import React, { useState, useEffect } from 'react';
import SideTabs from './SideTabs';


function Sidebar({onTabChange}){
    const [isExpanded, setExpanded] = useState(false);  
  
  const handleSidebarExpand = () => {
    setExpanded(!isExpanded);
    console.log("Expanding");
  };


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setExpanded(true);
      } else {
        setExpanded(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for screen width
    handleResize();

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
      
  const [isHighlited, setHighlited] = useState(false);
    
    const handleSideTabHighlite = () => {
        setHighlited(!isHighlited);
        console.log("Tab Active");
      };

    return(
        <div className="row">
      {/* <!-- Sidebar --> */}
      <div id="wrapper" className={isExpanded ? 'row toggled' : 'row'}>
        {/* <!-- Sidebar --> */}
        <div id="sidebar-wrapper" className="col">
            <ul className="sidebar-nav" >
                <div className="pg00">
                    
                </div>

                <SideTabs onTabChange={onTabChange} />
                
                <li className="sidebar-brand pg05" onClick={handleSidebarExpand} id="menu-toggle" href="#menu-toggle" >                    
                  <a href="#"><i className="material-icons sbicon">menu</i> <span className="navtxt"></span>  </a>
                </li>
            </ul>
        </div>
        </div>
        </div>
    );
}

export default Sidebar;