import React from 'react';
import './SignUpModal.css';

const SignUpModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Sign Up</h2>
        <form>
          <div>
            <label>Email</label>
            <input type="email" name="email" />
            <div className="error">Email must be unique</div>
          </div>
          <div>
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <button type="submit">Register</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
