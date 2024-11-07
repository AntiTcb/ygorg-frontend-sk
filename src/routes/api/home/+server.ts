import { HomePagePostsStore } from '$houdini';
import { json } from '@sveltejs/kit';

export const GET = async (event) => {
  const categories = ['OCG & TCG', 'Duel Links', 'Rush Duel', 'News', 'New Cards'];
  const q = new HomePagePostsStore();
  const { data, errors } = await q.fetch({ event, variables: { categories } });

  console.error('api/home error', errors);

  return json({ data });
};
