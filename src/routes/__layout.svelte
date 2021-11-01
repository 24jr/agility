<script context="module">
  import "../app.css";
  import Layout from "$lib/views/Layout/index.svelte";
  import Amplify from "aws-amplify";
  import awsExports from "../aws-exports";
  Amplify.configure({ ...awsExports, ssr: true });
  import { initAuth } from "$lib/components/Auth/store";
  initAuth();
</script>

<Layout>
  <slot />
</Layout>

<style>
  :root {
    font-family: "Lato", "Avenir Next", "Helvetica", "Hiragino Sans", "Verdana", "PT Sans",
      "Helvetica Neue";

    --primary: #2CA01C;
    --primary-dark: #108000;
    --primary-light: #53B700;
    --primary-transparent: #1977192a;
    --red-error: #e6263d;

    --shadow: #0000002a;
    --shadow-soft: #00000010;
    --shadow-strong: #0000005a;
    --tint: #ffffff3a;
    --tint-strong: #ffffff6a;
    --tint-soft: #ffffff1a;

    --white-light: #ffffff;
    --white-med: #f6f6f6;
    --white-dark: #e2e2e2;

    --gray-light: #bbbbbb;
    --gray-med: #aaaaaa;
    --gray-dark: #666666;

    --black-med: #222222;
    
    --bg-light: #ffffff;
    --bg-med: #f6f6f6;
    --bg-med-transparent: #f6f6f6f0;
    --bg-highlight: #e8e8e8;
    --bg-highlight-strong: #aaaaaa;
    --bg-highlight-stronger: #b4b4b4;
    --bg-dark: #e4e4e4;
    --contrast-soft: #a4aebc;
    --contrast-medsoft: #515863;
    --contrast-med: #212833;
    --contrast-strong: #010813;
    --contrast-overlay: #0000000b;
    --bg-modal: #f6f6f6;
  }

  :global(body) {
    background: var(--bg-med);
    color: var(--contrast-med);
  }
  :global(::placeholder) {
    color: var(--contrast-soft);
    opacity: 1;
  }
  :global(input, select, textarea) {
    color: var(--contrast-med);
  }

  :global(body.dark) {
    --primary: #2CA01C;
    --primary-dark: #108000;
    --primary-light: #53B700;
    --primary-transparent: #1977195a;
    --red-error: #d6263d;
    --shadow: #0000003a;
    --shadow-soft: #00000040;
    --shadow-strong: #0000008a;
    --tint: #ffffff3a;
    --tint-strong: #ffffff6a;
    --tint-soft: #ffffff1a;
    --white-light: #efefef;
    --white-med: #e6e6e6;
    --white-dark: #c2c2c2;
    --gray-light: #666666;
    --gray-med: #555555;
    --bg-light: #404040;
    --bg-med: #181a20;
    --bg-med-transparent: #181a20dd;
    --bg-highlight: #242424;
    --bg-highlight-strong: #333333;
    --bg-highlight-stronger: #555555;
    --bg-dark: #000000;
    --contrast-soft: #a4aebc;
    --contrast-med: #eaecef;
    --contrast-strong: #fafcff;
    --contrast-overlay: #ffffff20;
    --bg-modal: #2a2a2a;
  }
</style>
