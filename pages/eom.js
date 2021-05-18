import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/eom.module.css";

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
					<h3>{employee.name}</h3>
					<h6>{employee.position}</h6>
					<img src={employee.image} />
					<p>{employee.description}</p>
				</div>
			</div>
		</>
	);
}

export default Eom;
