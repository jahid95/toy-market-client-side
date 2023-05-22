import { Link } from 'react-router-dom';
import logo from '../../../src/assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
    .then(() =>{
        
    })
    .catch( error => console.log(error))
}
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li className='text-red-500 mr-2 rounded-lg font-semibold'><Link to='/'><a>Home</a></Link></li>
      <li className='text-red-500 mr-2 rounded-lg font-semibold'><Link to='/alltoy'><a>All Toys</a></Link></li>
      <li>
      {
        user && 
        <Link to='/addtoy' className='text-red-500 mr-2 rounded-lg font-semibold'><a>Add Toys</a></Link>
        
      }
      </li>
      <li>
        {
          user && <Link to='/mytoy' className='text-red-500 mr-2 rounded-lg font-semibold'><a>My Toys</a></Link>
          
        }
      </li>
      <li className='text-red-500 mr-2 rounded-lg font-semibold'><Link to='/blogs'><a>Blogs</a></Link></li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">
        <img className='w-28 h-16' src={logo} alt="" />
        <div className='d-flex flex-row text-left ml-4'> 
        <h3 className='text-red-600 text-3xl'>Kids<span className='text-white bg-black'>Cars</span></h3>
        <small className='text-gray-500 font-thin'>For Adventure Kids...</small>
        </div>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='text-red-500 mr-2 rounded-lg font-semibold'><Link to='/'><a>Home</a></Link></li>
      <li className='text-red-500 mr-2 rounded-lg font-semibold'><Link to='/alltoy'><a>All Toys</a></Link></li>
      <li>
      {
        user && 
        <Link to='/addtoy' className='text-red-500 mr-2 rounded-lg font-semibold'><a>Add Toys</a></Link>
        
      }
      </li>
      <li>
        {
          user && <Link to='/mytoy' className='text-red-500 mr-2 rounded-lg font-semibold'><a>My Toys</a></Link>
          
        }
      </li>
      <li className='text-red-500 mr-2 rounded-lg font-semibold'><Link to='/blogs'><a>Blogs</a></Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? <>
      <img title={user.displayName} className='w-12 h-12 rounded-full' src={user.photoURL} alt="" />
      </> : <h2></h2>
    }
  {
    user? <button onClick={handleLogOut} className='bg-red-600 p-2 text-white rounded-lg ml-6'>Log Out</button> : <Link to='/login'>
    <a className="btn">Login</a>
  </Link>
  }
  </div>
</div>
    );
};

export default Navbar;