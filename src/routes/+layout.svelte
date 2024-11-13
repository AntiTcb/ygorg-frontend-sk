<script lang="ts">
  import { navigating } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import { i18n } from '$lib/i18n';
  import { ParaglideJS } from '@inlang/paraglide-sveltekit';
  import '../app.postcss';
  let { children } = $props();
</script>

<ParaglideJS {i18n}>
  <Header />
  <main class="px-4 py-2 bg-secondary-200-800">
    {#if $navigating}
      <p>Loading...</p>
    {:else}
      {@render children()}
    {/if}
  </main>
  <footer>Footer</footer>
</ParaglideJS>
