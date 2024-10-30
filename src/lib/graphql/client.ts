import { PUBLIC_WP_GQL_URL } from '$env/static/public';
import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
  url: `${PUBLIC_WP_GQL_URL}`,
  fetchParams() {
    return {
      headers: {
        'GraphQL-Preflight': '1',
      },
    };
  },
});
