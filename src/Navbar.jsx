import { useGlobalContext } from './Context';

import { FaBars } from 'react-icons/fa';
import NavLinks from './NavLinks';

const Navbar = () => {
  const { setPageId, openSidebar } = useGlobalContext();

  const handleHideSubmenu = (event) => {
    if (!event.target.classList.contains('nav-link')) {
      setPageId(null);
    }
  };

  return (
    <nav onMouseOver={handleHideSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button type="button" className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
