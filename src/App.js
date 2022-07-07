import React from 'react';
import './App.css';
import RegisterForm from './RegisterForm';
import RegisterWindow from './RegisterWindow';


const App = () => {
  return ( 
    <div className="register-wrapper">
      <div className="register-window">
      <RegisterWindow />
      </div>
      <div className="register-form">
        <RegisterForm />
      </div>
    </div>
   );
}
 
export default App;


