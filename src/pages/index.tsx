import IconCard from '@/components/iconCard';
import Image from 'next/image';
import { FE_STACK_DATA, BE_STACK_DATA, PROJECTS } from '@/utils/constants';
import { useRef } from 'react';
import { SlSocialGithub, SlSocialLinkedin } from 'react-icons/sl';
import ProjectCard from '@/components/projectCard';

const Home = () => {
	const techStackRef = useRef(null);

	//@ts-ignore type issue
	const scrollToTechStack = () => techStackRef.current.scrollIntoView();
	return (
		<div>
			<div className='hero min-h-screen bg-base-200'>
				<div className='hero-content flex-col lg:flex-row'>
					<Image
						alt='me!'
						src='/myuglyface.jpeg'
						width={350}
						height={300}
						className='rounded-lg shadow-2xl'
						priority
					/>
					<div>
						<h1 className='text-5xl font-bold'>Hello there,</h1>
						<p className='py-6'>
							My name is Dennis Ninic, a full stack web developer, and a full time nerd. I love working with
							React, Next.js, Typescript, Node, and more! I Also love building and trying out all types of
							different and new technologies in the web space. Its nice to see you at my website!
						</p>
						<div className='btn-group'>
							<button className='btn btn-primary' onClick={scrollToTechStack}>
								Tech Specs
							</button>
							<a
								className='btn btn-inactive'
								// target='_blank'
								rel='noreferrer'
								href='/resume'
								aria-label='Resume'
							>
								Resume
							</a>
							<a
								className='btn btn-secondary'
								target='_blank'
								rel='noreferrer'
								href='https://github.com/ninicdennis'
								aria-label='Github'
							>
								<SlSocialGithub size={24} />
							</a>
							<a
								className='btn btn-accent'
								target='_blank'
								rel='noreferrer'
								href='https://www.linkedin.com/in/dennis-ninic/'
								aria-label='Linkedin'
							>
								<SlSocialLinkedin size={24} />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col justify-center mt-8' ref={techStackRef}>
				<p className='text-3xl  font-bold normal-case text-center mb-4'>Frontend Tech Stack</p>
				<div className='flex flex-wrap justify-center align-top gap-2'>
					{FE_STACK_DATA.map(({ icon, text }) => (
						<IconCard key={text} icon={icon} text={text} />
					))}
				</div>
			</div>
			<div className='flex flex-col justify-center mt-8'>
				<p className='text-3xl  font-bold normal-case text-center mb-4'>Backend Tech Stack</p>
				<div className='flex flex-wrap justify-center align-top gap-2'>
					{BE_STACK_DATA.map(({ icon, text }) => (
						<IconCard key={text} icon={icon} text={text} />
					))}
				</div>
			</div>

			<div className='bg-base-200 p-8 mt-8'>
				<p className='text-3xl font-bold normal-case text-center mb-4 mt-4'>Projects</p>
				<div className='flex flex-wrap justify-evenly align-top gap-2'>
					{PROJECTS.map(({ key, title, image, description, enabled, github }) => (
						<ProjectCard
							key={key}
							title={title}
							image={image}
							description={description}
							enabled={enabled}
							github={github}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
