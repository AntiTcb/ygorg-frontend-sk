<script lang="ts">
  import { type HomePagePosts$result } from '$houdini';
  import * as Card from '$lib/components/ui/card';

  type PostPreview = HomePagePosts$result['categories']['edges'][number]['node']['posts']['nodes'][number];

  interface Props {
    post: PostPreview;
  }
  const { post }: Props = $props();
</script>

<Card.Root class="aspect-[4/3] h-[400px] max-w-[300px] rounded-md">
  <Card.Header>
    <Card.Title>{post.title}</Card.Title>
  </Card.Header>
</Card.Root>
