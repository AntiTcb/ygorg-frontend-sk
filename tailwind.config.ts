import { skeleton } from '@skeletonlabs/skeleton/plugin';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { join } from 'path';
import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import { themes } from './src/themes';

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton-svelte'), '../**/*.{html,js,svelte,ts}')],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcssAnimate,
    forms,
    typography,
    skeleton({
      themes: [
        themes.NormalMonster,
        themes.EffectMonster,
        themes.FusionMonster,
        themes.SynchroMonster,
        themes.XyzMonster,
        themes.LinkMonster,
        themes.RitualMonster,
        themes.Spell,
        themes.Trap,
      ],
    }),
  ],
};

export default config;
