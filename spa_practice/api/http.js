/*	HTTP 통신 메서드 모음
	fetch API를 기반으로 HTTP 통신 메서드를 추상화한 파일
*/

// async를 붙여서 코드 블럭이 promise로 바뀜
// parseResponse는 비동기 함수
const parseResponse = async (response) => {
	const { status } = response;
	let data;
	if (status !== 204) {
		data = await response.json(); // response.json()이 종료되길 기다림
	}

	return {
		status,
		data,
	};
};

const request = async (params) => {
	const { method = 'GET', url, headers = {}, body } = params;

	const config = {
		method,
		headers: new window.Headers(headers),
	};

	if (body) {
		config.body = JSON.stringify(body); // 직렬화하여 JSON으로 변환
	}

	const response = await window.fetch(url, config); // 필요한 값들 세팅해서 전달 후 response 대기

	return parseResponse(response);
}

// HTTP method들
const get = async (url, headers) => {
	const response = await request({ // parseRequest 반환값
		url,
		headers,
		method: 'GET',
	});

	return response.data;
}

const post = async (url, body, headers) => {
	const response = await request({
		url,
		headers,
		method: 'POST',
		body,
	});

	return response.data;
}

const put = async (url, body, headers) => {
	const response = await request({
		url,
		headers,
		method: 'PUT',
		body,
	});

	return response.data;
}

const patch = async (url, body, headers) => {
	const response = await request({
		url,
		headers,
		method: 'PATCH',
		body,
	});

	return response.data;
}

const deleteRequest = async (url, headers) => {
	const response = await request({
		url,
		headers,
		method: 'DELETE',
	});

	return response.data;
}

export default {
	get,
	post,
	put,
	patch,
	delete: deleteRequest,
};