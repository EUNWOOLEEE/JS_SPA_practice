/*	App 컴포넌트에서 페이지 컴포넌트 렌더링
*/

import Router from './Router.js'
import Component from './Component.js'
import createPages from './pages/index.js'

export default class App extends Component {
	template() {
		return `
		<header>
			<a href="#/">Home</a>
			<a href="#counter/">Counter</a>
			<a href="#fetch/">Fetch</a>
		</header>
		<main></main>
		`;
	}

	/*
	<a>
	- anchor
	- 하이퍼링크 정의

	<href>
	- hypertext reference
	- <a>의 속성으로 링크의 목적지 url 지정
	- 해시(#)를 사용하면 동일한 페이지 내에서 특정 ID나 위치로 이동함
	*/

	mounted() {
		const $main = this.$target.querySelector('main');
		const pages = createPages($main);

		// 라우트 페이지 설정, state의 routes 배열에 추가 -> 특정 경로와 해당 경로에 렌더링될 컴포넌트를 매핑
		const router = new Router($main);
		router.addRoute('#/', pages.home);
		router.addRoute('#counter/', pages.counter);
		router.addRoute('#fetch/', pages.fetch);
		router.start();
	}
}

/*
<main>
	- 문서의 주요 콘텐츠 영역을 나타내는 요소 (해당 페이지나 문서의 핵심적인 내용)

data-component
	- 사용자가 임의의 데이터를 요소에 추가할 수 있는 사용자 정의 데이터 속성
	- ="counter-app"
		- 그 요소가 어떤 컴포넌트를 나타내는지 식별하기 위한 이름 또는 식별자

=> 컴포넌트의 이름을 지어준 것
 */