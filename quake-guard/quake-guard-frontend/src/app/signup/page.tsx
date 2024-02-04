import React from "react";

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/quake3.jpeg')]">
      <div className='bg-gray-300 rounded-xl p-8 w-96 text-center shadow-2xl backdrop-blur-md bg-white/30'>
        <h1 className='text-4xl font-bold mb-8 text-[#030712]'>
          Create an Account
        </h1>
        <div className='flex flex-col'>
          <div className='mb-4'>
            <label htmlFor='username' className='text-[#030712] text-lg font-semibold mb-2'>
              Username
            </label>
            <input
              type='text'
              className='rounded border-2 border-[#030712] p-2 w-full focus:outline-none focus:border-[#030712]'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='text-[#030712] text-lg font-semibold mb-2'>
              Email
            </label>
            <input
              type='email'
              className='rounded border-2 border-[#030712] p-2 w-full focus:outline-none focus:border-[#030712]'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='text-[#030712] text-lg font-semibold mb-2'>
              Password
            </label>
            <input
              type='password'
              className='rounded border-2 border-[#030712] p-2 w-full focus:outline-none focus:border-[#030712]'
            />
          </div>
          <div className='flex justify-center'>
            <button
              type='submit'
              className='rounded-lg bg-[#030712] text-white py-2 px-4 hover:bg-opacity-80 transition-all'
              // Add your signup function here
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;