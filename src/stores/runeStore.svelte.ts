let count = $state(0);
const doubleCount = $derived(count * 2);
let numberOfSkills = $state(0);
let loadingSkills = $state(false);

export const getStore = () => {
	return {
		// values
		get count() {
			return count;
		},
		get numberOfSkills() {
			return numberOfSkills;
		},
		get loadingSkills() {
			return loadingSkills;
		},

		// computed values
		get doubleCount() {
			return doubleCount;
		},

		// actions
		incrementCount: () => count++,
		decrementCount: () => count--,
		resetCount: () => {
			count = 0;
			numberOfSkills = 0;
		},

		// thunks
		loadSkills: () => {
			loadingSkills = true;
			setTimeout(async () => {
				const response = await fetch('https://edwardtanguay.vercel.app/share/skills.json');
				const skills = await response.json();
				numberOfSkills = skills.length;
				loadingSkills = false;
			}, 2000);
		}
	};
};
