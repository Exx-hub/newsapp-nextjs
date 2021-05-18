import Navbar from "../../components/Navbar";
import styles from "../../styles/Feed.module.css";
import { useRouter } from "next/router";

export default function Feed({ articles, pageNumber }) {
	const router = useRouter();
	return (
		<div className="page-container">
			<Navbar />
			<div className={styles.main}>
				{articles.map((article, index) => (
					<div key={index} className={styles.post}>
						<h1 onClick={() => (window.location.href = article.url)}>
							{article.title}
						</h1>
						<p>{article.description}</p>
						{!!article.urlToImage && <img src={article.urlToImage} />}
					</div>
				))}
			</div>

			<div className={styles.pagination}>
				<div
					onClick={() => {
						if (pageNumber > 1) {
							router.push(`/feed/${pageNumber - 1}`);
						}
					}}
					className={pageNumber === 1 ? styles.disabled : styles.active}
				>
					<h1>1</h1>
				</div>
				<div>
					<h1>{pageNumber}</h1>
				</div>
				<div
					onClick={() => {
						if (pageNumber < 5) {
							router.push(`/feed/${pageNumber + 1}`);
						}
					}}
					className={pageNumber === 5 ? styles.disabled : styles.active}
				>
					<h1>5</h1>
				</div>
			</div>
		</div>
	);
}

export const getServerSideProps = async (pageContext) => {
	const pageNumber = pageContext.query.slug;
	console.log(pageNumber);

	if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
		return {
			props: {
				articles: [],
				pageNumber: 1,
			},
		};
	}

	const apiResponse = await fetch(
		`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.API_KEY}`,
			},
		}
	);

	const apiJson = await apiResponse.json();

	const { articles } = apiJson;

	return {
		props: {
			articles,
			pageNumber: parseInt(pageNumber),
		},
	};
};
