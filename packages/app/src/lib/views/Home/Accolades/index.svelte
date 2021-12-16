<script>
  import Cpa from "$lib/assets/static/random/Cpa/index.svelte"
  import Experience from "$lib/assets/static/random/Experience/index.svelte"
  import quickbooks_cert_src from '$lib/assets/static/photos/quickbooks_cert.png'
  import video_meeting_src from '$lib/assets/static/photos/video_meeting.jpg'
  import IntersectionObserver from "$lib/components/IntersectionObserver/index.svelte"
  import { fade } from "svelte/transition"
</script>

<div class="twogrid">
  <IntersectionObserver only_once="true">
    <div transition:fade={{duration: 1000}}>
      <img src={quickbooks_cert_src} alt="quickbooks_cert" height="200" width="auto" class="imgsty" />
    </div>
  </IntersectionObserver>
  <div class="textContainer">
    <h3 class="headerText">Credibility</h3>
    <p class="subText">Don't let a mistake put you your business at risk</p>
  </div>
</div>

<div class="twogrid reverse">
  <IntersectionObserver only_once="true">
    <div transition:fade={{duration: 1000}}>
      <Experience size="14" />
    </div>
  </IntersectionObserver>
  <div class="textContainer">
    <h3 class="headerText">Experience</h3>
    <p class="subText">This what we do and have been doing for 25+ years</p>
  </div>
</div>

<div class="twogrid">
  <IntersectionObserver only_once="true">
    <div class="cardns vidMeetBox" transition:fade={{duration: 1000}}>
      <img src={video_meeting_src} alt="video_meeting" height="200" width="auto" class="imgcovsty" />
    </div>
  </IntersectionObserver>
  <div class="textContainer">
    <h3 class="headerText">Personable</h3>
    <p class="subText">Direct communication with your accountant. No robots or hoops to jump though.</p>
  </div>
</div>

<style>
  .imgsty{
    object-fit: contain;
    margin: 1rem;
  }
  .imgcovsty{
    /* object-fit: cover; */
    object-fit: contain;
  }
  .vidMeetBox{
    max-height: 20rem;
    width: 30rem;
    overflow: hidden;
    margin: auto;
  }
  .twogrid {
    margin: .5rem;
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(clamp(24rem, 40%, 100%), 1fr)
    );
  }
  .reverse{
    /* flex-direction: grid-reverse; */
    grid-auto-flow: dense;
  }
  .textContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 24rem;
    margin: auto;
  }
  .headerText{
    font-size: 2.4rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
  }
  .subText{
font-size: 2rem;
  }
</style>