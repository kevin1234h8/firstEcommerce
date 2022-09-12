import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "bootstrap/dist/css/bootstrap.min.css";

const Dropdown = ({ submenus }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const handleClick = () => {
  //   setIsOpen(!isOpen);
  // };

  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  return (
    <>
      <ul className="dropdown">
        {submenus.map((submenu, index) => (
          <>
            <li key={index} className="menu-items">
              <a href="/#" onClick={() => toggle(index)}>
                {submenu.title}
              </a>
              <div>
                {selected === index ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </div>
            </li>
            <div className={selected === index ? "content show" : "content"}>
              {submenu.products.map((product) => (
                <div>{product.name}</div>
              ))}
            </div>
          </>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
