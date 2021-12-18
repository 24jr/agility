import { writable, get } from 'svelte/store';
import { Auth, Hub } from 'aws-amplify';

export const user = writable(null);
export const isSignedIn = writable(false)

export const email = writable('')
export const password = writable('')
export const authPage = writable('signin');
export const isPasswordShown = writable(false)

export const loadingAuthEvent = writable(false)
export const errorMessage = writable('')
export const errorResolutuionMessage = writable('')
export const errorResolutuionScreen = writable('')
export const showErrorMessage = writable(false)
export const successMessage = writable('')
export const showSuccessMessage = writable(false)
export const closeModalTrigger = writable(1)
export const openModalTrigger = writable(1)

export function openModal(){
  console.log('open auth modal')
  openModalTrigger.update(n => n + 1)
}

export function closeModal(){
  console.log('closeModal')
  closeModalTrigger.update(n => n + 1)
}

export function resetMessages(){
  console.log('resetMessages')
  errorMessage.set('')
  errorResolutuionMessage.set('')
  errorResolutuionScreen.set('')
  showErrorMessage.set(false)
  successMessage.set('')
  showSuccessMessage.set(false)
}

async function setSignInUser(){
  try{
    const userloc = await Auth.currentAuthenticatedUser()
    console.log('signin',userloc)
    user.set(userloc)
    setTimeout(() => {
      closeModal()
      resetMessages()
      authPage.set('signout')
      isSignedIn.set(true)
    }, 1400)
  } catch(err){
    console.log('setsigninuser error', err)
  }
}

function setSignOutUser(){
  isSignedIn.set(false)
  user.set(null)
  email.set('')
  password.set('')
  isPasswordShown.set(false)
  authPage.set('signin')
}

export async function initAuth(){
  try{
    loadingAuthEvent.set(true)
    setSignInUser()
  } catch(error){
    console.log('erru7', error)
    setSignOutUser()
  } finally {
    Hub.listen('auth', authChangeEvent);
    loadingAuthEvent.set(false)
  }
}

const authChangeEvent = async (data) => {
  console.log('authChangeEvent', data)
  loadingAuthEvent.set(true)
  console.log('authevent', data)
  switch (data.payload.event) {
    case 'signIn':
      setSignInUser()
      break;
    case 'signUp':
      setSignInUser()
      break;
    case 'signOut':
      setSignOutUser()
      break;
    case 'signIn_failure':
      // setSignOutUser()
      break;
    case 'tokenRefresh':
      setSignInUser()
      break;
    case 'tokenRefresh_failure':
      setSignOutUser()
      break;
    case 'configured':
  }
  loadingAuthEvent.set(false)
}

export async function signUp(email, password) {
  try {
    loadingAuthEvent.set(true)
    resetMessages()
    const cleanEmail = email ? email.toLowerCase() : ''
    const res = await Auth.signUp({
      username: cleanEmail,
      password: password,
      attributes: {
        email: cleanEmail,
      }
    });
    successMessage.set('Verification email sent. Confirm email before signing in.')
    showSuccessMessage.set(true)
    setTimeout(() => {
      authPage.set('signupconfirmcode')
      resetMessages()
    }, 4000)
  } catch (error) {
    console.log('signUpErr', error)
    if(error.code === "UsernameExistsException"){
      errorResolutuionMessage.set('Sign in?')
      errorResolutuionScreen.set('signin')
    }
    errorMessage.set(error.message)
    showErrorMessage.set(true)
  } finally {
    loadingAuthEvent.set(false)
  }
}

