<script>
  import { queryItemsPart } from "$lib/funcs/gql";
  import { listFormSubmissions } from "./gql";
  import { onMount } from "svelte"

import { API, graphqlOperation } from "aws-amplify";

  let items
  let nextToken 

  onMount(async () => {
    getFormSubmissions()
  })

  async function getFormSubmissions(){
    console.log('gggg')
    const res = await queryItemsPart(listFormSubmissions, null, "listFormSubmissions", null);
    console.log('kkkkkk',res)
    if (res.message === "success") {
      console.log("res.data.items", res.data.items);
      items = res.data.items
      nextToken = res.data.nextToken
    } else {
      console.log("err", res);
      items = null
      nextToken = null
    }
  }
</script>

<!-- <h2 on:click={getFormSubmissions}>test admin</h2> -->
{#if items}
<p>Form  Submissions</p>
{#each items as item}
  <p>{JSON.stringify(item)}</p>
{/each}

{/if}