import React, {useState} from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//import {auth } from '../../firebase/firebase.utils';
import { googleSignInStart , emailSignInStart} from '../../redux/user/user.actions';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
} from './sign-in.style.jsx'

//class SignIn extends React.Component {
    // constructor(props) {
    //     super (props);

    //     this.state = {
    //         email : '',
    //         password : ''
    //     }
    // }
    const SignIn = ({ emailSignInStart, googleSignInStart }) => {
        const [userCredentials, setCredentials] = useState({
          email: '',
          password: ''
        });
      
        const { email, password } = userCredentials;
      
        const handleSubmit = async event => {
          event.preventDefault();
      
          emailSignInStart(email, password);
        };
      

        //const {email, password} =this.state;

        // try{
        //     await auth.signInWithEmailAndPassword(email,password)
        //     this.setState({email:'',password:''});
        // }catch(error){
        //     console.log(error);
        // }
   // };

   const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

    // render() {
    //     const { googleSignInStart} = this.props;
       // const {emailSignInStart} = this.props;
        return(
            <SignInContainer>
                <SignInTitle> I already have an account </SignInTitle>
                <span> Sign In with your email and Password </span>
                <form onSubmit ={handleSubmit}>

                    <FormInput name ='email' type ='email'  handleChange={handleChange} value ={email} label='Email' required/>
                    
                    <FormInput name ='password' type ='password' value ={password} handleChange={handleChange} label='Password' required/>
                    {/* <label>Password</label> */}

                    <ButtonsBarContainer>
                        
        <CustomButton type = 'submit'   > {'' }SIGN IN </CustomButton>

                    <CustomButton type = 'button' onClick = {googleSignInStart} isGoogleSignIn > {''} SIGN IN With Google {''} </CustomButton>

                    </ButtonsBarContainer>
                   
                </form>
            </SignInContainer>
        )
    }

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect (null , mapDispatchToProps)(SignIn);