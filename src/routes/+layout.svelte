<script lang="ts">
  import { i18n } from '$lib/i18n';
  import { ParaglideJS } from '@inlang/paraglide-sveltekit';
  import '../app.postcss';
  let { children } = $props();
</script>

<ParaglideJS {i18n}>
  <header class="sticky top-0">
    <div class="bg-secondary">(Header)</div>
  </header>
  <main class="container bg-primary">
    {@render children()}
  </main>
  <footer>Footer</footer>
</ParaglideJS>
