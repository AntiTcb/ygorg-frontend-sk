<script lang="ts">
  import Post from '$lib/components/Post';
  import { getAppSettings } from '$lib/stores/appSettings.svelte';
  import CheckIcon from '~icons/lucide/check';
  import type { PageData } from './$houdini';

  interface Props {
    data: PageData;
  }
  const { data }: Props = $props();

  const appSettings = getAppSettings();

  const { HomePagePosts } = $derived(data);
  const categories = $derived($HomePagePosts.data?.categories?.edges.map((edge) => edge.node) ?? []);
  const primaryCategories = $derived($HomePagePosts.data?.rootCategories?.edges.map((edge) => edge.node) ?? []);
  const selectedCategories = $derived(appSettings.homePageCategories);

  $inspect('selectedCategories', selectedCategories);

  const toggleCategory = async (category: string | null) => {
    appSettings.toggleCategory(category);
    await HomePagePosts.fetch({ variables: { categories: appSettings.homePageCategories } });
  };
</script>

<div class="flex gap-2 overflow-x-scroll py-2">
  {#each primaryCategories as category}
    <button type="button" class="chip preset-filled" onclick={() => toggleCategory(category.name)}>
      <span>{category.name}</span>
      {#if appSettings.homePageCategories.includes(category.name ?? '')}
        <CheckIcon />
      {/if}
    </button>
  {/each}
</div>

{#if $HomePagePosts.fetching}
  <p class="placeholder-background">Loading...</p>
{:else}
  {#each categories as category}
    {@const posts = category.posts?.edges.map((edge) => edge.node) ?? []}
    <div class="my-4 max-w-full rounded-md p-2 bg-surface-200-800 preset-outlined-primary-500">
      <h2 class="bg-background rounded-md px-2 py-1">{category.name} ({posts.length})</h2>
      <div class="flex w-full flex-row justify-start gap-2 overflow-x-scroll py-2">
        {#each posts as post}
          <div class="p-1">
            <Post.Preview {post} category={category.name} />
          </div>
        {/each}
      </div>
    </div>
  {/each}
{/if}
