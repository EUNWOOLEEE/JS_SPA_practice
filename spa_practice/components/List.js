/*	API 결과를 출력할 리스트 컴포넌트
	List 컴포넌트를 호출할 때 결과를 넘기면, 이 컴포넌트에서 props로 받아 활용할 수 있음
	map을 통해 리스트를 출력할 때는 join('')으로 묶어줘야 배열의 쉼표를 없애고 출력할 수 있음
*/

import Component from '../Component.js';

export default class List extends Component {
	template() {
		const { dummyList } = this.$props;
		return `
			<ul>
				${dummyList
					.map(({ id, title }) => `<li key=${id}>${title}</li>`) // dummyList 배열의 각 요소에 대해 새로운 배열을 생성. 새로운 배열의 요소는 문자열
					.join('')}
			</ul>
		`;
	}
}

/*
<ul> (unordered list)
	- 순서가 없는 목록을 만듦
	- 안에 하나 이상의 <li> 요소가 포함됨
	
<li> (list item)
	- 목록의 각 항목을 정의함
	- <ul>, <ol>, <menu> 요소 안에 위치함
*/