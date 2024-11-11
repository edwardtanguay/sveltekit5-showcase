export class Store {
	public count = $state(0);
	public doubleCount = $derived(this.count * 2);
	public numberOfSkills = $state(0);
	public loadingSkills = $state(false);

	public incrementCount() {
		this.count++;
	}

	public decrementCount() {
		this.count--;
	}

	public loadSkills() {
		this.loadingSkills = true;
		setTimeout(async () => {
			const response = await fetch('https://edwardtanguay.vercel.app/share/skills.json');
			const skills = await response.json();
			this.numberOfSkills = skills.length;
			this.loadingSkills = false;
		}, 2000);
	}
}
