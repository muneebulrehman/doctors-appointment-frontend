import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useNavigate } from 'react-router-dom';

import { toggleNavMenu } from './layoutSlice';
import styles from './Navbar.module.scss';
import routesApp from '../../routesApp';
import config from '../../config';
import { userLogout } from '../user/userSlice';
import routes from '../../routesApi';

export default function NavBar() {
  const { navMenuIsOpen, lightModeIsOn, mobileMode, backButtonVisible } =
    useSelector((state) => state.layout);
  const dispatch = useDispatch();
  const [user, setUser] = useState('null');
  const nav = useNavigate();
  const userLoggedIn = useSelector((state) => state.user.user);

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

  useEffect(() => {
    setUser(userLoggedIn);
  }, [userLoggedIn]);

  useEffect(() => {
    if (localStorage.getItem('user_name')) {
      setUser(localStorage.getItem('user_name'));
    } else setUser('');
  }, [user]);

  const logout = async () => {
    let res = await fetch(`${config.url}${routes.AUTH}`, {
      method: 'DELETE',
      // credentials: 'include',
    });
    res = await res.json();
    if (res.success) {
      nav('/');
      setUser('');
      localStorage.removeItem('user_name');
      localStorage.removeItem('user_id');
      dispatch(userLogout());
    }
    dispatch(userLogout());
  };

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
            {user ? (
              <button className="btn-clean" type="submit" onClick={logout}>
                LOGOUT
              </button>
            ) : (
              <>
                <NavLink to={routesApp.NEW_SESSION}>LOG IN</NavLink>
                <NavLink to={routesApp.CREATE_SESSION}>SIGN UP</NavLink>
              </>
            )}
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