export async function signIn(email, password) {

  console.log('signIn')
  try {
    loadingAuthEvent.set(true)
    resetMessages()
    const res = await Auth.signIn(email, password);
    user.set(res)
    if(res.challengeName === 'SMS_MFA' || res.challengeName === 'SOFTWARE_TOKEN_MFA') {
      authPage.set('signinmfacode')
    } else if (res.challengeName === 'NEW_PASSWORD_REQUIRED') {
      // const {requiredAttributes} = user.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
      // You need to get the new password and required attributes from the UI inputs
      // and then trigger the following function with a button click
      // For example, the email and phone_number are required attributes
      // const {username, email, phone_number} = getInfoFromUserInput();
      // const loggedUser = await Auth.completeNewPassword(
      //   user,              // the Cognito User Object
      //   newPassword,       // the new password
      //   { email, phone_number } // OPTIONAL, the required attributes
      // );
    } else if (res.challengeName === 'MFA_SETUP') {
      // This happens when the MFA method is TOTP
      // The user needs to setup the TOTP before using it
      // More info please check the Enabling MFA part
      // Auth.setupTOTP(user);
    } else {
      successMessage.set('Sign in successful')
      showSuccessMessage.set(true)
      setTimeout(() => {
        closeModal()
        resetMessages()
        authPage.set('loadingdiv')
        isSignedIn.set(true)
      }, 1400)
    }
  } catch (err) {
    if (err.code === 'UserNotConfirmedException') { // user hasnt confirmed email sign up code
      errorResolutuionMessage.set('Confirm sign up code here')
      errorResolutuionScreen.set('signupconfirmcode')
    } else if (err.code === 'PasswordResetRequiredException') {
      errorResolutuionMessage.set('Password reset required')
      errorResolutuionScreen.set('forgotpassword')
    } else if (err.code === 'NotAuthorizedException') { // wrong password
      errorResolutuionMessage.set('Forgot password?')
      errorResolutuionScreen.set('forgotpassword')
    } else if (err.code === 'UserNotFoundException') { // username/email not found
      errorResolutuionMessage.set('Sign up?')
      errorResolutuionScreen.set('signup')
    } else {
        console.log(err);
    }
    errorMessage.set(err.message)
    showErrorMessage.set(true)
  } finally {
    loadingAuthEvent.set(false)
  }
}

export async function signInMFACode(code) {
  try {
    loadingAuthEvent.set(true)
    resetMessages()
    const userloc = get(user)
    console.log('userloc', userloc)
    const loggedUser = await Auth.confirmSignIn(
      userloc,   // Return object from Auth.signIn()
      code,   // Confirmation code  
      userloc.challengeName // MFA Type e.g. SMS_MFA, SOFTWARE_TOKEN_MFA
    );
    user.set(loggedUser)
    console.log('signed in', loggedUser)
    successMessage.set('Sign in successful')
    showSuccessMessage.set(true)
    setTimeout(() => {
      closeModal()
      resetMessages()
      authPage.set('loadingdiv')
    }, 1400)
  } catch (error) {
    console.log('signInErr', error)
    errorMessage.set(error.message)
    showErrorMessage.set(true)
  } finally {
    loadingAuthEvent.set(false)
  }
}

export async function signOut(isGlobal) {
  console.log('sign out')
  try {
    authPage.set('loadingdiv')
    openModal()
    console.log('oppppppenmodal1')
    loadingAuthEvent.set(true)
    resetMessages()
    const params = isGlobal ? { global: true } : null
    const res = await Auth.signOut(params);
    console.log('signed out', res)
    successMessage.set('Sign out successful')
    showSuccessMessage.set(true)
    setTimeout(() => {
      resetMessages()
      authPage.set('signin')
    }, 2400)
  } catch (error) {
    console.log('signOutErr', error)
    errorMessage.set(error.message)
    showErrorMessage.set(true)
  } finally {
    loadingAuthEvent.set(false)
  }
}

export async function sendForgotPasswordReset(email) {
  console.log('sennd password reset')
  try {
    loadingAuthEvent.set(true)
    resetMessages()
    const res = await Auth.forgotPassword(email)
    console.log('reset password send', res)
    successMessage.set('Password reset email sent')
    showSuccessMessage.set(true)
    setTimeout(() => {
      authPage.set('forgotpasswordconfirmcode')
      resetMessages()
    }, 1400)
  } catch (error) {
    console.log('signUpErr', error)
    errorMessage.set(error.message)
    showErrorMessage.set(true)
  } finally {
    loadingAuthEvent.set(false)
  }
}

export async function forgotPasswordReset(email,code,password) {
  console.log('sennd password reset', email,code,password)
  try {
    loadingAuthEvent.set(true)
    resetMessages()
    const res = await Auth.forgotPasswordSubmit(email, code, password)
    console.log('reset password', res)
    successMessage.set('Password reset successful')
    showSuccessMessage.set(true)
    setTimeout(() => {
      authPage.set('signin')
      resetMessages()
    }, 1400)
  } catch (error) {
    console.log('resetpasswordErr', error)
    errorMessage.set(error.message)
    showErrorMessage.set(true)
  } finally {
    loadingAuthEvent.set(false)
  }
}

