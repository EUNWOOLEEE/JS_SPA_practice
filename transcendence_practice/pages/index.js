import HomePage from './HomePage.js'
import BackgroundPage from './BackgroundPage.js'

export default (main) => {
	const home = () => new HomePage(main);
	const background = () => new BackgroundPage(main);

	return {
		home,
		background,
	};
};