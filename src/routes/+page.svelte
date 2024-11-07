<script lang="ts">
  import PostPreview from '$lib/components/PostPreview.svelte';
  import type { PageData } from './$houdini';

  interface Props {
    data: PageData;
  }
  const { data }: Props = $props();

  const { HomePagePosts } = $derived(data);
  const categories = $derived($HomePagePosts.data?.categories?.edges.map((edge) => edge.node) ?? []);
</script>

{#if $HomePagePosts.fetching}
  <p class="placeholder-background">Loading...</p>
{:else}
  {#each categories as category}
    {@const posts = category.posts?.edges.map((edge) => edge.node) ?? []}
    <div class="my-4 rounded-md bg-secondary-800 p-2">
      <h2 class="bg-background rounded-md px-2 py-1">{category.name} ({posts.length})</h2>
      <div class="flex w-full flex-row justify-start overflow-x-scroll py-2">
        {#each posts as post}
          <div class="p-1">
            <PostPreview {post} category={category.name} />
          </div>
        {/each}
      </div>
    </div>
  {/each}
{/if}
