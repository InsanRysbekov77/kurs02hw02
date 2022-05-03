import { useState } from 'react'
import Wrapper from '../helpers/Wrapper'
import Button from './UI/Button'
import Card from './UI/Card'
import ErrorModal from './UI/ErrorModal'
import styles from './UserList.module.css'

const UserList = ({ users, onGetData }) => {
	const [dele, setDele] = useState(false)
	const [data, setData] = useState([])

	const deleteHandler = (event) => {
		setData(users.filter((user) => user.id !== event.target.id))
		setDele(true)
	}
	const errorHandler = () => {
		onGetData(data)
		setDele(null)
	}
	const cancelHandler = () => {
		setDele(null)
	}
	return (
		<Wrapper>
			{dele && (
				<ErrorModal
					title='Invalid input'
					message='Are you sure?'
					onConfirm={errorHandler}
				>
					<Button onClick={cancelHandler}>Cancel</Button>
				</ErrorModal>
			)}
			<Card className={styles.users}>
				<ul>
					{users.map((user) => (
						<li key={user.id}>
							{user.todos1} {user.todos2} years old
							<Button id={user.id} onClick={deleteHandler}>
								delete
							</Button>
						</li>
					))}
				</ul>
			</Card>
		</Wrapper>
	)
}
export default UserList
