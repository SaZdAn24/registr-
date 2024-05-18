import React from 'react';
import './SignInModal.css';

const SignInModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Sign In</h2>
        <form>
          <div>
            <label>Login</label>
            <input type="text" name="login" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <div className="error">User not registered, please sign up first.</div>
          <button type="submit">Sign In</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
