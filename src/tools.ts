export const test001 = () => {
	const nums = [6, 2];
	addNumber(nums);
	addNumber(nums);
	addNumber(nums);
};

export const addNumber = (nums: number[]) => {
	nums.push(Math.floor(Math.random() * 10) + 1);
};
