/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
  watchSchema: {
    url(env) {
      return `${env.PUBLIC_WP_URL}/graphql`;
    },
    interval: 0,
    headers: {
      'GraphQL-Preflight': '1',
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: {
    'houdini-svelte': {
      client: 'src/lib/graphql/client',
    },
    'houdini-plugin-svelte-global-stores': {
      prefix: 'GQL_',
      generate: ['mutation', 'subscription', 'fragment'],
    },
  },
  schemaPath: 'src/lib/graphql/schema.graphql',
  features: {
    imperativeCache: true,
  },
};

export default config;
