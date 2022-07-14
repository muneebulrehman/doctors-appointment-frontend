import { useSelector, useDispatch } from 'react-redux';
import { toggleNavMenu } from './layoutSlice';

export default function NavBar() {
  const { navMenuIsOpen } = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  function menuClickHandler() {
    dispatch(toggleNavMenu());
  }

  return (
    <div className="bg-white border-end border-light border-2 position-absolute top-0 bottom-0">
      <ul id="nav-list" className="ps-3 text-start">
        <li>DOCTORS</li>
        <li>APPOINTMENTS</li>
      </ul>
    </div>
  );
}
