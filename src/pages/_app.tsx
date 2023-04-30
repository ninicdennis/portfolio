import Footer from '@/components/footer';
import Header from '@/components/header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import { Lato } from 'next/font/google';
import Head from 'next/head';

const lato = Lato({
	weight: ['100', '300', '400', '700', '900'],
	subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
	// ? Used to fix some hydration issue for themeChange
	useEffect(() => {
		themeChange(false);
	});

	return (
		<>
			<Head>
				<title>Dennis Ninic - Web Developer</title>
			</Head>
			<style jsx global>{`
				html {
					font-family: ${lato.style.fontFamily};
				}
			`}</style>
			<Header {...pageProps} />

			<Component {...pageProps} />
			<Footer />
		</>
	);
}
