import styles from './Button.module.css'

const Button = (props) => {
	console.log(props);
	return (
		<button 
            id={props.id}
			className={`${styles.button} ${props.className}`}
			type={props.type || 'button'}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
}
export default Button

