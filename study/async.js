'use strict';

async function fetchUser() {
	//do network request in 10 secs...
	return 'yuza';
}

const user = fetchUser();
console.log(user);

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
	await delay(2000);
	return '🍎';
}

async function getBanana() {
	await delay(1000);
	return '🍌';
}

function pickAllFruits() {
	return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
	return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);