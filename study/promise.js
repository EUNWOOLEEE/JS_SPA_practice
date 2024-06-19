'use strict';

const getHen = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve('🐓'), 1000);
	});
const getEgg = hen =>
	new Promise((resolve, reject) => {
		setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
	});
const cook = egg =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve(`${egg} => 🍳`), 1000);
	});

getHen() //
	.then(hen => getEgg(hen))
	.catch(error => '🥖')
	.then(cook)
	.then(meal => console.log(meal))
	.catch(console.log);