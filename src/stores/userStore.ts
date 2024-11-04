import { writable } from 'svelte/store';

export const user = writable<{ name: string; loggedIn: boolean } | null>(null);

user.set({ name: 'Robert', loggedIn: false });
