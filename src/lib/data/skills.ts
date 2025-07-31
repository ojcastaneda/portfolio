export type Skill = (typeof skills)[number];
const skills = [
	'Angular',
	'AWS',
	'Axum',
	'Bouncy Castle',
	'Dart',
	'Docker',
	'Express',
	'Git',
	'Hugging Face',
	'Java',
	'MLflow',
	'MSSQL',
	'Next.js',
	'Node.js',
	'Pandas',
	'PostgresSQL',
	'Python',
	'Pytorch',
	'React',
	'Rust',
	'Scikit-learn',
	'TypeScript'
] as const;

export default skills;
