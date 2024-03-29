import { Link } from "react-router-dom";
import login from '../../../../src/assets/login/Capture-removebg-preview.png';
import google from '../../../assets/login/google-sign-in-2023-01-04 00-00-00-2023-03-13 13-05-41.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../../../../firebase.config";





const Register = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleSignGoogle =()=>{
      signInWithPopup(auth,provider)
      .then(result =>{
          const user = result.user;
          console.log('google',user);
      })
      .catch(error => {
          console.log('error', error.message);
      })
  }



  const {createAccount} = useContext(AuthContext)
    const handleRegister = event =>{
      event.preventDefault();
      const form = event.target;
      const photo = form.photo.value;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name, email, password)

      createAccount(email,password,photo)
      .then(result =>{
        const user = result.user;
        updateProfile(user, { photoURL: photo, displayName: name})
        console.log(user);
      })
      .then(error =>{
        console.log(error);
      })

      
    }
   

    return (
        <div className="hero min-h-screen bg-base-200 mb-12">
        <div className="hero-content flex-col lg:flex-row gap-12">
          <div className="text-center lg:text-left">
           
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-3xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
              </div>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" placeholder="photo url" name='photo' className="input input-bordered" />
              </div>
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
               
              </div>
              <div className="form-control mt-6">
              <input className="btn bg-red-600" type="submit" value="Login" />
              </div>
            </form>
            <p className="text-xl font-semibold text-center my-2">Or</p>
            
            <button onClick={handleSignGoogle} className="text-center flex ml-28 text-xl font-semibold text-blue-500 my-2">Sign In<img className="w-8 h-8" src={google} alt="" /></button>

            <p className='text-center mb-4'>Already have an account ?<Link to='/login' className='text-red-600 font-bold '> Login</Link> </p>

            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;