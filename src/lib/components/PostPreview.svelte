<script lang="ts">
  import { type HomePagePosts$result } from '$houdini';
  import * as Card from '$lib/components/ui/card';

  type PostPreview = NonNullable<NonNullable<HomePagePosts$result['categories']>['edges'][number]['node']['posts']>['edges'][number]['node'];

  interface Props {
    post: PostPreview;
    category: string | null;
  }
  const { post, category, ...props }: Props = $props();
</script>

<Card.Root class="grid-rows-[0.4fr, 1.3fr, 1.3fr] grid aspect-[4/3] h-[4in] w-[3in] items-stretch rounded-md border-8 border-gray-700 " {...props}>
  <Card.Header class="inset-3 px-4 py-2">
    <Card.Title class="text-md break-words">{post.title}</Card.Title>
    <Card.Description class="py-0 text-right text-sm">{Math.floor(Math.random() * 12) + 1}</Card.Description>
  </Card.Header>
  <Card.Content class="text-center">
    <img class="max-h-28" src={post.featuredImage?.node.mediaItemUrl} alt={post.title} />
  </Card.Content>
  <Card.Footer class="m-0 flex-grow flex-col items-stretch px-2 py-1">
    <p class="pr-2 text-right text-xs">{new Date(post.dateGmt!).toLocaleDateString()}</p>
    <div class="border-4 border-yellow-900 p-2">
      <div class="self-start text-xs font-bold dark:text-gray-400">[{post.author?.node.name} / {category}]</div>
      <p class="text-sm">{@html post.content?.split('<!--more-->').at(0) ?? 'Read more...'}</p>
    </div>
  </Card.Footer>
</Card.Root>
