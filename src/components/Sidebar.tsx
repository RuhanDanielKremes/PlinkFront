// src/components/Sidebar.tsx
import { IonIcon } from '@ionic/react';
import { homeOutline, searchOutline, peopleOutline, newspaperOutline, settingsOutline } from 'ionicons/icons';
import './Sidebar.css';
import plink from "../assets/images/Plink.png";
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <Link to="/home" className="no-style-link"><img src={plink} alt="Plink Logo"/></Link>
        
      </div>
      <div className="sidebar-icon">
        <div className="icon-wrapper">
          <Link to="/home" className="no-style-link"><IonIcon className="icon" icon={homeOutline} /></Link></div>
        <div className="icon-wrapper">
          <Link to="/recipes" className="no-style-link"><IonIcon className="icon" icon={searchOutline} /></Link></div>
        <div className="icon-wrapper">
          <Link to="/recipes/register" className="no-style-link"><IonIcon className="icon" icon={newspaperOutline} /></Link></div>

        <div className="icon-wrapper config">
          <Link to="/setting" className="no-style-link"><IonIcon className="icon" icon={settingsOutline} /></Link></div>

      </div>
    
    </div>
  );
};

export default Sidebar;
