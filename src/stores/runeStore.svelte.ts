let timesOpened = $state(0);

export const getStore = () => {
	return {
		get timesOpened() {
			return timesOpened;
		},
		incrementTimesOpened: () => timesOpened++,
		decrementTimesOpened: () => timesOpened--,
		resetTimesOpened: () => timesOpened = 0
	};
};
