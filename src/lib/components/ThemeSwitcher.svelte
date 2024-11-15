<script lang="ts">
  import { getAppSettings } from '$lib/stores/appSettings.svelte';
  import { Tooltip } from '@skeletonlabs/skeleton-svelte';
  import LightOffIcon from '~icons/mdi/moon-waxing-crescent';
  import LightOnIcon from '~icons/solar/sun-2-bold-duotone';
  import { themes, type Themes } from '../../themes';

  const appSettings = getAppSettings();

  let selectedTheme: Themes | undefined = $state(appSettings.theme);
  $inspect('selectedTheme', selectedTheme);

  const handleThemeChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    selectedTheme = target.value as Themes;
    if (selectedTheme) {
      appSettings.theme = selectedTheme;
      document.body.dataset.theme = selectedTheme;
    }
  };

  $effect.pre(() => {
    document.body.dataset.theme = selectedTheme;
  });

  const darkMode = $derived(appSettings.darkMode);
</script>

<Tooltip openDelay={200} contentBase="card bg-surface-500 p-1" triggerClasses="flex">
  {#snippet trigger()}
    <button id="lightswitch" class="btn hover:preset-tonal" onclick={() => (appSettings.darkMode = !darkMode)}>
      {#key darkMode}
        {#if darkMode}
          <LightOffIcon class="size-8" />
        {:else}
          <LightOnIcon class="size-8" />
        {/if}
      {/key}
    </button>
  {/snippet}
  {#snippet content()}<p>Toggle Dark Mode</p>{/snippet}
</Tooltip>
<select class="select" bind:value={selectedTheme} onchange={handleThemeChange}>
  {#each Object.keys(themes) as theme}
    <option value={theme} selected={theme === selectedTheme}>{theme.split('M').join(' M')}</option>
  {/each}
</select>
