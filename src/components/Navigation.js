import React from "react";
import { Link } from "gatsby";
import "../styles/partials/_navigation.scss";

const Navigation = () => {
  return (
    <nav role="navigation" aria-label="Main" className="nav">
      <div className="container container--wide">
        <div className="menu__wrapper">
          <div className="logo" id="logo">
            <a href="/" aria-label="Build Social Homepage">
              <img src="/media/img/logos/logo__horizontal--red.png" alt="" />
            </a>
          </div>
          <div className="mobile-menu__toggle">
            <div className="mobile-menu__toggle--mask">
              <span className="mobile-menu__toggle--span"></span>
              <span className="mobile-menu__toggle--span"></span>
              <span className="mobile-menu__toggle--span"></span>
            </div>
          </div>
          <div className="navigation-menu">
            <ul className="menu__main">
              {/* <li>
                <a href="/blog" className="menu__item">
                  Blog
                </a>
              </li> */}
              <li>
                <a href="/contact" className="menu__item">
                  Contact
                </a>
              </li>
              <li>
                <a href="/contact" className="btn primary dark">
                  Get started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
