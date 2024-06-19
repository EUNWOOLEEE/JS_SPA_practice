/*	API 패치를 위한 페이지 컴포넌트
	컴포넌트가 마운트 되었을 때
*/

import Component from '../Component.js'
import List from '../components/List.js'
import http from '../api/http.js'

export default class FetchPage extends Component {
	setup() {
		this.$state = {
			dummyList: [],
		};
	}

	template() {
		return `
			<h1>Fetch Page</h1>
			<div data-component="fetch-api"></div>
			`;
	}

	mounted() {
		const fetchDummy = async () => {
			const dummyPosts = await http.get(
				`https://jsonplaceholder.typicode.com/posts`
			);
			this.setState({ dummyList: [...dummyPosts] });
		};

		if (this.$state.dummyList.length === 0) {
			fetchDummy();
		}
		else {
			const $fetchApi = this.$target.querySelector(
				`[data-component="fetch-api"]`
			);
			new List($fetchApi, this.$state);
		}
	}
}