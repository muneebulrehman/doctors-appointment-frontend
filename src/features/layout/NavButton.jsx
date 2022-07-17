import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NavButton.module.scss';

export default function NavButton({
  reverseXAxis = false,
  reverseColors = false,
  onClick = null,
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${
        reverseColors ? styles.navButtonReverseColors : styles.navButton
      } ${reverseXAxis ? styles.rotate : ''}`}
    >
      <FontAwesomeIcon icon="fa-caret-left" />
    </button>
  );
}
