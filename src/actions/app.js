import { PUT_DATA, LOAD_DATA, GET_USERS } from './types'

export const putData = (dataFromServer) => {
	return {
		type: PUT_DATA,
		payload: dataFromServer,
	}
}

export const loadData = () => {
	return { type: LOAD_DATA }
}

export const fetchUsers = (users) => {
	return { type: GET_USERS, payload: users }
}
