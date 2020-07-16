//feet to mile calculation (problem-1)
function feetToMile(feet) {
	let mile;
	if (feet <= 0)
		return "you need to put positive values greater than zero to get an appropriate result!";
	else if (feet > 0) {
		mile = (feet / 5280).toFixed(7);
		return `${feet} feet = ${mile} mile!`;
	} else return "invalid input!";
}

//wood calculation (problem-2)
function woodCalculator(chair, table, bed) {
	let totalWoods;
	if (chair < 0 || table < 0 || bed < 0)
		return " positive value of the inputs are required!";
	else if (
		chair >= 0 &&
		table >= 0 &&
		bed >= 0 &&
		Number.isInteger(chair) &&
		Number.isInteger(table) &&
		Number.isInteger(bed)
	) {
		totalWoods = chair * 1 + table * 3 + bed * 5;
		return `total number of woods required are ${totalWoods} cu ft!`;
	} else return "invalid input!";
}

//brick calculation (problem-3)
function brickCalculator(buildingHeight) {
	let totalBricks;

	if (buildingHeight <= 0)
		return "negative or zero value for building height is not accepted!";
	else if (buildingHeight > 0) {
		let first10Storeyed = 10 * 15 * 1000;

		let second10Storeyed = 10 * 12 * 1000;

		if (buildingHeight >= 1 && buildingHeight <= 10)
			totalBricks = buildingHeight * 15 * 1000;
		else if (buildingHeight >= 11 && buildingHeight <= 20)
			totalBricks = first10Storeyed + (buildingHeight - 10) * 12 * 1000;
		else
			totalBricks =
				first10Storeyed + second10Storeyed + (buildingHeight - 20) * 10 * 1000;

		return `The number of total bricks required are ${totalBricks}!`;
	} else return "invalid input!";
}

//tiny friends (problem -4)
function tinyFriends(frindsName) {
	if (frindsName.length <= 0) return "invalid input!";

	let minimumNameLength = Number.MAX_SAFE_INTEGER;

	let tinyFriendName; //for finding the tiny name of 1 friend

	let nameLength;

	let count = 0;

	let names = []; // for multiple friends with tiny names

	frindsName.forEach((name, index) => {
		nameLength = name.length;
		if (nameLength <= minimumNameLength) {
			minimumNameLength = nameLength;
			tinyFriendName = name;
			if (index != 0) {
				count++;
				names.push(name);
			}
		}
	});

	if (names.length > 1) return `Friends with the smallest names are ${names}!`;
	else return `The friend with the smallest name is ${tinyFriendName}!`;
}

//for problem 1
console.log(feetToMile(5));

//for problem 2
console.log(woodCalculator(7, 4, 3));

// for problem 3
console.log(brickCalculator(11));

//for problem 4
console.log(
	tinyFriends([
		"sakib",
		"rafa",
		"faria",
		"preety",
		"muhaiminul",
		"tanvir",
		"zara",
		"raka",
	])
);
