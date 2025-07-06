import { Link } from 'react-router';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>|
      <Link to="/projects">Projects</Link>|
      <Link to="/music">Music</Link>|
    </nav>
  );
}

