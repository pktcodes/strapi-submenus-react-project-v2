import { useGlobalContext } from './Context';

import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button type="button" className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>

        {/* Nav Links */}
      </div>
    </nav>
  );
};

export default Navbar;
