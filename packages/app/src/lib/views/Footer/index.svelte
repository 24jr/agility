<script>
// import { openModalTrigger } from "$lib/components/Auth/store";
import { goto } from "$app/navigation"

function mailto(){
    window.open('mailto:trose@agility-accounting.com', '_self');
  }
</script>

<div class="container">
  <div class="twogrid">
    <div class="textbox">
      <h4 class="headerText">Agility Accounting</h4>
      <h4 class="subText">agility-accounting.com</h4>
      <h4 class="subText">Powell, OH 43065</h4>
      <h4 class="subText pointer" on:click={mailto}>trose@agility-accounting.com</h4>
    </div>
    <div class="textbox">
      <!-- <h4 class="subText pointer" on:click={() => $openModalTrigger++}>Admin Login</h4> -->
      <h4 class="subText pointer" on:click={() => goto('/admin')}>Admin Page</h4>
    </div>
  </div>
</div>

<style>
  .container{
    background: var(--black-med);
    min-height: 20rem;
    padding: 1rem;
  }
  .twogrid {
    margin: .5rem;
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(clamp(24rem, 40%, 100%), 1fr)
    );
  }
  .textbox{
    text-align: left;
  }
  .headerText{
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--white-dark);
    margin: .2rem;
  }
  .subText{
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--white-dark);
    margin: .2rem;
  }
  .pointer{
    cursor: pointer;
  }
</style>