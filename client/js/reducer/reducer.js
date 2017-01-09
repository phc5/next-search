import actions from '../actions/actions';

const initialState = {
	query: ""
}

const gameReducer = (state, action) => {
	let copyState = state || initialState;
	state = Object.assign({}, copyState);
	
	if (action.type === actions.FETCH_QUERY_SUCCESS) {
		state.query = action.query;
	}

	return state;
}

exports.gameReducer = gameReducer;