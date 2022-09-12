import Dropdown from "./Dropdown";

const MenuItem = ({ items }) => {
  return (
    <div className="menu-item">
      {items.submenu ? (
        <>
          <Dropdown
            className="dropdown"
            products={items.submenu.products}
            submenus={items.submenu}
          />
        </>
      ) : (
        <a href="/#">{items.title}</a>
      )}
    </div>
  );
};

export default MenuItem;
