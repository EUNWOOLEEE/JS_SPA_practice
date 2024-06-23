import Component from '../core/Component.js'
import Background from '../components/Background.js'

export default class BackgroundPage extends Component {
	template() {
		return `
			<canvas data-component="background"></canvas>
		`;
	}

	mounted() {
		const $background = this.$target.querySelector(
			'[data-component="background"]'
		);
		console.log('backgroundpage mounted');
		new Background($background);
	}
}