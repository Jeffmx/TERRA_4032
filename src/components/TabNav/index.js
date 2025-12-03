import { useState } from 'react';
import './tabnav.css';

const TabNav = ({ info }) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="race-tabs">
        <div className="tab-selectors">
          {Object.entries(info).map(([tab], id) => (
            <h2 key={id} className={activeTab === id ? "active" : ''} onClick={() => setActiveTab(id)}>{tab}</h2>
          ))}
        </div>

        <div className="tab-display">
          {Object.entries(info).map(([, desc], id) => (
            <h2 key={id} className={activeTab === id ? "active" : ''}>{desc}</h2>
          ))}
        </div>
      </div>
    </>
  );
}

export default TabNav;