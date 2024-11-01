export const createUser = () => {
	let age = $state(0);
	let score = $state(0)

	return {
		get age() {
			return age;
		},
		set age(value) {
			age = value;
		},
		get score() {
			return score;
		},
		set score(value) {
			score = value;
		}
	};
};
