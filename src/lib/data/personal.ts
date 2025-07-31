import type { Component } from 'svelte';
import MdiEmail from '~icons/mdi/email';
import MdiGithub from '~icons/mdi/github';
import MdiLinkedin from '~icons/mdi/linkedin';

interface Personal {
	location: string;
	name: string;
	socials: { icon: Component; url: string }[];
}
const personal: Personal = {
	name: 'Oscar Julián Castañeda Gutiérrez',
	location: 'Neiva, Colombia',
	socials: [
		{
			icon: MdiEmail,
			url: 'mailto:ojcastaneda@proton.me'
		},
		{
			icon: MdiGithub,
			url: 'https://www.linkedin.com/in/ojcastaneda'
		},
		{
			icon: MdiLinkedin,
			url: 'https://github.com/ojcastaneda'
		}
	]
};

export default personal;
