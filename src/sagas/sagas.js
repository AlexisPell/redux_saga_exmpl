import axios from 'axios'
import { takeEvery, takeLatest, put, call } from 'redux-saga/effects'
import { LOAD_DATA, GET_USERS } from '../actions/types'
import { putData, fetchUsers } from './../actions/app'

// watchFunction - track the actions
// workerFunction - makes some changes
// common func to async data access

async function fetchUsersData() {
	const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
	return res.data
}

function* workerFetchUsers() {
	const res = yield call(fetchUsersData)
	yield put(fetchUsers(res))
}

export function* watchFetchUsers() {
	yield takeEvery(GET_USERS, workerFetchUsers)
}

// Async fetch
async function fetchData() {
	const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
	return res.data
}

// Dispatch to reducer
function* workerLoadData() {
	const res = yield call(fetchData)
	yield put(putData(res))
}

// Access to actions
export function* watchLoadData() {
	yield takeEvery(LOAD_DATA, workerLoadData)
}

// takeEvery - track the action (TYPE, actionHandler())
// put - dispatch to reducer
// call - takes func and returns data output
