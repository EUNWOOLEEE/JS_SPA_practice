/* 라우팅을 위한 파일
*/

import Component from './Component.js'

export default class Router extends Component {
	setup() {
		this.$state = {
			routes: [],
		};
	}

	addRoute(fragment, component) {
		this.$state.routes.push({ fragment, component });
	}

	// 현재 URL 체크
	checkRoutes = () => {
		// 각 배열 요소를 find에 인자로 전달
		const currentRoute = this.$state.routes.find((route) => {
			return route.fragment === window.location.hash; // 현재 페이지의 url에 포함된 해시 값을 가져와서 비교
		});

		console.log('current route?');
		console.log(currentRoute);
		if (currentRoute)
			console.log(currentRoute.component);

		// 홈으로 리다이렉트
		if (!currentRoute) {
			window.location.href = './#';
			console.log('here');
			this.$state.routes[0].component();
			return ;
		}

		currentRoute.component();
	}

	start() {
		// URL 변경 이벤트
		window.addEventListener('hashchange', () => this.checkRoutes());

		if (!window.location.hash) {
			window.location.hash = '#/';
		}

		// 초기 렌더링
		this.checkRoutes();
	}
}