import { useState } from 'react'
import './App.css'
import AddUser from './component/Users/AddUser'
import UserList from './component/Users/UserList'

function App() {
	const [userList, setUserList] = useState([])
	const [darkMode, setDarkMode] = useState(false)


	const onData = (newData) => {
		setUserList([...userList, newData])
	}

	// const addUserHandler = (uName, uAge) => {
	// 	setUserList((prevUserList) => {
	// 		return [
	// 			...prevUserList,
	// 			{ name: uName, age: uAge, id: Math.random().toString() },
	// 		]
	// 	})
	// }

	const getDataHandler = (data) => {
		setUserList(data)
	}
	//☀︎ ☽
	return (
		<div className={darkMode ? 'dark-mode' : 'light-mode'}>
			<div className='container'>
				<span style={{ color: darkMode ? 'grey' : 'yellow' }}>☀︎</span>
				<div className='switch-checkbox'>
					<label className='switch'>
						<input
							type='checkbox'
							onChange={() => setDarkMode(!darkMode)}
						/>
						<span className='slider round'></span>
					</label>
				</div>
				<span
					style={{
						color: darkMode ? '#c96dfd' : 'grey',
						marginBottom: '10px',
					}}
				>
					☽
				</span>
			</div>
			<AddUser onAddUser={onData} />
			<UserList users={userList} onGetData={getDataHandler} />
		</div>
	)
}

export default App
