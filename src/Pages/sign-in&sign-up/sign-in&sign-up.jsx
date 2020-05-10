import React from 'react';
import SignIn from '../../Components/sign-in/sign-in';
import SignUp from '../../Components/sign-up/sign-up.component';

import './sign-in&sign-up.styles.scss';

const SignInandSignUp = () => (
<div className='sign-in-and-sign-up'> 
<SignIn/> 
<SignUp/>
</div>

)
export default SignInandSignUp;