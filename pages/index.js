import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<div className="page-container">
			<Navbar />
			<div className={styles.main}>
				<h1>NextJs News App</h1>

				<h3>Your one stop shop for the latest news articles.</h3>
			</div>
		</div>
	);
}
