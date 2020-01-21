import React from "react";
import styles from "./primary-nav.css";
import { NavLink } from "react-router-dom";

export default function PrimaryNav(props) {
  return (
    <nav className={styles.primaryNav}>
      <ul>
        <li>
          <NavLink
            to="/clients"
            className={styles.navLink}
            activeClassName={styles.activeNavLink}
          >
            Client list
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={styles.navLink}
            activeClassName={styles.activeClassName}
          >
            Account settings
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <a
            href="https://github.com/polyglot-microfrontends"
            className={styles.navLink}
          >
            Code / Documentation
          </a>
        </li>
      </ul>
    </nav>
  );
}
