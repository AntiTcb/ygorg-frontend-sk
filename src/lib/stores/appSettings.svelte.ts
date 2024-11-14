import { browser } from '$app/environment';
import { getContext, setContext } from 'svelte';
import { persistedState } from 'svelte-persisted-state';
import type { Themes } from '../../themes';

interface AppSettings {
  theme: Themes;
  darkMode: boolean;
  homePageCategories: string[];
}

export class AppSettingsStore {
  #appSettings = persistedState<AppSettings>(
    'appSettings',
    {
      theme: 'NormalMonster',
      darkMode: false,
      homePageCategories: [],
    },
    {
      storage: 'local',
      syncTabs: true,
    },
  );

  get theme() {
    return this.#appSettings.value.theme;
  }
  set theme(theme: Themes) {
    this.#appSettings.value.theme = theme;
  }

  get darkMode() {
    return this.#appSettings.value.darkMode;
  }
  set darkMode(darkMode: boolean) {
    this.#appSettings.value.darkMode = darkMode;
    if (browser) {
      document.documentElement.classList.toggle('dark', darkMode);
    }
  }

  get homePageCategories() {
    return this.#appSettings.value.homePageCategories;
  }

  addCategory(category: string) {
    this.#appSettings.value.homePageCategories.push(category);
  }

  removeCategory(category: string) {
    const index = this.#appSettings.value.homePageCategories.indexOf(category);
    if (index !== -1) {
      this.#appSettings.value.homePageCategories.splice(index, 1);
    }
  }

  toggleCategory(category: string | null) {
    if (!category) return;
    if (this.#appSettings.value.homePageCategories.includes(category)) {
      this.removeCategory(category);
    } else {
      this.addCategory(category);
    }
  }

  reset() {
    this.#appSettings.reset();
  }
}

const APP_SETTINGS_KEY = Symbol('APP_SETTINGS');

export const setAppSettings = () => setContext<AppSettingsStore>(APP_SETTINGS_KEY, new AppSettingsStore());
export const getAppSettings = () => getContext<AppSettingsStore>(APP_SETTINGS_KEY);
