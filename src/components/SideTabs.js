import React, { useState } from 'react';

function SideTabs({onTabChange}){
    const [isHighlited, setHighlited] = useState(1);
    
    
    const handleSideTabHighlite = (tabNo) => {
        setHighlited(tabNo);
        onTabChange(tabNo);
      };


    return(

        <div>
            <li className={isHighlited === 1 ? '"pg01" heighlite_tab' : ''}>
                <a href="#" onClick={() => handleSideTabHighlite(1)}><i className="material-icons sbicon">home</i> <span className="navtxt">Home</span>  </a>
            </li>
            <li className={isHighlited === 2 ? '"pg02" heighlite_tab' : ''}>
                <a href="#" onClick={() => handleSideTabHighlite(2)}><i className="material-icons sbicon">person</i> <span className="navtxt">Mentor</span>  </a>
            </li>
            <li className={isHighlited === 3 ? '"pg03" heighlite_tab' : ''}>
                <a href="#" onClick={() => handleSideTabHighlite(3)}><i className="material-icons sbicon">supervisor_account</i> <span className="navtxt">Mentee</span>  </a>
            </li>
            <li className={isHighlited === 4 ? '"pg04" heighlite_tab' : ''}>
                <a href="#" onClick={() => handleSideTabHighlite(4)}><i className="material-icons sbicon">description</i> <span className="navtxt">Reports</span>  </a>
            </li>
        </div>

        
        
        
    );
}
export default SideTabs;