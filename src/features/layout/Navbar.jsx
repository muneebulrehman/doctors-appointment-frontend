import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { toggleNavMenu } from './layoutSlice';
import styles from './Navbar.module.scss';

export default function NavBar() {
  const { navMenuIsOpen } = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  return (
    <>
      <label
        id="menu-burger"
        htmlFor="menu-burger-button"
        className={`position-absolute ${styles.menuBurger}`}
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
      <nav
        className={`${styles.navBar} ${navMenuIsOpen ? '' : styles.hideLeft}`}
      >
        <div className="bg-white border-end border-light border-1 d-flex flex-column pt-4">
          <FontAwesomeIcon className="h-2rem" icon="fa-briefcase-medical" />
          <ul
            id="nav-list"
            className={`ps-3 text-start flex-grow-1 ${styles.navList}`}
          >
            <li>DOCTORS</li>
            <li>APPOINTMENTS</li>
          </ul>
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
        <button
          type="button"
          className={styles.closeNavMenu}
          onClick={() => dispatch(toggleNavMenu())}
        >
          <FontAwesomeIcon icon="fa-caret-left" />
        </button>
      </nav>
    </>
  );
}
