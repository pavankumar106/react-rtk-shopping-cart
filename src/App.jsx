import { lazy, Suspense } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router";

import Home from "./components/Home/Home";
import Loader from "./components/Loader/Loader";
import Nav from "./components/Nav/Nav";

const Cart = lazy(() => import("./components/Cart/Cart"));

import "./App.scss";

function App() {
  return (
    <>
      <HashRouter>
        <Nav />
        {/* <Loader /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <Suspense fallback={<Loader />}>
                <Cart />
              </Suspense>
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
