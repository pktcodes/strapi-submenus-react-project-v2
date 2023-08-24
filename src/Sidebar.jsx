import { useGlobalContext } from './Context';

import { FaTimes } from 'react-icons/fa';
import links from './data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-container">
        <button
          type="button"
          className="close-sidebar-btn"
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {links.map((link) => {
            const { pageId, page, subLinks } = link;
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {subLinks.map((subLink) => {
                    const { id, icon, label, url } = subLink;
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
