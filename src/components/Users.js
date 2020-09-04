import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './../actions/app'

const Users = ({ fetchUsers, app }) => {
	const onClick = () => {
		fetchUsers()
	}

	return (
		<div>
			<h2>Users fetch page</h2>
			<button onClick={onClick} className='btn btn-secondary'>
				Fetch users
			</button>
		</div>
	)
}

const mapStateToProps = (state) => ({
	app: state.app,
})

export default connect(mapStateToProps, { fetchUsers })(Users)
