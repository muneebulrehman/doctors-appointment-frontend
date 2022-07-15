import { useSelector, useDispatch } from 'react-redux';
import { toggleNavMenu } from './layoutSlice';
import styles from './Navbar.module.scss';

export default function NavBar() {
  const { navMenuIsOpen } = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  function menuClickHandler() {
    dispatch(toggleNavMenu());
  }

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
        onClick={menuClickHandler}
        aria-label="menu-burger"
      />
      <nav
        className={`${
          styles.navBar
        }} bg-white border-end border-light border-2 position-absolute top-0\
       bottom-0 ${navMenuIsOpen ? '' : styles.hideLeft}`}
      >
        <ul id="nav-list" className={`ps-3 text-start ${styles.navList}`}>
          <li>DOCTORS</li>
          <li>APPOINTMENTS</li>
        </ul>
      </nav>
    </>
  );
}
