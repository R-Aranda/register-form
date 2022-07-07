import React from "react";
import "./RegisterForm.css"

const RegisterForm = () => {
  return ( 
    <div>
      <div className="form-wrapper">
				<div>
					<form>
						<h1 className="form-header">Register</h1>
						<div className="signup-input-wrapper">
							<input 
								type="text"
								id="username"
								className="signup-form-input"
								placeholder="Enter your username"
							/>
						</div>
						<div className="signup-input-wrapper">
							<input 
								type="text"
								id="email"
								className="signup-form-input"
								placeholder="Enter your email"
							/>
						</div>
						<div className="signup-input-wrapper">
							<input 
								type="text"
								id="password"
								className="signup-form-input"
								placeholder="Enter your password"
							/>
						</div>
						<div className="signup-input-wrapper">
							<input 
									type="text"
									id="password-confirmation"
									className="signup-form-input"
									placeholder="Confirm your password"
							/>
						</div>
						<div className="form-btns">
							<button className="signup-form-btn" type="submit">Submit</button>
							<button className="signup-form-login" type="signup">Login</button>
						</div>
					</form>
        </div>      
      </div>
  	</div>
        
  );
}
 
export default RegisterForm;