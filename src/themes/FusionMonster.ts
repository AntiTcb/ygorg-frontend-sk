import type { Theme } from '@skeletonlabs/skeleton/themes';

const FusionMonster = {
  name: 'FusionMonster',
  properties: {
    '--type-scale-factor': '1.125',
    '--type-scale-1': 'calc(0.75rem * var(--type-scale-factor))',
    '--type-scale-2': 'calc(0.875rem * var(--type-scale-factor))',
    '--type-scale-3': 'calc(1rem * var(--type-scale-factor))',
    '--type-scale-4': 'calc(1.125rem * var(--type-scale-factor))',
    '--type-scale-5': 'calc(1.25rem * var(--type-scale-factor))',
    '--type-scale-6': 'calc(1.5rem * var(--type-scale-factor))',
    '--type-scale-7': 'calc(1.875rem * var(--type-scale-factor))',
    '--type-scale-8': 'calc(2.25rem * var(--type-scale-factor))',
    '--type-scale-9': 'calc(3rem * var(--type-scale-factor))',
    '--type-scale-10': 'calc(3.75rem * var(--type-scale-factor))',
    '--type-scale-11': 'calc(4.5rem * var(--type-scale-factor))',
    '--type-scale-12': 'calc(6rem * var(--type-scale-factor))',
    '--type-scale-13': 'calc(8rem * var(--type-scale-factor))',
    '--base-font-color': 'var(--color-surface-950)',
    '--base-font-color-dark': 'var(--color-surface-50)',
    '--base-font-family':
      'ui-rounded, Hiragino Maru Gothic ProN, Quicksand, Comfortaa, Manjari, Arial Rounded MT, Arial Rounded MT Bold, Calibri, source-sans-pro, sans-serif',
    '--base-font-size': 'inherit',
    '--base-line-height': '28px',
    '--base-font-weight': 'normal',
    '--base-font-style': 'normal',
    '--base-letter-spacing': '-0.025em',
    '--heading-font-color': 'inherit',
    '--heading-font-color-dark': 'inherit',
    '--heading-font-family': 'inherit',
    '--heading-font-weight': 'bold',
    '--heading-font-style': 'normal',
    '--heading-letter-spacing': 'inherit',
    '--anchor-font-color': 'var(--color-primary-500)',
    '--anchor-font-color-dark': 'var(--color-primary-500)',
    '--anchor-font-family': 'inherit',
    '--anchor-font-size': 'inherit',
    '--anchor-line-height': 'inherit',
    '--anchor-font-weight': 'inherit',
    '--anchor-font-style': 'inherit',
    '--anchor-letter-spacing': 'inherit',
    '--anchor-text-decoration': 'none',
    '--anchor-text-decoration-hover': 'underline',
    '--anchor-text-decoration-active': 'none',
    '--anchor-text-decoration-focus': 'none',
    '--space-scale-factor': '0.85',
    '--radii-default': '4px',
    '--radii-container': '4px',
    '--border-width-default': '6px',
    '--divide-width-default': '1px',
    '--outline-width-default': '2px',
    '--ring-width-default': '2px',
    '--body-background-color': 'var(--color-surface-100)',
    '--body-background-color-dark': 'var(--color-surface-900)',
    '--color-primary-50': '255 255 255',
    '--color-primary-100': '236 231 241',
    '--color-primary-200': '217 207 226',
    '--color-primary-300': '198 182 212',
    '--color-primary-400': '179 158 197',
    '--color-primary-500': '160 134 183',
    '--color-primary-600': '138 113 160',
    '--color-primary-700': '115 92 137',
    '--color-primary-800': '93 70 115',
    '--color-primary-900': '70 49 92',
    '--color-primary-950': '48 28 69',
    '--color-primary-contrast-dark': 'var(--color-primary-950)',
    '--color-primary-contrast-light': 'var(--color-primary-50)',
    '--color-primary-contrast-50': 'var(--color-primary-contrast-dark)',
    '--color-primary-contrast-100': 'var(--color-primary-contrast-dark)',
    '--color-primary-contrast-200': 'var(--color-primary-contrast-dark)',
    '--color-primary-contrast-300': 'var(--color-primary-contrast-dark)',
    '--color-primary-contrast-400': 'var(--color-primary-contrast-dark)',
    '--color-primary-contrast-500': 'var(--color-primary-contrast-dark)',
    '--color-primary-contrast-600': 'var(--color-primary-contrast-dark)',
    '--color-primary-contrast-700': 'var(--color-primary-contrast-light)',
    '--color-primary-contrast-800': 'var(--color-primary-contrast-light)',
    '--color-primary-contrast-900': 'var(--color-primary-contrast-light)',
    '--color-primary-contrast-950': 'var(--color-primary-contrast-light)',
    '--color-secondary-50': '154 171 203',
    '--color-secondary-100': '131 149 180',
    '--color-secondary-200': '109 126 156',
    '--color-secondary-300': '86 104 133',
    '--color-secondary-400': '64 81 109',
    '--color-secondary-500': '41 59 86',
    '--color-secondary-600': '33 47 69',
    '--color-secondary-700': '25 35 52',
    '--color-secondary-800': '16 24 34',
    '--color-secondary-900': '8 12 17',
    '--color-secondary-950': '0 0 0',
    '--color-secondary-contrast-dark': 'var(--color-secondary-950)',
    '--color-secondary-contrast-light': 'var(--color-secondary-50)',
    '--color-secondary-contrast-50': 'var(--color-secondary-contrast-dark)',
    '--color-secondary-contrast-100': 'var(--color-secondary-contrast-dark)',
    '--color-secondary-contrast-200': 'var(--color-secondary-contrast-dark)',
    '--color-secondary-contrast-300': 'var(--color-secondary-contrast-dark)',
    '--color-secondary-contrast-400': 'var(--color-secondary-contrast-light)',
    '--color-secondary-contrast-500': 'var(--color-secondary-contrast-light)',
    '--color-secondary-contrast-600': 'var(--color-secondary-contrast-light)',
    '--color-secondary-contrast-700': 'var(--color-secondary-contrast-light)',
    '--color-secondary-contrast-800': 'var(--color-secondary-contrast-light)',
    '--color-secondary-contrast-900': 'var(--color-secondary-contrast-light)',
    '--color-secondary-contrast-950': 'var(--color-secondary-contrast-light)',
    '--color-tertiary-50': '255 181 126',
    '--color-tertiary-100': '232 158 104',
    '--color-tertiary-200': '209 135 82',
    '--color-tertiary-300': '185 111 59',
    '--color-tertiary-400': '162 88 37',
    '--color-tertiary-500': '139 65 15',
    '--color-tertiary-600': '120 52 12',
    '--color-tertiary-700': '102 39 9',
    '--color-tertiary-800': '83 26 6',
    '--color-tertiary-900': '65 13 3',
    '--color-tertiary-950': '46 0 0',
    '--color-tertiary-contrast-dark': 'var(--color-tertiary-950)',
    '--color-tertiary-contrast-light': 'var(--color-tertiary-50)',
    '--color-tertiary-contrast-50': 'var(--color-tertiary-contrast-dark)',
    '--color-tertiary-contrast-100': 'var(--color-tertiary-contrast-dark)',
    '--color-tertiary-contrast-200': 'var(--color-tertiary-contrast-dark)',
    '--color-tertiary-contrast-300': 'var(--color-tertiary-contrast-dark)',
    '--color-tertiary-contrast-400': 'var(--color-tertiary-contrast-light)',
    '--color-tertiary-contrast-500': 'var(--color-tertiary-contrast-light)',
    '--color-tertiary-contrast-600': 'var(--color-tertiary-contrast-light)',
    '--color-tertiary-contrast-700': 'var(--color-tertiary-contrast-light)',
    '--color-tertiary-contrast-800': 'var(--color-tertiary-contrast-light)',
    '--color-tertiary-contrast-900': 'var(--color-tertiary-contrast-light)',
    '--color-tertiary-contrast-950': 'var(--color-tertiary-contrast-light)',
    '--color-success-50': '162 253 130',
    '--color-success-100': '135 228 104',
    '--color-success-200': '107 203 78',
    '--color-success-300': '80 178 52',
    '--color-success-400': '52 153 26',
    '--color-success-500': '25 128 0',
    '--color-success-600': '20 108 0',
    '--color-success-700': '15 88 0',
    '--color-success-800': '10 68 0',
    '--color-success-900': '5 48 0',
    '--color-success-950': '0 28 0',
    '--color-success-contrast-dark': 'var(--color-success-950)',
    '--color-success-contrast-light': 'var(--color-success-50)',
    '--color-success-contrast-50': 'var(--color-success-contrast-dark)',
    '--color-success-contrast-100': 'var(--color-success-contrast-dark)',
    '--color-success-contrast-200': 'var(--color-success-contrast-dark)',
    '--color-success-contrast-300': 'var(--color-success-contrast-dark)',
    '--color-success-contrast-400': 'var(--color-success-contrast-light)',
    '--color-success-contrast-500': 'var(--color-success-contrast-light)',
    '--color-success-contrast-600': 'var(--color-success-contrast-light)',
    '--color-success-contrast-700': 'var(--color-success-contrast-light)',
    '--color-success-contrast-800': 'var(--color-success-contrast-light)',
    '--color-success-contrast-900': 'var(--color-success-contrast-light)',
    '--color-success-contrast-950': 'var(--color-success-contrast-light)',
    '--color-warning-50': '255 255 202',
    '--color-warning-100': '255 244 177',
    '--color-warning-200': '255 232 152',
    '--color-warning-300': '255 221 127',
    '--color-warning-400': '255 209 102',
    '--color-warning-500': '255 198 77',
    '--color-warning-600': '228 175 62',
    '--color-warning-700': '201 152 46',
    '--color-warning-800': '175 129 31',
    '--color-warning-900': '148 106 15',
    '--color-warning-950': '121 83 0',
    '--color-warning-contrast-dark': 'var(--color-warning-950)',
    '--color-warning-contrast-light': 'var(--color-warning-50)',
    '--color-warning-contrast-50': 'var(--color-warning-contrast-dark)',
    '--color-warning-contrast-100': 'var(--color-warning-contrast-dark)',
    '--color-warning-contrast-200': 'var(--color-warning-contrast-dark)',
    '--color-warning-contrast-300': 'var(--color-warning-contrast-dark)',
    '--color-warning-contrast-400': 'var(--color-warning-contrast-dark)',
    '--color-warning-contrast-500': 'var(--color-warning-contrast-dark)',
    '--color-warning-contrast-600': 'var(--color-warning-contrast-dark)',
    '--color-warning-contrast-700': 'var(--color-warning-contrast-light)',
    '--color-warning-contrast-800': 'var(--color-warning-contrast-light)',
    '--color-warning-contrast-900': 'var(--color-warning-contrast-light)',
    '--color-warning-contrast-950': 'var(--color-warning-contrast-light)',
    '--color-error-50': '255 145 111',
    '--color-error-100': '234 119 90',
    '--color-error-200': '213 93 68',
    '--color-error-300': '191 66 47',
    '--color-error-400': '170 40 25',
    '--color-error-500': '149 14 4',
    '--color-error-600': '131 11 3',
    '--color-error-700': '112 8 2',
    '--color-error-800': '94 6 2',
    '--color-error-900': '75 3 1',
    '--color-error-950': '57 0 0',
    '--color-error-contrast-dark': 'var(--color-error-950)',
    '--color-error-contrast-light': 'var(--color-error-50)',
    '--color-error-contrast-50': 'var(--color-error-contrast-dark)',
    '--color-error-contrast-100': 'var(--color-error-contrast-dark)',
    '--color-error-contrast-200': 'var(--color-error-contrast-dark)',
    '--color-error-contrast-300': 'var(--color-error-contrast-light)',
    '--color-error-contrast-400': 'var(--color-error-contrast-light)',
    '--color-error-contrast-500': 'var(--color-error-contrast-light)',
    '--color-error-contrast-600': 'var(--color-error-contrast-light)',
    '--color-error-contrast-700': 'var(--color-error-contrast-light)',
    '--color-error-contrast-800': 'var(--color-error-contrast-light)',
    '--color-error-contrast-900': 'var(--color-error-contrast-light)',
    '--color-error-contrast-950': 'var(--color-error-contrast-light)',
    '--color-surface-50': '255 255 255',
    '--color-surface-100': '224 224 224',
    '--color-surface-200': '194 194 194',
    '--color-surface-300': '163 163 163',
    '--color-surface-400': '133 133 133',
    '--color-surface-500': '102 102 102',
    '--color-surface-600': '85 85 85',
    '--color-surface-700': '68 68 68',
    '--color-surface-800': '51 51 51',
    '--color-surface-900': '34 34 34',
    '--color-surface-950': '17 17 17',
    '--color-surface-contrast-dark': 'var(--color-surface-950)',
    '--color-surface-contrast-light': 'var(--color-surface-50)',
    '--color-surface-contrast-50': 'var(--color-surface-contrast-dark)',
    '--color-surface-contrast-100': 'var(--color-surface-contrast-dark)',
    '--color-surface-contrast-200': 'var(--color-surface-contrast-dark)',
    '--color-surface-contrast-300': 'var(--color-surface-contrast-dark)',
    '--color-surface-contrast-400': 'var(--color-surface-contrast-light)',
    '--color-surface-contrast-500': 'var(--color-surface-contrast-light)',
    '--color-surface-contrast-600': 'var(--color-surface-contrast-light)',
    '--color-surface-contrast-700': 'var(--color-surface-contrast-light)',
    '--color-surface-contrast-800': 'var(--color-surface-contrast-light)',
    '--color-surface-contrast-900': 'var(--color-surface-contrast-light)',
    '--color-surface-contrast-950': 'var(--color-surface-contrast-light)',
  },
  metadata: {
    version: '3.0.0',
  },
} satisfies Theme;

export default FusionMonster;
