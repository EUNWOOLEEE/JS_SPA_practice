/*	카운터 컴포넌트를 페이지 컴포넌트에 넣음
	template에서 렌더링 할 컴포넌트를 넣을 태그를 만들어야 함
	아래 코드에서 data-component 속성을 넣은 div 태그를 의미함
	- 이 태그가 Counter 컴포넌트의 target이 됨
*/

import Component from '../Component.js';
import Counter from '../components/Counter.js';

export default class CounterPage extends Component {
	template() {
		return `
			<h1>Counter Page</h1>
			<div data-component="counter-up"></div>
		`;
	}

	mounted() {
		console.log('counter page mounted');

		const $counter = this.$target.querySelector(
			'[data-component="counter-up"]'
		);
		new Counter($counter);
	}
}