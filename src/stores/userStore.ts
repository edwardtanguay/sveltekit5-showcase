import { writable } from 'svelte/store';

export const user = writable<{ name: string; loggedIn: boolean } | null>(null);
export const numberOfSkills = writable<number | null>(null);

user.set({ name: 'Robert', loggedIn: false });
numberOfSkills.set(33)

