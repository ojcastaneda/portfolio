import type { Component } from 'svelte';
import type { Skill } from './skills';
import MdiGithub from '~icons/mdi/github';
import MdiInternet from '~icons/mdi/internet';
import MdiUniversity from '~icons/mdi/university';

export interface Project {
	id: string;
	image: string;
	name: string;
	skills: Skill[];
	source: 'academic' | 'personal' | 'professional';
	urls: { icon: Component; url: string }[];
}

const projects: Project[] = [
	{
		id: 'ost',
		image: 'osu.svg',
		name: 'osu! Stamina Trainer',
		skills: [
			'AWS',
			'Axum',
			'Docker',
			'Git',
			'Next.js',
			'Node.js',
			'PostgresSQL',
			'React',
			'Rust',
			'TypeScript'
		],
		source: 'personal',
		urls: [
			{ icon: MdiInternet, url: 'https://ost.sombrax79.org/commands' },
			{ icon: MdiGithub, url: 'https://github.com/ojcastaneda/osu-stamina-trainer' }
		]
	},
	{
		id: 'stet',
		image: 'andes.png',
		name: 'Semantic Transparency Evaluation Tool',
		skills: ['Express', 'React', 'TypeScript'],
		source: 'academic',
		urls: [
			{
				icon: MdiUniversity,
				url: 'https://repositorio.uniandes.edu.co/entities/publication/6b06721b-e864-4d8d-9d33-ec9cd39715b2'
			}
		]
	},
	{
		id: 'sud',
		image: 'andes.png',
		name: 'Spanish Humor Detection',
		skills: ['Git', 'Hugging Face', 'MLflow', 'Pandas', 'Python', 'Pytorch', 'Scikit-learn'],
		source: 'academic',
		urls: [{ icon: MdiGithub, url: 'https://github.com/ojcastaneda/spanish-humor-detection' }]
	},
	{
		id: 'cv',
		image: 'cyte.png',
		name: 'CryptoVault',
		skills: ['Bouncy Castle', 'Git', 'Java'],
		source: 'professional',
		urls: [{ icon: MdiInternet, url: 'https://www.cyte.co/crypto-vault' }]
	},
	{
		id: 'cv_ultra',
		image: 'cyte.png',
		name: 'CryptoVault Ultra',
		skills: ['Bouncy Castle', 'Docker', 'Git', 'Java', 'MSSQL'],
		source: 'professional',
		urls: [{ icon: MdiInternet, url: 'https://www.cyte.co/crypto-vault-ultra' }]
	},
	{
		id: 'notyfind',
		image: 'cyte.png',
		name: 'Notyfind',
		skills: ['Angular', 'Docker', 'Git', 'Java', 'MSSQL', 'TypeScript'],
		source: 'professional',
		urls: [{ icon: MdiInternet, url: 'https://www.cyte.co/notyfind' }]
	},
	{
		id: 'webarmor',
		image: 'cyte.png',
		name: 'WebArmor',
		skills: ['Dart', 'Git', 'Node.js', 'TypeScript'],
		source: 'professional',
		urls: [{ icon: MdiInternet, url: 'https://www.cyte.co/web-armor' }]
	},
	{
		id: 'quantumtalk',
		image: 'cyte.png',
		name: 'QuantumTalk',
		skills: ['Angular', 'Express', 'Git', 'Node.js', 'TypeScript'],
		source: 'professional',
		urls: [{ icon: MdiInternet, url: 'https://www.cyte.co/quantumtalk' }]
	}
];

export default projects;
