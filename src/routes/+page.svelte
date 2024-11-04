<script lang="ts">
  import { badgeVariants } from '$lib/components/ui/badge/badge.svelte';
  import * as Card from '$lib/components/ui/card/index';
  import type { PageData } from './$houdini';

  interface Props {
    data: PageData;
  }
  let { data }: Props = $props();
  const { HomePagePosts } = $derived(data);
  const categories = $derived($HomePagePosts.data?.categories?.edges.map((edge) => edge.node) ?? []);
  const posts = $derived(categories.map((category) => category.posts?.nodes ?? []).flat());

  const homePageCategories = ['OCG & TCG', 'Duel Links', 'Rush Duel', 'News', 'New Cards'];

  $inspect(posts);
</script>

<div class="flex flex-col flex-wrap">
  {#each categories as category}
    <div class="my-4">
      <h2>{category.name} ({category.posts?.nodes.length})</h2>
      <section class="grid grid-cols-5 gap-4">
        {#each category.posts?.nodes ?? [] as post}
          <a href={post.slug}>
            <Card.Root>
              <Card.Header>
                <Card.Title>{post.title}</Card.Title>
                <Card.Description>by {post.author?.node.name}</Card.Description>
                <Card.Description>
                  {#each post.categories?.nodes ?? [] as postCategory}
                    <a
                      href="category/{postCategory.slug}"
                      class={badgeVariants({ variant: postCategory.name === category.name ? 'default' : 'outline' })}>{postCategory.name}</a>
                  {/each}
                </Card.Description>
              </Card.Header>
              <Card.Content>
                <img class="rounded-md object-cover" src={post.featuredImage?.node.mediaItemUrl} alt="test" />
                {@html post.excerpt}
              </Card.Content>
            </Card.Root>
          </a>
        {:else}
          <p>No posts</p>
        {/each}
      </section>
    </div>
  {/each}
</div>
