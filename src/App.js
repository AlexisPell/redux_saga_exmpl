import React from 'react'
import './App.css'
import Connect from './components/Connect'
import Users from './components/Users'

const App = () => {
	return (
		<div className='App container'>
			<h1>my app</h1>
			<Connect />
			<Users />
		</div>
	)
}

export default App