export async function changePassword(curPassword,newPassword) {
  console.log('change password',curPassword,newPassword)
  try {
    loadingAuthEvent.set(true)
    resetMessages()
    const res = await Auth.currentAuthenticatedUser().then(user => {
      return Auth.changePassword(user, curPassword, newPassword);
    })
    password.set(newPassword)
    console.log('change password', res)
    successMessage.set('Password change successful')
    showSuccessMessage.set(true)
    setTimeout(() => {
      authPage.set('loadingdiv')
      resetMessages()
    }, 1400)
  } catch (error) {
    console.log('changepasswordErr', error)
    errorMessage.set(error.message)
    showErrorMessage.set(true)
  } finally {
    loadingAuthEvent.set(false)
  }
}

export async function signUpConfirmCode(email, code){
  console.log('signupconfirmcode0',email, code);
  try {
    loadingAuthEvent.set(true)
    resetMessages()
    const res = await Auth.confirmSignUp(email, code);
    console.log('confirm code', res)
    successMessage.set('Code confirmed')
    showSuccessMessage.set(true)
    setTimeout(() => {
      authPage.set('signin')
      resetMessages()
    }, 1400)
  } catch (error) {
    console.log('signupconfirmcodeerr', error)
    errorMessage.set(error.message)
    showErrorMessage.set(true)
  } finally {
    loadingAuthEvent.set(false)
  }
}

export async function resendSignUpConfirmationCode(email){
  console.log('resendcode0');
  try {
    loadingAuthEvent.set(true)
    resetMessages()
    const res = await Auth.resendSignUp(email);
    console.log('code resent successfully', res);
    successMessage.set('Confirmation code email sent')
    showSuccessMessage.set(true)
    setTimeout(() => {
      authPage.set('signupconfirmcode')
      resetMessages()
    }, 1400)
  } catch (error) {
    console.log('confirm code resend err:', error)
    errorMessage.set(error.message)
    showErrorMessage.set(true)
  } finally {
    loadingAuthEvent.set(false)
  }
}

export const attributesToChange = writable([])
export const attributeToConfirmType = writable(null)

export function showChangeAttributesScreen(attributes){
  attributesToChange.set(attributes)
  authPage.set('changeattributes')
  openModal()
  console.log('oppppppenmodal2')
}

export function showConfirmAttributesScreen(type){
  attributeToConfirmType.set(type)
  authPage.set('attributeconfirmcode')
  openModal()
  console.log('oppppppenmodal3')
  Auth.verifyCurrentUserAttribute(type)
}

export async function changeAttributes(attributesObj){
  try {
    console.log('attributesObj00',attributesObj);
    loadingAuthEvent.set(true)
    resetMessages()
    let res = await Auth.updateUserAttributes(get(user), attributesObj);
    user.set(await Auth.currentAuthenticatedUser())
    console.log('resattr',res);
    successMessage.set('Attributes updated')
    showSuccessMessage.set(true)
    setTimeout(async () => {
      if(Object.keys(attributesObj).some(h => h === 'email')){
        attributeToConfirmType.set('email')
        authPage.set('attributeconfirmcode')
      } else if(Object.keys(attributesObj).some(h => h === 'phone_number')){
        await Auth.setPreferredMFA(get(user), 'NOMFA');
        user.set(await Auth.currentAuthenticatedUser())
        attributeToConfirmType.set('phone_number')
        authPage.set('attributeconfirmcode')
        Auth.verifyCurrentUserAttribute('phone_number')
      } else {
        closeModal()
        attributesToChange.set([])
        attributeToConfirmType.set(null)
      }
      resetMessages()
    }, 1400)
  } catch (error) {
    console.log('confirm attribute code err:', error)
    errorMessage.set(error.message)
    showErrorMessage.set(true)
  } finally {
    loadingAuthEvent.set(false)
  }
}

export async function resendAttributeVerificationCode(type){
  try {
    loadingAuthEvent.set(true)
    resetMessages()
    let res = await Auth.verifyCurrentUserAttribute(type)
    console.log('code resent successfully', res);
    successMessage.set('Confirmation code sent')
    showSuccessMessage.set(true)
    setTimeout(() => {
      resetMessages()
    }, 1400)
  } catch (error) {
    console.log('confirm code resend err:', error)
    errorMessage.set(error.message)
    showErrorMessage.set(true)
  } finally {
    loadingAuthEvent.set(false)
  }
}

