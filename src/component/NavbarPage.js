import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartItems from "./CartItems";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "@mui/material";
import { NavLink } from "react-bootstrap";

const menuItems = [
  {
    title: "Products",
    icon: <KeyboardArrowDownIcon />,
    upIcon: <KeyboardArrowUpIcon />,
    products: [
      {
        img: "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fub258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        name: "Canon",
        description: "Canon EOS Rebel T3i DSLR Camera with 18-55mm Lens",
      },
      {
        img: "https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmlrb24lMjBjYW1lcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        name: "Nikon",
        description: "Nikon D3100 DSLR Camera with 18-55mm Lens",
      },
      {
        img: "https://images.unsplash.com/photo-1617468264204-92588bd6485a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29ueXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        name: "Sony",
        description: "Sony EOS Rebel T3i DSLR Camera with 18-55mm Lens",
      },
    ],
  },
  {
    title: "Learn",
    icon: <KeyboardArrowDownIcon />,
    upIcon: <KeyboardArrowUpIcon />,
    products: [
      {
        img: "https://media.istockphoto.com/photos/be-genuine-be-remarkable-be-worth-connecting-with-picture-id1312133528?k=20&m=1312133528&s=612x612&w=0&h=8_8JQw8pQim8AYuhrQ3Q6cdL3ROnhjyJ8jpPw_YBXgo=",
        name: "How to Choose",
        description: "Essential for choosing the right product",
      },
      {
        img: "https://media.istockphoto.com/photos/wooden-block-with-message-about-us-picture-id1282357363?k=20&m=1282357363&s=612x612&w=0&h=B-GZxdQ7G7JszchlfvyqEej6ZIIiUdad2mACFNSurQs=",
        name: "About us",
        description: "learn about us , our story and our values",
      },
      {
        img: "https://media.istockphoto.com/photos/open-book-and-steaming-cup-of-coffee-on-wooden-table-picture-id1334372779?b=1&k=20&m=1334372779&s=170667a&w=0&h=lfTulHKBslG9K9UFwiV6IaM9B5eRM7wIGgWYr-BNb9A=",
        name: "Last.paper",
        description: "The last paper you will ever need",
      },
    ],
  },
  {
    title: "Shop",
    icon: <KeyboardArrowDownIcon />,
    upIcon: <KeyboardArrowUpIcon />,
    products: [
      {
        img: "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fub258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        name: "Canon",
        description: "Canon EOS Rebel T3i DSLR Camera with 18-55mm Lens",
      },
      {
        img: "https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmlrb24lMjBjYW1lcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        name: "Nikon",
        description: "Nikon D3100 DSLR Camera with 18-55mm Lens",
      },
      {
        img: "https://images.unsplash.com/photo-1617468264204-92588bd6485a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29ueXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        name: "Sony",
        description: "Sony EOS Rebel T3i DSLR Camera with 18-55mm Lens",
      },
    ],
  },
];

const NavbarPage = ({ cart, setCart, handleChange }) => {
  console.log(cart);
  const [total, setTotal] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [openCart, setOpenCart] = useState(false);
  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };
  const handleRemove = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
    handlePrice();
  };

  const handlePrice = () => {
    let newTotal = 0;
    cart.map((item) => {
      newTotal += item.price * item.amount;
      return newTotal;
    });
    setTotal(Math.round(newTotal));
  };
  const notification = () => {
    alert(
      `thanks for shopping with us , total : $${total} , your payment was successful`
    );
    setCart([]);
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#home">EDERSEN</Navbar.Brand>
          <Nav.Link>
            <Badge badgeContent={cart.length} color="primary">
              <ShoppingCartIcon
                onClick={() => setOpenCart(!openCart)}
                className="ShoppingCartIcon"
              />
            </Badge>
          </Nav.Link>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Product</Nav.Link>
              <Nav.Link href="#link">Learn</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link eventKey={2} href="/">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="light" expand="lg">
        <Container>
          {/* <div className="navbar-container ">
            <div className="menu hide">
              <Navbar.Brand
                style={{
                  cursor: "pointer",
                }}
                onClick={handleClick}
              >
                {isOpen ? "Close" : "Menu"}
              </Navbar.Brand>
            </div>

            <Navbar.Brand>EDERSEN</Navbar.Brand>
            <div className="cart" onClick={handleOpenCart}>
              <Badge badgeContent={cart.length} color="primary">
                <ShoppingCartIcon className="ShoppingCartIcon" />
              </Badge>
            </div>
          </div>
          {isOpen && (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <div className="item">
                  {menuItems.map(({ title, icon, upIcon, products }, index) => {
                    return (
                      <>
                        <div className="submenu">
                          <div
                            key={title}
                            className="title"
                            onClick={() => toggle(index)}
                          >
                            {title}
                          </div>
                          {selected === index ? (
                            <div onClick={() => toggle(index)}> {upIcon}</div>
                          ) : (
                            <div onClick={() => toggle(index)}>{icon}</div>
                          )}
                        </div>
                        {selected === index && (
                          <div className="submenu-menu">
                            {products.map((product) => (
                              <div className="descrip-container">
                                <img src={product.img} alt="" width={100} />
                                <div className="descrip">
                                  <h4>{product.name}</h4>
                                  <NavDropdown.Item>
                                    {product.description}
                                  </NavDropdown.Item>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    );
                  })}
                </div>
              </Nav>
            </Navbar.Collapse>
            )} */}
          {openCart && (
            <Container className="cart-container">
              <Container className="cart-content">
                {cart.length > 0 ? (
                  <div className="cart-header">
                    <Col className="cart-title">Product Added </Col>
                  </div>
                ) : (
                  <div className="cart-header">
                    <Col className="cart-title">No product add in</Col>
                  </div>
                )}
                <div className="cart-product">
                  {cart.map((product) => (
                    <CartItems
                      handleChange={handleChange}
                      handleRemove={handleRemove}
                      cart={cart}
                      setCart={setCart}
                      product={product}
                    />
                  ))}
                </div>
              </Container>
              <div className="total-container">
                <Col>Total : ${total}</Col>
                <Button variant="outlined" onClick={notification}>
                  Buy
                </Button>
              </div>
            </Container>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPage;
