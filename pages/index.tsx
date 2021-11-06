import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>MXB Home Page</title>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Yes, I am Mysterious X Beauty
				</h1>
			</main>

			<footer className={styles.footer}>
				<a
					href='https://www.instagram.com/mysteriousxbeauty'
					target='_blank'
					rel='noopener noreferrer'
				>
					Instagram
				</a>
			</footer>
		</div>
	);
};

export default Home;
