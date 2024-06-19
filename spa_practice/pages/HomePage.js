/*	초기 접근 시 렌더링되는 페이지
	기존 App 컴포넌트의 역할을 대신하는 페이지 컴포넌트
	페이지 구분 용도
*/

import Component from '../Component.js'

export default class Home extends Component {
	template() {
		return `
			<h1>Home Page</h1>
		`;
	}
}