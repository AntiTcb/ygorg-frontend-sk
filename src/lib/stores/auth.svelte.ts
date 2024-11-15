import { PUBLIC_WP_URL } from '$env/static/public';
import { getContext, setContext } from 'svelte';

export type User = {
  id: number;
  displayName: string;
  email: string;
  token: string;
};

export class AuthStore {
  user: User | null = $state(null);
  #isLoggedIn = $derived(this.user);

  get isLoggedIn() {
    return this.#isLoggedIn;
  }

  async login(username: string, password: string) {
    const res = await fetch(`${PUBLIC_WP_URL}/wp-json/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      this.user = (await res.json()).data;
      return true;
    }

    return false;
  }

  logout() {
    this.user = null;
  }
}

const AUTH_KEY = Symbol('AUTH');

export const setAuth = () => setContext<AuthStore>(AUTH_KEY, new AuthStore());
export const getAuth = () => getContext<AuthStore>(AUTH_KEY);
