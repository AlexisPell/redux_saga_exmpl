import React from 'react'
import { connect } from 'react-redux'
import { putData, loadData } from './../actions/app'

const Connect = ({ putData, loadData, app }) => {
	const onClick = () => {
		loadData()
	}

	return (
		<div>
			<h3>Connect component</h3>
			<button onClick={onClick}>Click me</button>
		</div>
	)
}

const mapStateToProps = (state) => ({
	app: state.app,
})

export default connect(mapStateToProps, { putData, loadData })(Connect)
