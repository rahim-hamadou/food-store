import styles from "../styles/Card.module.css";

function Card(props) {
	return (
		<div className={styles.cardType}>
			<div className={styles.cardText}>
				<div className={styles.textInfo}>
					<span className={styles.title}>{props.title}</span>
					<span className={styles.info}>{props.info}</span>
				</div>
				<button>COMMANDER</button>
			</div>
		</div>
	);
}

export default Card;
