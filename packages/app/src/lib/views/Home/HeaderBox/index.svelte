<script>
  import { onMount, onDestroy } from "svelte"
  import { fade } from "svelte/transition"

const activities = [
  { index: 0, name: 'nature', imgfilename: 'nature' },
  { index: 1, name: 'skydiving', imgfilename: 'skydiving' },
  { index: 2, name: 'goals', imgfilename: 'goals' },
  { index: 3, name: 'skiing', imgfilename: 'skiing' },
  { index: 4, name: 'relaxing', imgfilename: 'relaxing' },
  { index: 5, name: 'snorkling', imgfilename: 'snorkling' },
]
const activitiesLen = activities.length
let currentIndex = 0
let activity = activities[currentIndex]
let shownActivityName = activity.name

let interval = null;
onMount(() => {
  interval = setInterval(() => {
    currentIndex = currentIndex < activitiesLen - 1 ? currentIndex + 1 : 0
    activity = activities[currentIndex]
  }, 5000);
})

onDestroy(() => {
  clearInterval(interval);
})

$: { currentIndex, activityTypewriter() }
let typewriterInterval = null;
function activityTypewriter(){
  const newName = activity.name
  const newNameLen = newName.length
  let isClearing = shownActivityName.length > 0
  let isAdding = shownActivityName.length < 1
  if(typewriterInterval){ clearInterval(typewriterInterval)}
  typewriterInterval = setInterval(() => {
    if(isClearing){
      shownActivityName = shownActivityName.slice(0,-1)
      isClearing = shownActivityName.length > 0
      isAdding = shownActivityName.length < 1
    } else if(isAdding){
      shownActivityName = newName.slice(0,shownActivityName.length + 1)
      isAdding = shownActivityName.length < newNameLen
    } else {
      clearInterval(typewriterInterval)
    }
  }, 100);
}
</script>

<div class="container">
	{#each activities as activity (activity.name)}
		{#if activity.index === currentIndex}
			<div
				transition:fade={{ duration: 1500 }}
				class="innerContainer"
				class:bgNature={activity.imgfilename === 'nature'}
				class:bgSkydiving={activity.imgfilename === 'skydiving'}
				class:bgGoals={activity.imgfilename === 'goals'}
				class:bgSkiing={activity.imgfilename === 'skiing'}
				class:bgRelaxing={activity.imgfilename === 'relaxing'}
				class:bgSnorkling={activity.imgfilename === 'snorkling'}
			/>
		{/if}
	{/each}
	<div class="textContainer">
		<div class="textInnerContainer">
			<h2 class="contentText">We'll do the accounting.</h2>
			<h2 class="contentText2">
				You focus on<br />
				<span class="activityText">{shownActivityName}</span>
			</h2>
		</div>
	</div>
</div>

<style>
	.container {
		height: 50vh;
		position: relative;
		margin: 2rem 2rem 1rem 2rem;
	}
	.innerContainer {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-size: cover !important;
		border-radius: 4rem;
		box-shadow: 0 0 1rem #cccccc20;
	}
	.bgNature {
		background: url('$lib/assets/static/photos/nature.webp');
	}
	.bgSkydiving {
		background: url('$lib/assets/static/photos/skydiving.webp');
	}
	.bgGoals {
		background: url('$lib/assets/static/photos/goals.webp');
	}
	.bgSkiing {
		background: url('$lib/assets/static/photos/skiing.webp');
	}
	.bgRelaxing {
		background: url('$lib/assets/static/photos/relaxing.webp');
	}
	.bgSnorkling {
		background: url('$lib/assets/static/photos/snorkling.webp');
	}
	.textContainer {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: left;
		z-index: 1;
		background: radial-gradient(#888888a0, transparent);
	}
	.textInnerContainer {
		width: 50rem;
		max-width: 90%;
		justify-self: center;
		align-self: center;
	}
	.contentText {
		font-size: 3rem;
		line-height: 4rem;
		color: #ffffff;
		max-width: 50rem;
	}
	.contentText2 {
		font-size: 4rem;
		line-height: 6rem;
		color: #ffffff;
		max-width: 50rem;
		margin: 2rem 0;
	}
	.activityText {
		background: var(--primary);
		padding: 0 1rem 0.5rem 1rem;
		border-radius: 1rem;
		font-weight: 600;
		font-size: 4rem;
		min-width: 20rem;
		max-width: 50rem;
	}
</style>
