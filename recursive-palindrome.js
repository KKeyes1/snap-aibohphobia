function getInput() {

	let newInput = document.getElementById('input').value;

	let noSpaces = newInput.replace(/\s/g, "");

	let result = recursivePalindrome(noSpaces);

	window.alert(result);

}


function recursivePalindrome(string) {

	let newString = string;
	console.log(newString);

	if(newString === "") {

		return;

	} else {

		let firstLetter = newString[0];

		let lastElement = newString.length - 1;

		let lastLetter = newString[lastElement];

		let newOutput = newString.slice(1, -1);

		if(firstLetter === lastLetter) {

			recursivePalindrome(newOutput);

		} else {

			return "IT IS NOT A PALINDROME";

		}

	}

	return "IT IS A PALINDROME";
}