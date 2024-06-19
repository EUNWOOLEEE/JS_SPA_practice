/*	컴포넌트를 만들 수 있게 함
	이 클래스를 기준으로 다른 컴포넌트들을 만들 수 있음
	상태 관리를 통한 렌더링이 가능한 부분
*/

export default class Component {
	$target;	// 컴포넌트를 넣을 부모 == DOM element
	$props;
	$state;

	constructor($target, $props) {
		console.log('component constructor');

		this.$target = $target;
		this.$props = $props;

		this.setup();
		this.setEvent();
		this.render();
	}

	// 컴포넌트 state 설정
	// 구현되어있지 않은 메서드들은 오버라이딩 되길 기대하는 추상 메서드들
	setup() {}

	// 컴포넌트가 마운트 되었을 때
	// 페이지 변경 시에는 호출되지 않고 초기에만 한 번 호출됨
	// pages에서 오버라이딩
	mounted() {}

	// UI 구성
	template() {
		return '';
	}

	render() {
		console.log('component render');
		
		const tmp = this.template(); // 틀을 가져와서
		console.log('print tmp');
		console.log(tmp);
		this.$target.innerHTML = tmp;	// 안에 들어갈 UI 넣어주기
		this.mounted();
	}

	// 컴포넌트에서 필요한 이벤트 설정
	setEvent() {}

	// components 들에서 오버라이딩
	setState(newState) {
		console.log('component setState');

		this.$state = { ...this.$state, ...newState }; // 스프레드 문법을 사용해서 기존 오브젝트의 각각의 값을 새로운 오브젝트 값으로 업데이트 함
		this.render();
	}

	// 이벤트 등록 추상화
	addEvent(eventType, selector, callback) {
		this.$target.addEventListener(eventType, (event) => { // event는 이벤트가 발생했을 때 인자로 전달되는 오브젝트
			if (!event.target.closest(selector)) // 이벤트가 발생한 DOM 요소를 가리키는 target 속성을 가지고 있음
				return false;
			callback(event);
		});
	}
}