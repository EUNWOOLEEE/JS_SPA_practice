/*	pages 컴포넌트의 export 모음
	라우팅 시 필요한 페이지를 매번 import 하지 않기 위한 작업
*/

import CounterPage from './CounterPage.js'
import FetchPage from './FetchPage.js'
import HomePage from './HomePage.js'

export default (main) => {
	const home = () => new HomePage(main);
	const counter = () => new CounterPage(main);
	const fetch = () => new FetchPage(main);

	return {
		home,
		counter,
		fetch,
	};
};