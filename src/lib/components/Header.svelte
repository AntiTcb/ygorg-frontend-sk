<script lang="ts">
  import { getAuth } from '$lib/stores/auth.svelte';
  import { AppBar, Modal, type ToastContext, Tooltip } from '@skeletonlabs/skeleton-svelte';
  import { getContext } from 'svelte';
  import LoginIcon from '~icons/mdi/login';
  import LogoutIcon from '~icons/mdi/logout';
  import SearchIcon from '~icons/mdi/magnify';
  import HamburgerIcon from '~icons/mdi/menu';
  import Login from './Login.svelte';
  import ThemeSwitcher from './ThemeSwitcher.svelte';

  const authStore = getAuth();
  const toast = getContext<ToastContext>('toast');

  const logout = () => {
    authStore.logout();
    if (!authStore.user) {
      toast.create({
        title: 'Successfully logged out',
        type: 'success',
      });
    }
  };
</script>

<AppBar classes="!bg-secondary-500 py-2" toolbarGap="gap-2" leadClasses="items-center" trailClasses="items-center">
  {#snippet lead()}
    <a href="/" title="YGOrganization">
      <img src="/android-chrome-192x192.png" alt="YGOrganization Logo" class="h-10" />
    </a>
    <Modal
      triggerBase="preset-primary-500"
      triggerClasses="flex"
      contentBase="bg-surface-100-900 p-4 space-y-2 shadow-xl w-[40%] h-screen"
      positionerJustify="justify-start"
      positionerAlign=""
      positionerPadding=""
      transitionsPositionerIn={{ x: -200, duration: 200 }}
      transitionsPositionerOut={{ x: -200, duration: 200 }}>
      {#snippet trigger()}
        <Tooltip openDelay={200} contentBase="card bg-surface-500 p-2" triggerClasses="flex">
          {#snippet trigger()}
            <HamburgerIcon class="size-10 hover:text-primary-500" />
          {/snippet}
          {#snippet content()}<p>Menu</p>{/snippet}
        </Tooltip>
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
      <Tooltip openDelay={200} contentBase="card bg-surface-500 p-2" triggerClasses="flex">
        {#snippet trigger()}
          <SearchIcon class="size-10" />
        {/snippet}
        {#snippet content()}<p>Search</p>{/snippet}
      </Tooltip>
    </span>
    {#if authStore.user}
      <!-- TODO: User Menu component -->
      <p>Hi {authStore.user.displayName}</p>
      <button onclick={logout}>
        <LogoutIcon class="size-10" />
      </button>
    {:else}
      <span title="Login">
        <Modal
          triggerBase="preset-primary-500"
          contentBase="bg-surface-100-900 p-4 space-y-2 shadow-xl w-[40%] h-screen"
          positionerJustify="justify-end"
          positionerAlign=""
          positionerPadding=""
          transitionsPositionerIn={{ x: 200, duration: 200 }}
          transitionsPositionerOut={{ x: 200, duration: 200 }}>
          {#snippet trigger()}
            <LoginIcon class="size-8" />
          {/snippet}
          {#snippet content()}
            <Login />
          {/snippet}
        </Modal>
      </span>
    {/if}
  {/snippet}
</AppBar>
