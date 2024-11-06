<script lang="ts">
  import PostPreview from '$lib/components/PostPreview.svelte';
  import * as Carousel from '$lib/components/ui/carousel';
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
    <div class="flex flex-col items-center justify-center py-2">
      <h2 class="rounded-md bg-background px-2 py-1">{category.name} ({posts.length})</h2>
      <Carousel.Root opts={{ align: 'start' }} class="w-[95%]">
        <Carousel.Content class="-ml-2">
          {#each posts as post}
            <Carousel.Item class="pl-2 md:basis-1/2 lg:basis-1/4">
              <div class="p-1">
                <PostPreview {post} category={category.name} />
              </div>
            </Carousel.Item>
          {/each}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </Carousel.Root>
    </div>
  {/each}
{/if}
