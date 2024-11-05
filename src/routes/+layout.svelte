<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import { i18n } from '$lib/i18n';
  import { ParaglideJS } from '@inlang/paraglide-sveltekit';
  import '../app.postcss';
  let { children } = $props();
</script>

<ParaglideJS {i18n}>
  <Header />
  <main class="container bg-secondary px-4">
    {@render children()}
  </main>
  <footer>Footer</footer>
</ParaglideJS>
