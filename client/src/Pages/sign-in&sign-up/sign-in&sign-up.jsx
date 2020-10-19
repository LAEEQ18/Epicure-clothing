import React from 'react';
import SignIn from '../../Components/sign-in/sign-in';
import SignUp from '../../Components/sign-up/sign-up.component';

import {SignInandSignUpContainer} from './sign-in&sign-up.style.jsx';

// const SignInandSignUp = () => (
// <div className='sign-in-and-sign-up'> 
// <SignIn/> 
// <SignUp/>
// </div>

// )

const SignInandSignUp = () => (
    <SignInandSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInandSignUpContainer>
  );
export default SignInandSignUp;