<script>
  import { onMount } from "svelte";

  export let codeValue;
  export let squareSize = "100px";

  $: scriptLoaded, setNewQRcode(codeValue);

  let scriptLoaded = false;
  let qrcode;

  onMount(() => {
    let script = document.createElement("script");
    script.src =
      "https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js";
    document.head.append(script);

    script.onload = function () {
      qrcode = new QRCode("qrcode", {
        text: codeValue,
        width: squareSize,
        height: squareSize,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    };
  });

  function setNewQRcode(codeVal) {
    if (qrcode && codeVal) {
      qrcode.clear();
      qrcode.makeCode(codeValue);
    }
  }
</script>

<div id="qrcode" />

<style>
  #qrcode {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 1.5rem;
    max-width: clamp(10%, 20rem, 100%);
    margin: auto;
    background: white;
  }
</style>
