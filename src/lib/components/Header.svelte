<script lang="ts">
  import { AppBar } from '@skeletonlabs/skeleton-svelte';
  import LoginIcon from '~icons/mdi/login';
  import SearchIcon from '~icons/mdi/magnify';
  import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<AppBar classes="!bg-secondary-500">
  {#snippet lead()}
    <a href="/" title="YGOrganization">
      <img src="/android-chrome-192x192.png" alt="YGOrganization Logo" class="h-8" />
    </a>
  {/snippet}
  <div class="flex items-center gap-2 justify-self-center">
    <a href="/">News</a>
    <a href="/about">Creative Decks</a>
    <a href="/blog">Wiki</a>
    <a href="/contact">About</a>
  </div>
  {#snippet trail()}
    <ThemeSwitcher />
    <span title="Search">
      <SearchIcon class="size-8" />
    </span>
    <span title="Login">
      <LoginIcon class="size-8" />
    </span>
  {/snippet}
</AppBar>
