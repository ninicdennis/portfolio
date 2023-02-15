const IconCard = ({ text, icon }: { text: string; icon: JSX.Element }) => {
	return (
		<div className='card shadow-xl mt-l bg-base-100 basis-1/5'>
			<div className='card-body justify-center transform transition duration-500 hover:scale-110'>
				<div className='card-actions justify-center'>{icon}</div>
				<div className='card-actions justify-center'>{text}</div>
			</div>
		</div>
	);
};

export default IconCard;
