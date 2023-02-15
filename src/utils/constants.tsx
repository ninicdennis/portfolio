import {
	SiHtml5,
	SiCss3,
	SiReact,
	SiTailwindcss,
	SiMaterialui,
	SiNextdotjs,
	SiJavascript,
	SiTypescript,
	SiNodedotjs,
	SiDocker,
	SiPostgresql,
	SiPrisma,
	SiSupabase,
	SiExpress,
	SiGraphql,
	SiApollographql,
} from 'react-icons/si';

export const FE_STACK_DATA = [
	{
		icon: <SiHtml5 className='fill-secondary' size={64} />,
		text: 'Html5',
	},
	{
		icon: <SiCss3 className='fill-secondary' size={64} />,
		text: 'CSS3',
	},
	{
		icon: <SiReact className='fill-secondary' size={64} />,
		text: 'React',
	},
	{
		icon: <SiNextdotjs className='fill-secondary' size={64} />,
		text: 'Next.js',
	},
	{
		icon: <SiTailwindcss className='fill-secondary' size={64} />,
		text: 'Tailwind-css',
	},
	{
		icon: <SiMaterialui className='fill-secondary' size={64} />,
		text: 'MUI',
	},
	{
		icon: <SiJavascript className='fill-secondary' size={64} />,
		text: 'Javascript',
	},
	{
		icon: <SiTypescript className='fill-secondary' size={64} />,
		text: 'Typescript',
	},
];

export const BE_STACK_DATA = [
	{
		icon: <SiNodedotjs className='fill-accent' size={64} />,
		text: 'Node.js',
	},
	{
		icon: <SiExpress className='fill-accent' size={64} />,
		text: 'Express.js',
	},
	{
		icon: <SiDocker className='fill-accent' size={64} />,
		text: 'Docker',
	},
	{
		icon: <SiPostgresql className='fill-accent' size={64} />,
		text: 'PostgreSQL',
	},
	{
		icon: <SiPrisma className='fill-accent' size={64} />,
		text: 'Prisma',
	},
	{
		icon: <SiSupabase className='fill-accent' size={64} />,
		text: 'Supabase',
	},
	{
		icon: <SiGraphql className='fill-accent' size={64} />,
		text: 'Graphql',
	},
	{
		icon: <SiApollographql className='fill-accent' size={64} />,
		text: 'Apollo Studio',
	},
];
export const PROJECTS = [
	{
		key: 'projectCar',
		title: 'Project Car ( Retired )',
		image: '/projectcar.png',
		description:
			'Project:car is a website designed to create car profiles, sell items on the marketplace, and locate events for car groups! This is a Next.js project bootstrapped with create-next-app. This application is also using mantine.dev for the UI.',
		enabled: true,
		github: 'https://github.com/ninicdennis/project-car',
	},
	{
		key: 'comingSoon1',
		title: 'Coming Soon!',
		image: '',
		description: 'More Projects Coming Soon!',
		enabled: false,
		github: 'https://github.com/ninicdennis/',
	},
	{
		key: 'comingSoon2',
		title: 'Coming Soon!',
		image: '',
		description: 'More Projects Coming Soon!',
		enabled: false,
		github: 'https://github.com/ninicdennis/',
	},
];
