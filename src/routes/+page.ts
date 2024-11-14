import { browser } from '$app/environment';
import { load_HomePagePosts } from '$houdini';

export const ssr = false;

export const load = async (event) => {
  const categories: string[] = [];
  if (browser) {
    categories.push(...(JSON.parse(localStorage.getItem('appSettings') ?? '{}').homePageCategories ?? []));
  }
  return {
    ...(await load_HomePagePosts({ event, variables: { categories } })),
  };
};
