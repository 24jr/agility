<script>
  import {
    getMFAsetupCode,
    mfaConfirmCode,
    loadingAuthEvent,
  } from "$lib/components/Auth/store";
  import ErrorDiv from "../ErrorDiv/index.svelte";
  import CodeInput from "$lib/components/type/Input/Code/index.svelte";
  import { onMount } from "svelte";
  import QRCode from "$lib/components/QRCode/index.svelte";
  import CopyIcon from "$lib/assets/static/icons/Copy/index.svelte";
  import Button from "$lib/components/Button/index.svelte"

  onMount(() => {
    handleGetMFAsetupCode();
  });

  let codeForAuthApp;
  let uriForQR;
  async function handleGetMFAsetupCode() {
    const res = await getMFAsetupCode();
    codeForAuthApp = res.code;
    uriForQR = res.uri;
  }

  let code;
  let isCodeStandardMet;
  $: if (isCodeStandardMet) {
    handleMFAConfirmCode();
  }

  const handleMFAConfirmCode = async () => {
    mfaConfirmCode(code);
  };

  function copyToTotpToClipboard() {
    navigator.clipboard.writeText(codeForAuthApp);
  }
</script>

<div class="form">
  <div class="section">
    <div class="qrContainer">
      <QRCode codeValue={uriForQR} squareSize="130" />
      <div class="codeCopyWrap">
        <p class="totpText">{codeForAuthApp}</p>
        <Button type="soft" on:click={copyToTotpToClipboard}>
          <CopyIcon size="2" />
        </Button>
      </div>
    </div>
    <CodeInput bind:val={code} bind:isCodeStandardMet />
  </div>
<ErrorDiv />
<div class="fillSpace" />
  <div class="section">
    <Button
      type="outlined"
      isDisabled={$loadingAuthEvent}
      isLoading={$loadingAuthEvent}
      on:click={handleGetMFAsetupCode}
      >{$loadingAuthEvent ? "Loading" : "Get New MFA Code"}
    </Button>
  </div>
</div>

<style>
  .form {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
  }
  .section {
    display: flex;
    flex-direction: column;
  }
  .qrContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .totpText {
    word-break: break-all;
    margin: .5rem 0;
  }
  .codeCopyWrap {
    display: flex;
  }
</style>
