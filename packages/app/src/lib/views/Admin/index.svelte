<script>
  import { openModalTrigger, isSignedIn } from "$lib/components/Auth/store";
  import { queryItemsPart, queryItem } from "$lib/funcs/gql";
  import { 
    ListFormSubmissions, 
    UpdateHasContacted, 
    UpdateIsInterested,
    UpdateNotes
  } from "./gql";
  import { onMount } from "svelte"
  import { formatDate } from "sveltekit-ui/funcs/general"
  // import { Button, ToggleInput, TextAreaInput, addAlert } from "sveltekit-ui"
  import Button from "sveltekit-ui/Button/index.svelte"
  import ToggleInput from "sveltekit-ui/Input/Toggle/index.svelte"
  import TextAreaInput from "sveltekit-ui/Input/TextArea/index.svelte"
  import { addAlert } from "sveltekit-ui/Alert/store"

  $: if(!$isSignedIn){ $openModalTrigger = $openModalTrigger + 1 }
  $: if($isSignedIn){ getFormSubmissions() }

  onMount(async () => {
    if($isSignedIn){ getFormSubmissions() }
  })

  let items
  let nextToken 

  async function getFormSubmissions(){
    const res = await queryItemsPart(ListFormSubmissions, null, "listFormSubmissions", null);
    console.log('res',res)
    if (res.message === "success") {
      items = res.data.items
      nextToken = res.data.nextToken
    } else {
      items = null
      nextToken = null
    }
  }

  async function toggleHasContacted(id,has_contacted,e){
    const input = {
      id: id,
      has_contacted: !has_contacted
    }
    console.log('input',input)
    const res = await queryItem(UpdateHasContacted, input, 'updateFormSubmission')
    console.log('res',res)
    if(res.message === 'success'){
      // const i = items.findIndex(h => h.id === id)
      // items[i] = res.data
      e.detail.incSuccessTrigger()
    } else {
      console.log('error')
      e.detail.incErrorTrigger()
    }
  }

  async function toggleIsInterested(id,is_interested,e){
    const input = {
      id: id,
      is_interested: !is_interested
    }
    const res = await queryItem(UpdateIsInterested, input, 'updateFormSubmission')
    console.log('res',res)
    if(res.message === 'success'){
      e.detail.incSuccessTrigger()
    } else {
      console.log('error')
      e.detail.incErrorTrigger()
    }
  }

  async function saveNote(id,notes){
    const input = {
      id: id,
      notes: notes
    }
    console.log('input',input)
    const res = await queryItem(UpdateNotes, input, 'updateFormSubmission')
    console.log('res',res)
    if(res.message === 'success'){
      console.log('success')
      const message = 'saved note: '+id
      addAlert('Note Saved', message, 'check')
    } else {
      console.log('error')
    }
  }

</script>

<div class="container">
	<Button type="outlined" text="Sign Out" on:click={() => $openModalTrigger++} />
	<h2 on:click={getFormSubmissions}>Form Submissions</h2>
	{#if items}
		<table>
			<tr>
				<td>Date</td>
				<td>Name</td>
				<td>Email</td>
				<td>Phone</td>
				<td>Message</td>
				<td>Contacted?</td>
				<td>Interested?</td>
				<td>Notes</td>
			</tr>
			{#each items as item}
				<tr class="bodyRow">
					<td>{formatDate(new Date(item.createdAt).getTime())}</td>
					<td>{item.name}</td>
					<td>{item.email}</td>
					<td>{item.phone}</td>
					<td>{item.message}</td>
					<td>
						<ToggleInput
							bind:val={item.has_contacted}
							isInstant={false}
							on:click={e => toggleHasContacted(item.id, item.has_contacted, e)}
						/>
					</td>
					<td>
						<ToggleInput
							bind:val={item.is_interested}
							isInstant={false}
							on:click={e => toggleIsInterested(item.id, item.is_interested, e)}
						/>
					</td>
					<td>
						<TextAreaInput bind:val={item.notes} />
						<Button
							type="outlined"
							minHeight={0}
							text="Save Note"
							on:click={() => saveNote(item.id, item.notes)}
						/>
					</td>
				</tr>
			{/each}
		</table>
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-height: 80vh;
	}
	.bodyRow td {
		text-align: left;
	}
</style>
