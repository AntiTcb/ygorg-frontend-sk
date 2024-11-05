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
  <p class=" placeholder-background">Loading...</p>
{:else}
  {#each categories as category}
    {@const posts = category.posts?.edges.map((edge) => edge.node) ?? []}
    <div class="w-full">
      <h2 class="rounded-md bg-background px-2 py-1">{category.name} ({posts.length})</h2>
      <div class="flex gap-4 overflow-x-scroll">
        {#each posts as post}
          <PostPreview {post} />
        {/each}
      </div>
    </div>
  {/each}
{/if}
