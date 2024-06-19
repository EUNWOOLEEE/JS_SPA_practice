import Component from '../core/Component.js'

export default class Home extends Component {
	template() {
		return `
			<div class="start">
				<button>Game Start!</button>
			</div>
		`;
	}
}