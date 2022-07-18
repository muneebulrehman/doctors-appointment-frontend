import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink } from 'react-router-dom';

import { toggleNavMenu } from './layoutSlice';
import styles from './Navbar.module.scss';
import api from '../../helpers/api';
import routes from '../../routesApi';
import routesApp from '../../routesApp';

export default function NavBar() {
  const { navMenuIsOpen, lightModeIsOn, mobileMode, backButtonVisible } =
    useSelector((state) => state.layout);
  const dispatch = useDispatch();

  useEffect(() => {
    function navMenuClickHandler(e) {
      const menuBurgerEl = document.querySelector('#menu-burger-button');
      if (navMenuIsOpen && !menuBurgerEl.contains(e.target)) {
        dispatch(toggleNavMenu());
      }
    }
    document.addEventListener('click', navMenuClickHandler);
    return () => {
      document.removeEventListener('click', navMenuClickHandler);
    };
  }, [navMenuIsOpen]);

  const logout = async () => {
    const res = await api.destroy(routes.AUTH);
    if (res.success) {
      window.location.pathname = '/';
    }
    // console.log(res);
  };

  const test = () => fetch(routesApp.TEST_LOGIN);
  // .then((res) => res.json())
  // .then((res) => console.log(res));

  return (
    <nav className="z-index-1100">
      <label
        id="menu-burger"
        htmlFor="menu-burger-button"
        className={`position-absolute zindex-sticky ${styles.menuBurger} ${
          navMenuIsOpen ? styles.disappear : ''
        } ${lightModeIsOn ? styles.makeChildrenDark : ''}`}
      >
        <div />
        <div />
      </label>
      <button
        className="position-absolute d-none"
        type="button"
        id="menu-burger-button"
        onClick={() => dispatch(toggleNavMenu())}
        aria-label="menu-burger"
      />
      <section
        className={`${styles.navBar} ${
          navMenuIsOpen || !mobileMode ? '' : styles.hideLeft
        } ${mobileMode ? 'position-absolute' : 'position-sticky'}`}
      >
        <div className="bg-white border-end border-light border-1 d-flex flex-column pt-4">
          <FontAwesomeIcon className="h-2rem" icon="fa-briefcase-medical" />
          <div
            id="nav-list"
            className={`ps-3 text-start flex-grow-1 flex-column ${styles.navList}`}
          >
            <NavLink to={routesApp.DOCTORS}>DOCTORS</NavLink>
            <NavLink to={routesApp.APPOINTMENTS}>APPOINTMENTS</NavLink>
            <NavLink to={routesApp.NEW_APPOINTMENT}>BOOK NEW</NavLink>
            <NavLink to={routesApp.NEW_SESSION}>LOG IN</NavLink>
            <NavLink to={routesApp.CREATE_SESSION}>SIGN UP</NavLink>
            <button className="btn-clean" type="submit" onClick={logout}>
              LOGOUT
            </button>
            <button
              type="button"
              className="btn-clean text-danger text-center w-100"
              onClick={test}
            >
              test login
            </button>
          </div>
          <ul className="d-flex gap-2 justify-content-center pb-2 mb-1 px-0">
            <li>
              <FontAwesomeIcon icon="fa-brands fa-twitter" />
            </li>
            <li>
              <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
            </li>
          </ul>
          <sub className="mb-5">&copy; 2022 Remote Developers</sub>
        </div>
        {backButtonVisible && (
          <button
            type="button"
            className={styles.closeNavMenu}
            onClick={() => dispatch(toggleNavMenu())}
          >
            <FontAwesomeIcon icon="fa-caret-left" />
          </button>
        )}
      </section>
    </nav>
  );
}
