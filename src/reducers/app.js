import { PUT_DATA, GET_USERS } from './../actions/types'

const initialState = {
	data: {},
	users: [],
}

export default (state = initialState, action) => {
	const { payload, type } = action

	switch (type) {
		case PUT_DATA:
			return {
				data: payload,
			}
		case GET_USERS:
			return {
				...state,
				users: payload,
			}
		default:
			return state
	}
}
