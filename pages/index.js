import Head from 'next/head';
import { useState } from 'react';

import Header from '../components/Header';
import Information from '../components/Information';
import Menu from '../components/Menu';
import Card from '../components/shared/Card';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Home() {
	const [view, setView] = useState('Menu');
	const changeView = () => {
		view === 'Info' ? setView('Menu') : setView('Info');
	};

  const isMobile = useIsMobile();

	let content = (
		<>
			<Information />
			<Menu />
		</>
	);
	if (isMobile) {
		content = (
			<>
				<h1 className="title">{"Joe's Pizza"}</h1>

				<Card className={'menu_info'}>
					{view === 'Menu' ? <Information /> : <Menu />}
				</Card>
				<button className="view_btn" onClick={changeView}>
					{view}
				</button>
			</>
		);
	}

	return (
		<div className="app">
			<Head>
				<title>{"Joe's Pizza"}</title>
				<meta
					name="description"
					content="Italian Pizza Restaurant In Schaumburg Illinois"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css?family=Italianno"
					rel="stylesheet"
				></link>
			</Head>
			<main className="main" id="theme">
				<Header />

				<div className="main_content">{content}</div>
			</main>
		</div>
	);
}
