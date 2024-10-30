<script lang="ts">
  import * as Card from '$lib/components/ui/card/index';
  import type { PageData } from './$houdini';

  interface Props {
    data: PageData;
  }
  let { data }: Props = $props();
  const { HomePagePosts } = $derived(data);
  const posts = $HomePagePosts.data?.posts;

  $inspect(posts);
</script>

{#each posts?.nodes ?? [] as post}
  <a href={post.slug}>
    <Card.Root>
      <Card.Header>
        <Card.Title>{post.title}</Card.Title>
        <Card.Description>by {post.author?.node.name}</Card.Description>
      </Card.Header>
      <Card.Content>{@html post.excerpt}</Card.Content>
    </Card.Root>
  </a>
{:else}
  <p>Loading...</p>
{/each}
