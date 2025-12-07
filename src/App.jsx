import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./components/Home/Home";
import Loader from "./components/Loader/Loader";
import Nav from "./components/Nav/Nav";

import "./App.scss";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        {/* <Loader /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
