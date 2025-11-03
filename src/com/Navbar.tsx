import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  let menus = [
    { name: "홈", path: "/home" },
    { name: "날씨", path: "/weather" },
    { name: "상품소개", path: "/products" },
    { name: "장바구니", path: "/cart" },
    { name: "인증현황", path: "/contact" },
  ];
  return (
    <header className={styles.navbar}>
      <div className={styles.header_inner}>
      <div className={styles.logo}>로고</div>
      <nav>
        <ul className={styles.menuList}>
          {menus.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                {item.name}{" "}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Navbar;
