<script lang="ts">
  import LoginIcon from '~icons/mdi/login';
</script>

<header class="sticky top-0 z-30 h-12 gap-4 bg-primary px-2">
  <nav class="grid grid-cols-[auto,1fr,auto] items-center gap-2">
    <a href="/">
      <img src="/android-chrome-192x192.png" alt="YGOrganization Logo" class="h-8" />
    </a>
    <div class="flex items-center gap-2 justify-self-center">
      <a href="/">News</a>
      <a href="/about">Creative Decks</a>
      <a href="/blog">Wiki</a>
      <a href="/contact">About</a>
    </div>
    <LoginIcon class="size-8" />
  </nav>
</header>