export async function attributeConfirmCode(type, code){
  try {
    loadingAuthEvent.set(true)
    resetMessages()
    let res = await Auth.verifyCurrentUserAttributeSubmit(type, code);
    await Auth.updateUserAttributes(get(user));
    user.set(await Auth.currentAuthenticatedUser())
    console.log('confirm attr verification code', res);
    const text = type === 'phone_number' ? 'Phone Number' : type
    successMessage.set(`${text} confirmed`)
    showSuccessMessage.set(true)
    setTimeout(() => {
      closeModal()
      authPage.set('loadingdiv')
      resetMessages()
    }, 1400)
  } catch (error) {
    console.log('confirm code err:', error)
    errorMessage.set(error.message)
    showErrorMessage.set(true)
  } finally {
    loadingAuthEvent.set(false)
  }
}

export async function removeAttribute(type){
  try {
    loadingAuthEvent.set(true)
    resetMessages()
    if(type === 'phone_number' && get(user).preferredMFA === "SMS_MFA"){
      errorMessage.set('SMS Multi-Factor Auth must be removed in order to remove phone number')
      showErrorMessage.set(true)
      authPage.set('mfareset')
      openModal()
      console.log('oppppppenmodal4')
    } else {
      let res = await Auth.deleteUserAttributes(get(user), [ type ]);
      await Auth.updateUserAttributes(get(user));
      user.set(await Auth.currentAuthenticatedUser())
      console.log('remove attr',res);
      successMessage.set('Attribute removed')
      showSuccessMessage.set(true)
      setTimeout(() => {
        closeModal()
        authPage.set('loadingdiv')
        resetMessages()
      }, 1400)
    }
    
  } catch (error) {
    console.log('err removing attr:', error)
    errorMessage.set(error.message)
    showErrorMessage.set(true)
  } finally {
    loadingAuthEvent.set(false)
  }
}


export async function setPreferredMFA(type){
  try {
    loadingAuthEvent.set(true)
    resetMessages()
    if(type === 'TOTP'){
      authPage.set('mfatotp')
      openModal()
      console.log('oppppppenmodal5')
    } else if(type === 'SMS'){
      const userAttr = get(user).attributes
      if(!userAttr.phone_number){
        attributesToChange.set(['phone_number'])
        authPage.set('changeattributes')
        errorMessage.set('Verified phone number required for SMS Multi-Factor Auth')
        showErrorMessage.set(true)
        openModal()
        console.log('oppppppenmodal')
      } else if(!userAttr.phone_number_verified){
        attributeToConfirmType.set('phone_number')
        authPage.set('attributeconfirmcode')
        errorMessage.set('Verified phone number required for SMS Multi-Factor Auth')
        showErrorMessage.set(true)
        await Auth.verifyCurrentUserAttribute('phone_number')
        openModal()
        console.log('oppppppenmodal')
      } else {
        await Auth.setPreferredMFA(get(user), type);
        user.set(await Auth.currentAuthenticatedUser())
      }
    } else if(type === 'NOMFA'){
      await Auth.setPreferredMFA(get(user), type);
      user.set(await Auth.currentAuthenticatedUser())
      closeModal()
    }
  } catch (error) {
    console.log('setPreferredMFA err:', error)
    if(error.code === "InvalidParameterException"){
      attributesToChange.set(['phone_number'])
      authPage.set('changeattributes')
      openModal()
      console.log('oppppppenmodal')
    }
    errorMessage.set(error.message)
    showErrorMessage.set(true)
  } finally {
    loadingAuthEvent.set(false)
  }
}

export async function getMFAsetupCode(){
  const issuer = 'symptomtracker'
  let user = await Auth.currentAuthenticatedUser();
  let code = await Auth.setupTOTP(user)
  console.log('mfa code:', code)
  const uri = "otpauth://totp/AWSCognito:"+ user.attributes.email + "?secret=" + code + "&issuer=" + issuer;
  return { code: code, uri: uri }
}

export async function mfaConfirmCode(code){
  try {
    console.log('mfaConfirmCode0',code);
    loadingAuthEvent.set(true)
    resetMessages()
    // let user = await Auth.currentAuthenticatedUser();
    let res = await Auth.verifyTotpToken(get(user), code)
    await Auth.setPreferredMFA(get(user), 'TOTP');
    user.set(await Auth.currentAuthenticatedUser())
    successMessage.set('MFA confirmed', res)
    showSuccessMessage.set(true)
    setTimeout(() => {
      closeModal()
      authPage.set('loadingdiv')
      resetMessages()
    }, 1400)
  } catch (error) {
    console.log('confirm mfa code err:', error)
    errorMessage.set(error.message)
    showErrorMessage.set(true)
  } finally {
    loadingAuthEvent.set(false)
  }
}