import { Link } from "react-router-dom";
import login from '../../../../src/assets/login/Capture-removebg-preview.png'


const Register = () => {
    const handleRegister = event =>{
        event.preventDefault();
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
                <input type="text" placeholder="name" name='name' className="input input-bordered" />
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
            <p className='text-center my-8'>Already have an account ?<Link to='/login' className='text-red-600 font-bold '> Login</Link> </p>

            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;