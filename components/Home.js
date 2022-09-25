import styles from "../styles/Home.module.css";
import { FaShoppingBag, FaBars, FaUserAlt, FaMapMarker } from "react-icons/fa";
import { FaKickstarterK } from "react-icons/fa";

import Card from "./Card";

function Home() {
	const productInfos = [
		{
			title: "La PIZZA du quatier",
			info: "Le chef ne parle qu'Italien!",
			background: "pizza.jpeg",
		},
		{
			title: "Le BURGER SoulFood",
			info: "Celui la qu'on mange avant de prendre son Metro!",
			background: "burger.jpeg",
		},
		{
			title: "Le WOK de BangKok",
			info: "Vous voyez la Street Food , la VRAIE!",
			background: "wok.jpeg",
		},
		{
			title: "la SALADE qui donne envie",
			info: "Cette salade qui fera envie à Tous!",
			background: "salade.jpeg",
		},
		// {
		// 	title: "PHANTOM II WhiteXXX",
		// 	info: "Intensively immersive.",
		// 	background: "emsemble-food.webp",
		// },
	];

	const productInfosComplete = productInfos.map((data) => {
		return <Card title={data.title} info={data.info} background={data.background} />;
	});

	return (
		<div>
			<div className={styles.homeTop}>
				<header className={styles.nav}>
					<div className={styles.btn}>
						<span>
							<FaBars />
						</span>
					</div>
					<div className={styles.titleName}>
						<p>FOOD STORE</p>
					</div>
					<div className={styles.iconPlus}>
						<span>
							<FaUserAlt />
						</span>
						<span>
							<FaMapMarker />
						</span>
						<span>
							<FaShoppingBag />
						</span>
					</div>
				</header>
				<div className={styles.discover}>
					<div className={styles.focus}>
						<span>MANGER</span>
						<span>LE VRAI GOUT DES PLATS</span>
					</div>
					<div className={styles.btnChoice}>
						<button className={styles.what}>Nous decouvrir</button>
						<button className={styles.buy}>
							<a href="#order">commander</a>{" "}
						</button>
					</div>
				</div>
			</div>

			<main>
				<div className={styles.mainTop}>
					<div className={styles.mainTopTitle}>
						<span className={styles.titleOne}>C'est parti</span>
						<span className={styles.titleTwo}>ON SORT LES COUVERTS</span>
					</div>
					<div className={styles.mainTopImg}>
						{" "}
						<img src="food-ban.png" alt="" />
					</div>
					<div className={styles.mainTopLink}>
						<button>
							<a href="#order">COMMANDER</a>
						</button>
					</div>
				</div>
				<div id="order" className={styles.mainContent}>
					{productInfosComplete}
					{/* <div className={styles.card}>{productInfosComplete}</div> */}
				</div>
			</main>
			<footer>
				<div className={styles.footer}>
					<span className={styles.linkFooter}>RESTAURANTS</span>
					<span className={styles.linkFooter}>CONTACT</span>
					<span className={styles.linkFooter}>ABOUT</span>
					<span className={styles.linkFooter}>SUPPORT</span>
				</div>
			</footer>
		</div>
	);
}

export default Home;
