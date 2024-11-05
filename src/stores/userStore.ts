import { writable } from 'svelte/store';

export const user = writable<{ name: string; loggedIn: boolean } | null>(null);
export const numberOfSkills = writable<number | null>(null);

user.set({ name: 'Robert', loggedIn: false });

// load async
(async () => {
	const response = await fetch('https://edwardtanguay.vercel.app/share/skills.json');
	const _numberOfSkills = await response.json();
	numberOfSkills.set(_numberOfSkills.length);
})();
