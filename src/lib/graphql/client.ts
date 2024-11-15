import { PUBLIC_WP_URL } from '$env/static/public';
import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
  url: `${PUBLIC_WP_URL}/graphql`,
  fetchParams() {
    return {
      headers: {
        'GraphQL-Preflight': '1',
      },
    };
  },
});
