import links from './data';

const NavLinks = () => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { pageId, page } = link;
        return (
          <button key={pageId} className="nav-link">
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
