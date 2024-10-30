<script lang="ts">
  import type { PageData } from './$houdini';

  interface Props {
    data: PageData;
  }
  let { data }: Props = $props();
  const { Post } = $derived(data);

  const post = $Post.data?.post;
  $inspect(post);
</script>

<h1>{post?.title}</h1>
<h3>by {post?.author?.node.name}</h3>
{@html post?.content}
