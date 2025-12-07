import { useSelector } from "react-redux";

import styles from "./Nav.module.scss";
import { Link } from "react-router";

const Nav = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logo}>
        <Link to="/">
          <span>Shop</span>
        </Link>
      </div>
      <div className={styles.cart}>
        <Link to="/cart">
          <span className={styles.cartText}>Cart</span>
          <span className={styles.cartCount}>{items.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
