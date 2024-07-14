import {  useState } from "react";
import Button from "../button/button.component";
import '../sign-up-form/sign-up-form.styles.scss'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth  } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}
const SignUpForm = () =>{

    const [formFields , setFormFields] = useState(defaultFormFields);
    const{displayName, email, password, confirmPassword} = formFields;
    console.log(formFields)


    const resetFormFields = ()=>{
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(password!==confirmPassword) {
            alert('Passwords do not Match!')
            return
        }
        try {   
        const {user} = await createAuthUserWithEmailAndPassword( email,password);
       
        
        await createUserDocumentFromAuth(user, {displayName})
        console.log(user)
        resetFormFields()
        alert('User Successfully Created')

         
         
        } catch (error) {
            if(error.code==='auth/email-already-in-use'){
                alert('Cannot create user, email already in use')
            }
            console.log('User creation encountered an error' ,error)
        }

    }
    const handleChange = (event)=>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value})
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account? </h2>
            <span>Sign up with your Email and Password </span>
            <form onSubmit={handleSubmit}>
          
                
                <FormInput 
                    type="text" 
                    label='DisplayName' 
                    required onChange={handleChange} 
                    name="displayName" 
                    value={displayName}/>
                
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
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password}/>
                
                <FormInput 
                    type="password" 
                    label='Confirm Password' 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword}/>

                <Button  type="submit">Sign Up</Button>

            </form>
        </div>
    );
};

export default SignUpForm;