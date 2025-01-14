import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({ name, path, optionalText }) {
  return (
    <Link to={path}>
      {name} {optionalText && optionalText}
    </Link>
  );
}
