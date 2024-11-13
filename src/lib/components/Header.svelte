<script lang="ts">
  import { AppBar, Modal } from '@skeletonlabs/skeleton-svelte';
  import LoginIcon from '~icons/mdi/login';
  import SearchIcon from '~icons/mdi/magnify';
  import HamburgerIcon from '~icons/mdi/menu';
  import ThemeSwitcher from './ThemeSwitcher.svelte';

  let username = $state('');
  let password = $state('');

  const login = async () => {
    const res = await fetch('https://ygorganization.com/wp-json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    console.log(res);
    console.log(await res.json());
  };
</script>

<AppBar classes="!bg-secondary-500">
  {#snippet lead()}
    <a href="/" title="YGOrganization">
      <img src="/android-chrome-192x192.png" alt="YGOrganization Logo" class="h-8" />
    </a>
    <Modal
      triggerBase="preset-primary-500"
      contentBase="bg-surface-100-900 p-4 space-y-2 shadow-xl w-[60%] h-screen"
      positionerJustify="justify-start"
      positionerAlign=""
      positionerPadding="">
      {#snippet trigger()}
        <HamburgerIcon class="size-8" />
      {/snippet}
      {#snippet content()}
        <div class="hidden items-center gap-2 justify-self-center md:flex">
          <a href="/">News</a>
          <a href="/about">Creative Decks</a>
          <a href="/blog">Wiki</a>
          <a href="/contact">About</a>
        </div>
        <ThemeSwitcher />
      {/snippet}
    </Modal>
  {/snippet}
  {#snippet trail()}
    <span title="Search">
      <SearchIcon class="size-8" />
    </span>
    <span title="Login">
      <Modal
        triggerBase="preset-primary-500"
        contentBase="bg-surface-100-900 p-4 space-y-2 shadow-xl w-[60%] h-screen"
        positionerJustify="justify-end"
        positionerAlign=""
        positionerPadding="">
        {#snippet trigger()}
          <LoginIcon class="size-8" />
        {/snippet}
        {#snippet content()}
          <div>
            <input type="text" name="username" placeholder="Username" class="input" bind:value={username} />
            <input type="password" name="password" placeholder="Password" class="input" bind:value={password} />
            <button type="button" class="btn" onclick={login}>Login</button>
          </div>
        {/snippet}
      </Modal>
    </span>
  {/snippet}
</AppBar>
