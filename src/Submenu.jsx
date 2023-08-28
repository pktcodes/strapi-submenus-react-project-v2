import { useGlobalContext } from './Context';
import { useRef } from 'react';

import links from './data';

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();

  const currentPage = links.find((item) => item.pageId === pageId);

  const submenuContainer = useRef(null);

  const handleHideSubmenu = (event) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();

    const { clientX, clientY } = event;

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleHideSubmenu}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.subLinks?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.subLinks?.map((subLink) => {
          const { id, icon, label, url } = subLink;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
