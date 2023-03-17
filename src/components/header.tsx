import { useEffect, useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { FaSun } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
	const [check, setCheck] = useState(false);

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme === 'corporate') setCheck(true);
	}, []);

	return (
		<div>
			<div className='navbar bg-base-300 justify-between'>
				<Link className='btn btn-ghost normal-case text-xl' href='/'>
					Dennis Ninic
				</Link>
				<button
					aria-label='Theme Toggle'
					className='btn btn-square'
					data-set-theme={check ? 'dracula' : 'corporate'}
					data-act-class='ACTIVECLASS'
					onClick={() => setCheck(check ? false : true)}
				>
					{check ? <MdDarkMode size={32} /> : <FaSun size={32} />}
				</button>
			</div>
		</div>
	);
};

export default Header;
