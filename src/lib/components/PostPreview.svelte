<script lang="ts">
  import { type HomePagePosts$result } from '$houdini';

  type PostPreview = NonNullable<NonNullable<HomePagePosts$result['categories']>['edges'][number]['node']['posts']>['edges'][number]['node'];

  interface Props {
    post: PostPreview;
    category: string | null;
  }
  const { post, category, ...props }: Props = $props();
</script>

<!-- <a href={post.slug}>
  <div
    class="card grid min-h-[3in] w-[2in] transform grid-rows-[0.5fr_0.2fr_1.5in_auto_auto] border-8 border-secondary-500 bg-primary-500 text-black shadow-lg transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl md:min-h-[4in] md:w-[3in] md:grid-rows-[0.5fr_0.2fr_2in_auto_auto]">
    <div class="outset m-2 border-[3px] bg-primary-400 px-2 font-bold">{post.title}</div>
    <div class="m-0 mt-[-0.5rem] pr-4 text-right">
      {Math.floor(Math.random() * 12) + 1}
    </div>
    <div class="grid max-h-[2in] max-w-[2in] justify-self-center px-2">
      <img
        class="max-h-[inherit]"
        src={post.featuredImage?.node.mediaItemUrl ?? '/android-chrome-192x192.png'}
        alt={post.featuredImage?.node.altText ?? post.title} />
    </div>
    <div class="justify-self-end px-2 text-sm">{new Date(post.dateGmt!).toLocaleDateString()}</div>
    <div class="m-2 border-4 border-warning-700 bg-primary-200 px-1">
      <span class="text-sm font-bold">[{post.author?.node.name} / {category}]</span>
      {@html post.content?.split('!--more--').at(0) ?? 'Read more...'}
    </div>
  </div>
</a> -->

<a
  href={post.slug}
  class="card card-hover grid min-h-[3in] w-[2in] max-w-md grid-rows-[auto_1fr_auto] gap-2 divide-y divide-primary-500 overflow-hidden border-[4px] border-primary-500 preset-filled-surface-100-900 hover:shadow-xl md:min-h-[4in] md:w-[3in]">
  <header class="grid items-stretch p-2">
    <img
      data-height={post.featuredImage?.node.mediaDetails?.height}
      data-width={post.featuredImage?.node.mediaDetails?.width}
      src={post.featuredImage?.node.mediaItemUrl ?? '/android-chrome-192x192.png'}
      class=" w-full"
      alt={post.featuredImage?.node.altText ?? post.title} />
  </header>
  <article class="p-2">
    <div>
      <h2 class="h6 text-center">{post.title}</h2>
    </div>
    <div class="">
      {@html post.content?.split('<!--more-->').at(0) ?? 'Read more...'}
    </div>
  </article>
  <footer class="flex items-center justify-between gap-2 p-2">
    <small class="opacity-85">{post.author?.node.name} / {category}</small>
    <small class="italic opacity-85">{new Date(post.dateGmt!).toLocaleDateString()}</small>
  </footer>
</a>
