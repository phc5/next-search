import fetch from 'isomorphic-fetch'

const FETCH_QUERY_SUCCESS = 'FETCH_QUERY_SUCCESS';
const fetchQuerySuccess = (query) => {
	return {
		type: FETCH_QUERY_SUCCESS,
		query: query
	};
};

const FETCH_QUERY_ERROR = 'FETCH_QUERY_ERROR';
const fetchQueryError = (err) => {
	return {
		type: FETCH_QUERY_ERROR,
		error: err
	}
}

const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
const submitSuccess = (query) => {
	return {
		type: SUBMIT_SUCCESS,
		query: query
	};
};

const SUBMIT_ERROR = 'SUBMIT_ERROR';
const submitError = (err) => {
	return {
		type: SUBMIT_ERROR,
		error: err
	}
}

const getPreviousQuery = () => {
	return (dispatch) => {
		let url = 'http://localhost:8080/query';
		return fetch(url,{

		}).then((res) => {
			if (res.status < 200) {
				let error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response.json();
		}).then((query) => {
			return dispatch(fetchQuerySuccess(query));
		}).catch((err) => {
			return dispatch(fetchQueryError(err));
		})
	}
}

const onSubmit = (query) => {
	return (dispatch) => {
		let url = 'http://localhost:8080/query';
		return fetch(url,{
			method: 'PUT',
			body: JSON.stringify(query),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		}).then((res) => {
			if (res.status < 200) {
				let error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response.json();
		}).then((query) => {
			return dispatch(submitSuccess(query));
		}).catch((err) => {
			return dispatch(submitError(err));
		})
	}
}

const search = (query) => {
	return (dispatch) => {

	}
}

exports.FETCH_QUERY_SUCCESS = FETCH_QUERY_SUCCESS;
exports.fetchQuerySuccess = fetchQuerySuccess;
exports.FETCH_QUERY_ERROR = FETCH_QUERY_ERROR;
exports.fetchQueryError = fetchQueryError;

exports.SUBMIT_SUCCESS = SUBMIT_SUCCESS;
exports.submitSuccess = submitSuccess;
exports.SUBMIT_ERROR = SUBMIT_ERROR;
exports.submitError = submitError;

exports.getPreviousQuery = getPreviousQuery;
exports.onSubmit = onSubmit;
exports.search = search;