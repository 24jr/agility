<script>
  import {
    authPage,
    showSuccessMessage,
    successMessage,
    resetMessages,
  } from "$lib/components/Auth/store";
  import SignUp from "./SignUp/index.svelte";
  import SignIn from "./SignIn/index.svelte";
  import SignOut from "./SignOut/index.svelte";
  import SignInMFACode from "./SignInMFACode/index.svelte";
  import SignUpConfirmCode from "./SignUpConfirmCode/index.svelte";
  import ChangePassword from "./ChangePassword/index.svelte";
  import ForgotPassword from "./ForgotPassword/index.svelte";
  import ForgotPasswordConfirmCode from "./ForgotPasswordConfirmCode/index.svelte";
  import ChangeAttributes from "./ChangeAttributes/index.svelte";
  import AttributeConfirmCode from "./AttributeConfirmCode/index.svelte";
  import MfaReset from "./MfaReset/index.svelte";
  import MfaTotp from "./MfaTotp/index.svelte";
  import { LoadingSuccessDiv } from "sveltekit-ui";

  $: { $authPage, resetMessages() }

  const authComponents = {
    signup: SignUp,
    signin: SignIn,
    signout: SignOut,
    signinmfacode: SignInMFACode,
    signupconfirmcode: SignUpConfirmCode,
    changepassword: ChangePassword,
    forgotpassword: ForgotPassword,
    forgotpasswordconfirmcode: ForgotPasswordConfirmCode,
    changeattributes: ChangeAttributes,
    attributeconfirmcode: AttributeConfirmCode,
    mfareset: MfaReset,
    mfatotp: MfaTotp,
    loadingdiv: LoadingSuccessDiv,
  };

  $: shownComponent = authComponents[$authPage];
</script>

{#if !$showSuccessMessage}
  <svelte:component this={shownComponent} />
{:else}
  <LoadingSuccessDiv showScreen="success" message={$successMessage} />
{/if}
