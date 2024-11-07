<script lang="ts">
  import { getDarkMode, getTheme, setTheme, toggleDarkMode } from '$lib/stores/localSettings.svelte';
  import LightOffIcon from '~icons/mdi/lightbulb-off';
  import LightOnIcon from '~icons/mdi/lightbulb-on';
  import { themes, type Themes } from '../../themes';

  let selectedTheme: Themes | undefined = $state();

  const handleThemeChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    selectedTheme = target.value as Themes;
    if (selectedTheme) {
      setTheme(selectedTheme);
      document.body.dataset.theme = selectedTheme;
    }
  };

  selectedTheme = getTheme();
  $effect.pre(() => {
    document.body.dataset.theme = selectedTheme;
  });

  const darkMode = $derived(getDarkMode());
</script>

<button id="lightswitch" class="btn hover:preset-tonal" onclick={toggleDarkMode}>
  {#if darkMode}
    <LightOnIcon />
  {:else}
    <LightOffIcon />
  {/if}
</button>
<select class="select" bind:value={selectedTheme} onchange={handleThemeChange}>
  {#each Object.keys(themes) as theme}
    <option value={theme} selected={theme === selectedTheme}>{theme.split('M').join(' M')}</option>
  {/each}
</select>
