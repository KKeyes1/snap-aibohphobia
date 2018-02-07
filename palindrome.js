/**
 *
 * function to check if a string is a palindrome: can be read forward or backward
 * takes a string and returns a window alert that the string IS or IS NOT a palindrome
 *
 **/

function checkPalindrome() {
/* get the string from a user input */
	let txtInput = document.getElementById('input').value;

	let newPalindrome = txtInput.replace(/\s/g, "");
/* calculate the length of the string to use to grab the letters from the end of the array */
	let stringLength = newPalindrome.length;
/* set the default response to "something went wrong" */
	check = "something went wrong";
/* loop through every letter of the array, from the front to the back simultaneously */
	for (let i = 0; i < newPalindrome.length; i++) {
/* fix the off by one error from .length  */
		let fixOffByOne = stringLength - 1;
/* set j to correct ending index for the end of the array and subtract the value of i */
		let j = fixOffByOne - i;
/* set letterOne to the first element of the array and move from the front to the back */
		let letterOne = newPalindrome[i];
/* set letterTwo to the last element of the array and move from the back to the front */
		let letterTwo = newPalindrome[j];
/* check if each set of letters are equal to eachother */
		if (letterOne === letterTwo) {
/* if the letters match, we update the message */
			check = txtInput + "- IS a palindrome";

		} else {
/* if the letter do not match, we update the message and stop the loop */
			check = txtInput + "- IS NOT a palindrome";

			break;

		}

	}

	window.alert(check);


}

