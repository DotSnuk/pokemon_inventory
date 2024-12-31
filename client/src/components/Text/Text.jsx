import { Link } from 'react-router-dom';

export default function TextComponent() {
  return (
    <div>
      Some text
      <Link to='trainers'>Trainer</Link>
    </div>
  );
}
