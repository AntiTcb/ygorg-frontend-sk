<script lang="ts">
  import { navigating } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import { i18n } from '$lib/i18n';
  import { setAppSettings } from '$lib/stores/appSettings.svelte';
  import { setAuth } from '$lib/stores/auth.svelte';
  import { ParaglideJS } from '@inlang/paraglide-sveltekit';
  import { ToastProvider } from '@skeletonlabs/skeleton-svelte';
  import '../app.postcss';

  let { children } = $props();

  setAuth();
  setAppSettings();
</script>

<ToastProvider placement="top-end">
  <ParaglideJS {i18n}>
    <Header />
    <main class="px-4 py-2 bg-secondary-200-800">
      {#if $navigating}
        <p>Loading...</p>
      {:else}
        {@render children()}
      {/if}
    </main>
    <!-- <footer>Footer</footer> -->
  </ParaglideJS>
</ToastProvider>
