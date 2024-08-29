import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSignup from "../hooks/useSignup";


function Signup() {

  const [inputs,setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    description: "",
  });

  const {loading,signup} = useSignup();
  const navigate = useNavigate();
 



  const handleSubmit = async(e) => {
    e.preventDefault();
    const success =await signup(inputs);
    if(success) navigate("/dashboard");

  }

  return (
      <div className="register-container flex w-full h-screen">
      <div className="md:w-1/3 border-2 border-[#6F4DF7] rounded-xl p-6 mx-auto h-[35rem] ml-[60rem] mt-16">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up <span className='text-blue-500'> GSQUAD</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input 
            type='text'
            value={inputs.fullName}
            placeholder='John Doe' 
            className='w-full input input-bordered  h-10' 
            onChange={(e) => setInputs({...inputs,fullName: e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2 '>
              <span className='text-base label-text'>Username</span>
            </label>
            <input 
            type='text'
            value={inputs.username} 
            placeholder='johndoe' 
            className='w-full input input-bordered h-10'
            onChange={(e) => setInputs({...inputs, username: e.target.value})} 
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              value={inputs.password}
              placeholder='Enter Password'
              className='w-full input input-bordered h-10'
              onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type='password'
              value={inputs.confirmPassword}
              placeholder='Confirm Password'
              className='w-full input input-bordered h-10'
              onChange={(e) => setInputs({...inputs,confirmPassword: e.target.value})}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'>BIO</span>
            </label>
            <input
              type='text'
              value={inputs.description}
              placeholder='DESCRIPTION'
              className='w-full input input-bordered h-10'
              onChange={(e) => setInputs({...inputs,description: e.target.value})}
            />
          </div>



          <div className="flex gap-2 items-center mt-2 mb-2">
            <p className='text-sm'>Already have an account?</p>
            <Link className='text-sm hover:underline hover:text-blue-600' to='/login'>
              Signin
            </Link>
          </div>

          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700 hover:bg-[#3E3F47]'
            disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span>: "Sign Up"}
            </button>
          </div>
        </form>
      </div>
      </div>
  )
}
export default Signup