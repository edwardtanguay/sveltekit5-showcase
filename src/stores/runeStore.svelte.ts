let count = $state(0);

export const getStore = () => {
	return {
		get count() {
			return count;
		},
		incrementCount: () => count++,
		decrementCount: () => count--,
		resetCount: () => count = 0
	};
};
