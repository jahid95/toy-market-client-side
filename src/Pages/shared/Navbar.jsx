import { Link } from 'react-router-dom';
import logo from '../../../src/assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>All Toys</a></li>        
        <li><a>Blogs</a></li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">
        <img className='w-28 h-16' src={logo} alt="" />
        <div className='d-flex flex-row text-left ml-4'> 
        <h3 className='text-orange-600 text-2xl'>Kids<span>Cars</span></h3>
        <small className='text-gray-500 font-thin'>For Adventure Kids...</small>
        </div>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>All Toys</a></li>
      <li><a>Blogs</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
    );
};

export default Navbar;