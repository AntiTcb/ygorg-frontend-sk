<script lang="ts">
  import { getAuth } from '$lib/stores/auth.svelte';
  import { type ToastContext } from '@skeletonlabs/skeleton-svelte';
  import { getContext } from 'svelte';
  let username = $state('AntiTcb');
  let password = $state('Gc$g*PmQf4ji$f4pqE)Ns9b%');

  const authStore = getAuth();
  const toast = getContext<ToastContext>('toast');

  const onClick = async () => {
    const loggedIn = await authStore.login(username, password);
    if (loggedIn) {
      toast.create({
        title: 'Successfully logged in',
        type: 'success',
      });
    }
  };
</script>

<div class="flex flex-col gap-4">
  <label for="username" class="label">
    <span class="label-text">Username / Email</span>
    <input type="text" name="username" placeholder="Username" class="input" bind:value={username} />
  </label>
  <label for="password" class="label">
    <span class="label-text">Password</span>
    <input type="password" name="password" placeholder="Password" class="input" bind:value={password} />
  </label>
  <button type="button" class="btn preset-filled" onclick={onClick}>Login</button>
</div>
