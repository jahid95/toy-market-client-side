
import { Link } from 'react-router-dom';
import login from '../../../../src/assets/login/Capture-removebg-preview.png';
import google from '../../../assets/login/google-sign-in-2023-01-04 00-00-00-2023-03-13 13-05-41.png';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
  const {logIn} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));

    }
    return (
        <div className="hero min-h-screen bg-base-200 mb-12">
        <div className="hero-content flex-col lg:flex-row gap-12">
          <div className="text-center lg:text-left">
           
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-3xl font-bold">Login now!</h1>
            <form onSubmit={handleLogin}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <input className="btn bg-red-600" type="submit" value="Login" />
              </div>
            </form>
            <p className="text-xl font-semibold text-center my-2">Or</p>
            
            <button className="text-center flex ml-28 text-xl font-semibold text-blue-500 my-2">Sign In<img className="w-8 h-8" src={google} alt="" /></button>

            <p className='text-center my-8'>New in Kids Cars ?<Link to='/signup' className='text-red-600 font-bold '> SignUp</Link> </p>

            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;