import { useGlobalContext } from './Context';

import links from './data';

const Submenu = () => {
  const { pageId } = useGlobalContext();

  const currentPage = links.find((item) => item.pageId === pageId);

  return (
    <div className="submenu">
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          display: 'grid',
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
