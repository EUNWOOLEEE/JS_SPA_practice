/*	entry file
	App 컴포넌트를 렌더링 함
*/

// App.js 파일의 default export를 App 이름으로 import 함
import App from './App.js';

// id가 app인 element를 찾아서 새로운 App 객체를 생성함
new App(document.querySelector('#app'));