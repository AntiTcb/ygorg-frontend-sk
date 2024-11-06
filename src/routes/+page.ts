import { load_HomePagePosts } from '$houdini';

export const load = async (event) => {
  const categories = ['OCG & TCG', 'Duel Links', 'News'];
  return {
    ...(await load_HomePagePosts({ event, variables: { categories } })),
  };
};
