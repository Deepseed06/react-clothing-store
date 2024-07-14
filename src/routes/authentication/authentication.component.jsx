
// import { useEffect } from 'react';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import '../authentication/authentication.styles.scss';

const Authentication = () =>{
    
    
    // const asyncRedirect = async() =>{ 
    //     const response = await getRedirectResult(auth);
    //     console.log(response)
        
    //     if(response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
           
    //     }
    // }
    
    //     useEffect(() =>{
    //         asyncRedirect()
    //     }
    //        ,[]);
    
    return(
        <div className='authentication-container'>
            <h1>Sign In Page</h1>
            <SignInForm/>
            {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
            <SignUpForm/>
        </div>
    );
};
export default Authentication;