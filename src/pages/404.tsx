import Link from 'next/link';

const FourOhFour = () => {
	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content text-center'>
				<div className='max-w-md'>
					<h1 className='font-bold text-primary text-9xl'>404</h1>
					<h6 className='mb-2 text-2xl font-bold text-centermd:text-3xl'>Page not found</h6>
					<p className='mb-8 text-centermd:text-lg'>The page you’re looking for doesn’t exist.</p>
					<Link href='/' className='btn btn-primary'>
						Get Back Home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FourOhFour;
