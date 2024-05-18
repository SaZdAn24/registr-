import React, { useState } from 'react';
import './App.css';
import SignInModal from './components/SignInModal';
import SignUpModal from './components/SignUpModal';

const App = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const toggleSignIn = () => setIsSignInOpen(!isSignInOpen);
  const toggleSignUp = () => setIsSignUpOpen(!isSignUpOpen);

  return (
    <div className="App">
      <button onClick={toggleSignIn}>Sign In</button>
      <button onClick={toggleSignUp}>Sign Up</button>

      {isSignInOpen && <SignInModal onClose={toggleSignIn} />}
      {isSignUpOpen && <SignUpModal onClose={toggleSignUp} />}
    </div>
  );
};

export default App;
