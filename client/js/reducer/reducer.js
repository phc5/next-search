import actions from '../actions/actions';

const initialState = {
	previous: "",
	query: ""
}

const gameReducer = (state, action) => {
	let copyState = state || initialState;
	state = Object.assign({}, copyState);
	
	if (action.type === actions.SUBMIT_SUCCESS) {
		state.query = state.previous;
		state.previous = action.query;
	}

	return state;
}

exports.gameReducer = gameReducer;