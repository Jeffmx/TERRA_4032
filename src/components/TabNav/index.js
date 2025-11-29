import { useState } from 'react';
import './tabnav.css';

const TabNav = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <div className="race-tabs">
        <div className="tab-selectors">
          <h2 className={activeTab === 1 ? "active" : ''} onClick={() => setActiveTab(1)}>Sobre</h2>
          <h2 className={activeTab === 2 ? "active" : ''} onClick={() => setActiveTab(2)}>Talento</h2>
          <h2 className={activeTab === 3 ? "active" : ''} onClick={() => setActiveTab(3)}>Poder</h2>
        </div>
        <div className="tab-display">
          <h2 className={activeTab === 1 ? "active" : ''} onClick={() => setActiveTab(1)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h2>
          <h2 className={activeTab === 2 ? "active" : ''} onClick={() => setActiveTab(2)}>
            Louco? Eu já fui louco uma vez. Eles me trancaram em um quarto. Um quarto de borracha. Um quarto de borracha com ratos. E ratos me deixam louco. Louco? Eu já fui louco uma vez. Eles me trancaram em um quarto. Um quarto de borracha. Um quarto de borracha com ratos. E ratos me deixam louco. Louco? Eu já fui louco uma vez. Eles me trancaram em um quarto. Um quarto de borracha. Um quarto de borracha com ratos. E ratos me deixam louco. Louco? Eu já fui louco uma vez. Eles me trancaram em um quarto. Um quarto de borracha. Um quarto de borracha com ratos. E ratos me deixam louco. Louco? Eu já fui louco uma vez. Eles me trancaram em um quarto. Um quarto de borracha. Um quarto de borracha com ratos. E ratos me deixam louco.
          </h2>
          <h2 className={activeTab === 3 ? "active" : ''} onClick={() => setActiveTab(3)}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h2>

        </div>
      </div>
    </>
  );
}

export default TabNav;