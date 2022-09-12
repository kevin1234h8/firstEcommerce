import NavbarPage from "./component/NavbarPage";
import Main from "./component/Main";
import ProductPage from "./component/ProductPage";
import Shop from "./component/Shop";
import Delivery from "./component/Delivery";
import Learn from "./component/Learn";
import { useState, useEffect } from "react";
import Loading from "./component/Loading";
import Featured from "./component/Featured";
import Help from "./component/Help";
import Transaction from "./component/Transaction";
import Footer from "./component/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const handleCart = (product) => {
    if (cart.indexOf(product) === -1) {
      setCart([...cart, product]);
    }
  };
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const newAdd = cart;
    newAdd[ind].amount += d;

    if (newAdd[ind].amount === 0) newAdd[ind].amount = 1;
    setCart([...newAdd]);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
    <>
      <div className="App">
        {loading === true ? (
          <Loading />
        ) : (
          <>
            <Container>
              <NavbarPage
                handleChange={handleChange}
                setCart={setCart}
                cart={cart}
              />
              <Main />
              <ProductPage handleCart={handleCart} />

              <Shop />
              <Delivery />
              <Learn />
              <Featured />
              <Help />
              <Transaction />
              <Footer />
            </Container>
          </>
        )}
      </div>
    </>
  );
}

export default App;
