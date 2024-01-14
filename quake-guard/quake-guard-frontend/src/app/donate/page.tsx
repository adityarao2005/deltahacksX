import React from "react";
import user_icon from "../Icons/user.jpg"
import email_icon from "../Icons/email.jpg"
import password_icon from "../Icons/password.jpg"

export default function AboutPage() {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign up</div>
        <div className="underline"></div>
      </div>
			<div className="inputs">
				<div className= "img src = '/user.jpg'">
					<input type="text" placeholder="Name"/>
				</div>
				<div className="input">
					{/*<img src={email_icon} alt="" />*/}
					<input type="email" placeholder="Email"/>
				</div>
				<div className="input">
					{/*<img src={password_icon} alt="" />*/}
					<input type="password" placeholder="Password"/>
				</div>
			</div>
			<div className="forgot-password">Lost Password? <span>Click Here!</span></div>
			<div className="submit">
				<div className="submit">Sign up</div>
				<div className="submit">Login</div>
			</div>
    </div>
  )
}
