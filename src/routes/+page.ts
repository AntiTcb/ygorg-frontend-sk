import { load_HomePagePosts } from '$houdini';
export const ssr = false;

export const load = async (event) => {
  const categories: string[] = [];
  return {
    ...(await load_HomePagePosts({ event, variables: { categories } })),
  };
};
