<script lang="ts">
  import { graphql } from '$houdini';
  import { Button } from '$lib/components/ui/button';

  interface Props {
    category: string | null;
  }

  const { category = $bindable() }: Props = $props();

  const postsQuery = graphql(`
    query PostsByCategory($category: String) {
      posts(where: { categoryName: $category }, first: 10) @paginate {
        edges {
          cursor
          node {
            databaseId
            title
            slug
            content
            author {
              node {
                name
                uri
              }
            }
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
    }
  `);
  export const _PostsByCategoryVariables = () => ({ category });
  $inspect('variables', _PostsByCategoryVariables());

  const posts = $derived($postsQuery.data?.posts?.edges.map((edge) => edge.node) ?? []);
  $inspect(`${category} posts`, posts);

  $effect(() => {
    postsQuery.fetch({ variables: { category } });
  });
</script>

{#await postsQuery.fetch({ variables: { category } })}
  <p>Loading...</p>
{:then}
  <p class="rounded-md bg-background p-2">{category} ({posts?.length})</p>
  {#each posts as post}
    <p>{post.title}</p>
  {/each}
  {#if $postsQuery.pageInfo.hasNextPage}
    <Button type="button" onclick={() => postsQuery.loadNextPage()}>Load more</Button>
  {/if}
{/await}
