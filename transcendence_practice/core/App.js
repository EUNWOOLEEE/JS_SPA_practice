import Router from "./Router.js"
import Component from "./Component.js"
import createPages from "../pages/index.js"

export default class App extends Component {
	template() {
		return `
		<head>
			<a href="#/">home</a>
			<a href="#background/">background</a>
		</head>
		<main></main>
		`;
	}

	mounted() {
		const $main = this.$target.querySelector('main');
		const pages = createPages($main);

		const router = new Router($main);
		router.addRoute('#/', pages.home);
		router.addRoute('#background/', pages.background);
		
		console.log('app mounted');

		router.start();
	}
}