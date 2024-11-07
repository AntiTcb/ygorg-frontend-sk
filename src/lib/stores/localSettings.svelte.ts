import { browser } from '$app/environment';
import { persistedState } from 'svelte-persisted-state';
import { type Themes } from '../../themes';

interface UserPreferences {
  darkMode: boolean;
  theme: Themes;
  categories: string[];
}

const userPreferences = persistedState<UserPreferences>(
  'userPreferences',
  {
    darkMode: false,
    theme: 'NormalMonster',
    categories: [],
  },
  {
    storage: 'local',
    syncTabs: true,
    beforeWrite: (value) => {
      console.log('Saving preferences:', value);
      return value;
    },
    onWriteError: (error) => {
      console.error('Failed to save preferences:', error);
    },
  },
);

export const setTheme = (theme: Themes) => (userPreferences.value.theme = theme);
export const getTheme = () => userPreferences.value.theme;
export const toggleDarkMode = () => {
  if (browser) {
    document.documentElement.classList.toggle('dark');
  }
  return (userPreferences.value.darkMode = !userPreferences.value.darkMode);
};
export const getDarkMode = () => userPreferences.value.darkMode;
