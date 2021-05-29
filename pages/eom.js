import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/eom.module.css";

import Image from "next/image";

export const getServerSideProps = async (pageContext) => {
	const apiResponse = await fetch(
		"https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
	);

	const employee = await apiResponse.json();

	return {
		props: {
			employee,
		},
	};
};

function Eom({ employee }) {
	return (
		<>
			<Head>
				<title>Employee of the Month</title>
				<meta
					name="description"
					content={`This month's employee of the month is ${employee.name}`}
				/>
			</Head>
			<div className="page-container">
				<Navbar />
				<div className={styles.main}>
					<h1>Employee of the Month</h1>
				</div>
				<div className={styles.eom}>
					<h3>Alvin Acosta</h3>
					<h6>Full Stack Developer</h6>
					<Image src={"/pogi.jpg"} width={100} height={120} />
					<p>Dev Guy and Gamer</p>
				</div>
			</div>
		</>
	);
}

export default Eom;
