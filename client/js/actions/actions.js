import fetch from 'isomorphic-fetch'

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

exports.SUBMIT_SUCCESS = SUBMIT_SUCCESS;
exports.submitSuccess = submitSuccess;
exports.SUBMIT_ERROR = SUBMIT_ERROR;
exports.submitError = submitError;