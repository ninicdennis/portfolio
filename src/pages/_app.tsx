import Footer from '@/components/footer';
import Header from '@/components/header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

export default function App({ Component, pageProps }: AppProps) {
	// ? Used to fix some hydration issue for themeChange
	useEffect(() => {
		themeChange(false);
	});

	return (
		<>
			<Header {...pageProps} />

			<Component {...pageProps} />
			<Footer />
		</>
	);
}
