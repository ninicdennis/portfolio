import Image from 'next/image';
import { IoIosConstruct } from 'react-icons/io';

type ProjectCardProps = {
	title: string;
	description: string;
	image: string;
	enabled: boolean;
	github: string;
};

const ProjectCard = ({ title, description, image, enabled, github }: ProjectCardProps) => {
	return (
		<div className='card w-96 bg-base-100 shadow-xl'>
			<figure>
				{image.length ? (
					<Image src={image} width={500} height={200} alt='Project' />
				) : (
					<IoIosConstruct size={128} className='mt-16 mb-16' />
				)}
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{title}</h2>
				<p>{description}</p>
				<div className='card-actions justify-end'>
					<button disabled className='btn btn-secondary'>
						Live
					</button>

					<a
						target='_blank'
						rel='noreferrer'
						href={github}
						aria-label='Github'
						className={`btn btn-primary ${!enabled && 'btn-disabled'}`}
					>
						Github
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
