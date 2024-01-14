import React from "react";

export default function AboutPage() {
  return (
				<div className='flex-1 bg-gray-300 rounded-xl p-4'>
					<h1 className='text-4xl font-bold py-5'>Donate</h1>
					<form className='flex flex-col'>
						<div className='flex flex-col py-4'>
							<label htmlFor='city'>Name</label>
							<input
								type='text'
								className='rounded py-2'
							/>
						</div>
						<div className='flex flex-col py-4'>
							<label htmlFor='state' className='py-2'>
								Email
							</label>
							<input
								type='email'
								className='rounded py-2'
							/>
						</div>
						<div className='flex flex-col py-4'>
							<label htmlFor='country' className='py-2'>
								Password
							</label>
							<input
								type='password'
								className='rounded py-2'
							/>
						</div>
						<div className='flex flex-col py-2'>
							<button
								type='submit'
								className='rounded-lg bg-[#030712] text-white py-2 px-4'
							>
								Submit
							</button>
						</div>
					</form>
				</div>
    /*<div className="flex flex-col m-auto mt-48 bg-white pb-8">
      <div className="flex flex-col items-center gap-2.5 ">
        <div className="text">Sign up</div>
        <div className="underline"></div>
      </div>
			<div className="inputs">
				<div className="flex flex-row">
					<img src="/user.jpg" className = "w-4 h-4" />
					<input type="text" placeholder="Name" className="flex-1"/>
				</div>
				<div className="input">
					<img src="/email.jpg" alt="" />
					<input type="email" placeholder="Email"/>
				</div>
				<div className="input">
					<img src={password_icon} alt="" />
					<input type="password" placeholder="Password"/>
				</div>
			</div>
			<div className="forgot-password">Lost Password? <span>Click Here!</span></div>
			<div className="submit">
				<div className="submit">Sign up</div>
				<div className="submit">Login</div>
			</div>
	</div>*/
  )
}
