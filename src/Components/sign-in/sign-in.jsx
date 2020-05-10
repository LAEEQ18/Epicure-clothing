import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth , signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }
    handleSubmit = async event => {
        event.PreventDefault();

        const {email, password} =this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:'',password:''});
        }catch(error){
            console.log(error);
        }
    };

    handleChange = event => {
        const {value,name} =event.target;
        this.setState({[name]:value})

    }

    render() {
        return(
            <div className ='sign-in'>
                <h2> I already have an account </h2>
                <span> Sign In with your email and Password </span>
                <form onSubmit ={this.handleSubmit}>

                    <FormInput name ='email' type ='email' value ={this.state.email} handleChange={this.handleChange} label='Email' required/>
                    
                    <FormInput name ='password' type ='password' value ={this.state.password} handleChange={this.handleChange} label='Password' required/>
                    {/* <label>Password</label> */}

                    <div className ='buttons'>
                        
                    <CustomButton type = 'submit' > SIGN IN </CustomButton>

                    <CustomButton type = 'button' onClick = {signInWithGoogle} isGoogleSignIn > {''} SIGN IN With Google {''} </CustomButton>

                    </div>
                   
                </form>
            </div>
        )
    }
}

export default SignIn;