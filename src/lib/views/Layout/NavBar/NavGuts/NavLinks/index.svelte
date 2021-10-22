<script>
  import NavLink from "./NavLink/index.svelte";
  import AuthLink from "./AuthLink/index.svelte";

  const shownLinks = [
    { name: "Dashboard", path: "/" },
    { name: "Data", path: "/data/coin/list" },
    { name: 'Settings', path: '/settings', subLinks: [
      { name: 'Profile', path: '/profile' },
    ]},
  ];
</script>

<div class="fullnavContainer">
  <div class="innerNavContainer">
    {#each shownLinks as link (link.name)}
      <NavLink {link} />
    {/each}
    <AuthLink />
  </div>
</div>

<style>
  .fullnavContainer {
    display: flex;
    justify-content: center;
    overflow-x: scroll;
  }
  .innerNavContainer {
    display: flex;
    flex-direction: row;
  }
</style>
