import React from "react";
import css from "./header.module.scss";

/** cách 1: */
import searchSvg from "src/assets/imgs/search.svg";
import IconSearch from "src/assets/icons/search.icon";
import IconCart from "src/assets/icons/cart.icon";

function Header() {
  return (
    <header className={css.header}>
      <img src="src/assets/imgs/logo.png" />

      <div className={css["header-left"]}>
        {/* <img src={searchSvg} /> */}
        <div className={css["header-left-search"]}>
          <IconSearch />
          <span>Search</span>
        </div>
        <div className={css["header-left-cart"]}>
          <IconCart />
          <span>(1)</span>
        </div>
        <div className={css["header-left-author"]}>
          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
