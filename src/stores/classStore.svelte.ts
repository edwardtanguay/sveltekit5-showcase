export class Store {
	public count = $state(0);
	public doubleCount = $derived(this.count * 2);

	public incrementCount() {
		this.count++;
	}

	public decrementCount() {
		this.count--;
	}

	// public loadSkills() {
	// 	loadingSkills = true;
	// 	setTimeout(async () => {
	// 		const response = await fetch('https://edwardtanguay.vercel.app/share/skills.json');
	// 		const skills = await response.json();
	// 		numberOfSkills = skills.length;
	// 		loadingSkills = false;
	// 	}, 2000);
	// }
}
