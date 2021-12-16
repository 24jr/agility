<script>
  import { queryItemsPart } from "$lib/funcs/gql";
  import { listFormSubmissions } from "./gql";
  import { onMount } from "svelte"
  import { formatDate } from "$lib/funcs/general"

import { API, graphqlOperation } from "aws-amplify";

  let items
  let nextToken 

  onMount(async () => {
    getFormSubmissions()
  })

  async function getFormSubmissions(){
    const res = await queryItemsPart(listFormSubmissions, null, "listFormSubmissions", null);
    console.log('res',res)
    if (res.message === "success") {
      items = res.data.items
      nextToken = res.data.nextToken
    } else {
      items = null
      nextToken = null
    }
  }
</script>

<h2 on:click={getFormSubmissions}>test admin</h2>
{#if items}
<p>Form  Submissions</p>
<table>
  <tr>
    <td>Date</td>
    <td>Name</td>
    <td>Phone</td>
    <td>Email</td>
    <td>Message</td>
  </tr>
  {#each items as item}
  <tr class="bodyRow">
    <td>{formatDate(new Date(item.createdAt).getTime())}</td>
    <td>{item.name}</td>
    <td>{item.phone}</td>
    <td>{item.email}</td>
    <td>{item.message}</td>
  </tr>
{/each}
</table>


{/if}


<style>
  .bodyRow td{
    text-align: left;
  }
</style>