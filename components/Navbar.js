import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";

function Navbar() {
	const router = useRouter();

	return (
		<div className={styles.main}>
			<div onClick={() => router.push("/")}>Home</div>
			<div onClick={() => router.push("/feed/1")}>Feed</div>
			<div onClick={() => router.push("/eom")}>Eom</div>
			<div onClick={() => (window.location.href = "https://www.facebook.com")}>
				Social
			</div>
		</div>
	);
}

export default Navbar;
