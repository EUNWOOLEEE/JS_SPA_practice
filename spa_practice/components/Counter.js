/*	Conponent.js를 활용해 만든 counter 기능의 컴포넌트
*/

import Component from '../Component.js';

export default class Counter extends Component {
	setup() {
		console.log('counter setup');

		this.$state = { // state를 object literal로 초기화
			counter: 0,
		};
	}

	// DOM을 직접 조작하지 않고 UI를 만들 수 있음
	// 이렇게 만들어진 UI는 render 메서드의 target.innerHTML을 통해 렌더링 됨
	template() {
		const { counter } = this.$state;
		return `
			<div>
				<h2>Counter Component</h2>
				<div>${counter}</div>
				<button class='up'>증가</buttom>
				<button class='down'>감소</buttom>
			</div>
		`;
	}

	/*	<h2> - 블록 레벨 제목 요소. 두 번째로 중요한 제목
		<button> - 사용자가 클릭할 수 있는 버튼 요소
	*/

	setEvent() {
		this.addEvent('click', '.up', ({ target }) => { // target을 매개변수로 받음 (콜백함수에서 사용하지는 않지만 일반적인 패턴을 유지하기 위한 것으로 보임)
			const prev = this.$state.counter;
			this.up(prev);
		});

		this.addEvent('click', '.down', ({ target }) => {
			const prev = this.$state.counter;
			this.down(prev);
		});
	}

	// Component.js의 setState에 새로운 값을 가진 오브젝트를 전달해서 현재 값을 업데이트하고 렌더링 함
	up(prev) {
		this.setState({ counter: prev + 1 });
	}

	down(prev) {
		this.setState({ counter: prev - 1 });
	}
}
