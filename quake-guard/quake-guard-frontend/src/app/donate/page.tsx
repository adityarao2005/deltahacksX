import React from "react";

export default function AboutPage() {
	return (
		<div className="border border-black rounded">
			<div className="make-box">
				<h1>Sign up</h1>
				<form>
					<div className="input-group">
						<div className="input-field">
							<i className="fa-solid fa_user"></i>
							<input type="text" placeholder="Name" />
						</div>
						<div className="input-field">
							<i className="fa-solid fa_envelope"></i>
							<input type="email" placeholder="Email" />
						</div>
						<div className="input-field">
							<i className="fa-solid fa_lock"></i>
							<input type="password" placeholder="Password" />
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}