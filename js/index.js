/** @format */

"use strict;";
console.log("Counting array");

let count = 0;
let arr = [];

function initFunc() {
	setTimeout(loopFunc, 1000);
}

function loopFunc() {
	if (count < 9) {
		arr.unshift(count);
		console.log(arr);
		count++;
	} else {
		arr.length = 9;
		arr.unshift(count);
		arr.length = 9;
		console.log(arr);
		count++;
	}

	initFunc();
}

initFunc();
