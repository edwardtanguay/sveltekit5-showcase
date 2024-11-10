export const getStore = () => {
	let timesOpened = $state(0);

	return {
		get timesOpened() {
			return timesOpened;
		},
		incrementTimesOpened: () => timesOpened++
	};
};
