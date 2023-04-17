import './Navbar.css';
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Link to='/'>
      <div className='navbar'>
        <FaCoins className='icon' />
        <h1>
          {' '}
          Coin <span className='purple_color'>Search</span>
        </h1>
      </div>
    </Link>
  );
}

export default Navbar;
