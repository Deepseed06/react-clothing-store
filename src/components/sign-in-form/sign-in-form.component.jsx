import { useState } from "react";
import Button from '../button/button.component';
import '../sign-in-form/sign-in-form.styles.scss'
import { 
    signInWithGooglePopup,
     } from '../../utils/firebase/firebase.utils';
import FormInput from "../form-input/form-input.component";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
    email: '',
    password: '',
}
const SignInForm = () =>{

    const [formFields , setFormFields] = useState(defaultFormFields);
    const navigate = useNavigate();
    const{email, password} = formFields;

    const signInWithGoogle = async()=>{
        await signInWithGooglePopup();  
        
    }

    const resetFormFields = ()=>{
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try {   
            // const {user} = await signInAuthWithEmailAndPassword(email, password);
            resetFormFields() 
            navigate('/')
         
        } catch (error) {
            switch(error.code){
                case 'auth/invalid-login-credentials':
                 alert('incorrect email or password ');
                break;
                default:
                console.log(error)
            }
        
        }

    }
    const handleChange = (event)=>{
        const {name, value} = event.target;

        setFormFields({...formFields, [name]:value})
    }

    return(
        <div className="sign-up-container">
            <h2>Already have an account? </h2>
            <span>Sign in with your Email and Password </span>
            
            <form onSubmit={handleSubmit}>
          
                <FormInput 
                    type="email" 
                    label='email'
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email}/>
                
                <FormInput 
                    type="password" 
                    label='Password' 
                    required onChange={handleChange} 
                    name="password" 
                    value={password}/>
                
                <div className="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button  
                buttonType='google' 
                onClick={signInWithGoogle}
                >google sign in</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;