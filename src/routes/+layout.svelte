<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import { i18n } from '$lib/i18n';
  import { ParaglideJS } from '@inlang/paraglide-sveltekit';
  import '../app.postcss';
  let { children } = $props();
</script>

<ParaglideJS {i18n}>
  <Header />
  <main class="container bg-primary px-4 py-2">
    {@render children()}
  </main>
  <footer>Footer</footer>
</ParaglideJS>
