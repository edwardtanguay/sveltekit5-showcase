let count = $state(0);
const doubleCount = $derived(count * 2);

export const getStore = () => {
	return {
		// values
		get count() {
			return count;
		},

		// computed values
		get doubleCount() {
			return doubleCount;
		},

		// actions
		incrementCount: () => count++,
		decrementCount: () => count--,
		resetCount: () => (count = 0)
	};
};
