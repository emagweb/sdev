const u001 = ['vscode', 'css', 'javascript', 'jquery', 'wordpress', 'mysql', 'php', 'wordpress', 'vscode', 'ps', 'figma']
const u002 = ['ruby', 'plan9', 'postgres', 'powershell', 'pr', 'prisma', 'prometheus', 'pug', 'py', 'pytorch']
const u003 = ['bash', 'bevy', 'blender', 'bootstrap', 'bsd', 'c', 'cs', 'cpp', 'cassandra', 'clojure']
const u004 = ['github', 'gitlab', 'gherkin', 'linux', 'lua', 'md']
const u005 = ['ps', 'php', 'sketchup', 'svelte', 'svg', 'swift', 'symfony']
const u006 = ['aws', 'ableton', 'julia', 'kotlin', 'wordpress', 'workers', 'zig']
const u007 = ['mongodb', 'mysql', 'neovim', 'nestjs', 'vue', 'wordpress', 'workers', 'zig']
const u008 = ['hibernate', 'html', 'idea', 'ai', 'instagram']
const u009 = ['kotlin', 'ktor', 'kubernetes', 'laravel', 'latex', 'linkedin']
const u010 = ['html', 'idea', 'ai', 'instagram', 'java', 'js', 'jenkins', 'jest', 'jquery', 'julia', 'kotlin']
const u011 = ['gamemakerstudio', 'gatsby', 'gcp', 'git', 'github', 'gitlab', 'gherkin', 'go', 'gradle', 'godot']
const u012 = ['emotion', 'express', 'fastapi', 'fediverse', 'figma', 'firebase', 'flask']

const iconuri = 'https://skillicons.dev/icons?i='

const UserList = [
	{
		id: 'rfjdJk4e5',
		pic: '../assets/svg/position/software.svg',
		salary: 48,
		years: 5,
		main: iconuri + 'php',
		position: 'Software engeener',
		skillset: iconuri + u001 + '&perline=5',
		desc: `Software engeener. Web development of solutions of arbitrary complexity with the use of CMS WordPress, Woocommerce`
	},
	{
		id: 'bswswh6dJ',
		pic: '../assets/svg/position/backend.svg',
		salary: 42,
		years: '8',
		main: iconuri + 'ruby',
		position: 'Backend developer',
		skillset: iconuri + u002 + '&perline=5',
		desc: `Backend developer. Web development of solutions of arbitrary complexity with the use of CMS WordPress, Woocommerce`
	},
	{
		id: 'llmbw7s78',
		pic: '../assets/svg/position/pm.svg',
		salary: 38,
		years: '16',
		main: iconuri + 'instagram',
		position: 'Project manager',
		skillset: iconuri + u004 + '&perline=5',
		desc: `Project manager. Web development of solutions of arbitrary complexity with the use of CMS WordPress, Woocommerce`
	},
	{
		id: 'bdj5Jk4e5',
		pic: '../assets/svg/position/gamedev.svg',
		salary: 62,
		years: '9',
		main: iconuri + 'gamemakerstudio',
		position: 'Game developer',
		skillset: iconuri + u005 + '&perline=5',
		desc: `Game development on Angular2+, HTML, CSS/SCSS JavaScript, jQuery, etc. Web development of solutions of arbitrary complexity with the use of CMS WordPress, Woocommerce`
	},
	{
		id: 'sdde5bHj2',
		pic: '../assets/svg/position/frontend.svg',
		salary: 38,
		years: '14',
		main: iconuri + 'vscode',
		position: 'Frontend developer',
		skillset: iconuri + u006 + '&perline=5',
		desc: `Frontend development on Angular2+, HTML, CSS/SCSS JavaScript, jQuery, etc. Web development of solutions of arbitrary complexity with the use of CMS WordPress, Woocommerce`
	},
	{
		id: 'keb8k4ej2',
		pic: '../assets/svg/position/devops.svg',
		salary: 72,
		years: '30',
		main: iconuri + 'aws',
		position: 'DevOps',
		skillset: iconuri + u007 + '&perline=5',
		desc: `DevOps. Web development of solutions of arbitrary complexity with the use of CMS WordPress, Woocommerce`
	},
	{
		id: 'pnf64bHj2',
		pic: '../assets/svg/position/marketing.svg',
		salary: 32,
		years: '11',
		main: iconuri + 'wordpress',
		position: 'Marketing manager',
		skillset: iconuri + u003 + '&perline=5',
		desc: `Marketing manager. Web development of solutions of arbitrary complexity with the use of CMS WordPress, Woocommerce`
	},
	{
		id: 'x5bHddkj2',
		pic: '../assets/svg/position/designer.svg',
		salary: 38,
		years: '22',
		main: iconuri + 'figma',
		position: 'UI/UX Designer',
		skillset: iconuri + u008 + '&perline=5',
		desc: `Design and development. Web development of solutions of arbitrary complexity with the use of CMS WordPress, Woocommerce`
	},
	{
		id: 'gfdkkJ6b4',
		pic: '../assets/svg/position/smm.svg',
		salary: 36,
		years: '6',
		main: iconuri + 'facebook',
		position: 'SMM manager',
		skillset: iconuri + u009 + '&perline=5',
		desc: `jQuery, etc. Web development of solutions of arbitrary complexity with the use of CMS WordPress, Woocommerce`
	},
	{
		id: 'kshks4Hj2',
		pic: '../assets/svg/position/mobile.svg',
		salary: 52,
		years: '4',
		main: iconuri + 'swift',
		position: 'Mobile developer',
		skillset: iconuri + u010 + '&perline=5',
		desc: `HTML, CSS/SCSS JavaScript, jQuery, etc. Web development of solutions of arbitrary complexity with the use of CMS WordPress, Woocommerce`
	},
	{
		id: 'vddJsk4e2',
		pic: '../assets/svg/position/hiring.svg',
		salary: 44,
		years: '3',
		main: iconuri + 'sketchup',
		position: 'HR manager',
		skillset: iconuri + u011 + '&perline=5',
		desc: `Front-end development on Angular2+, HTML, CSS/SCSS JavaScript, jQuery, etc. Web development of solutions of arbitrary complexity with the use of CMS WordPress, Woocommerce`
	},
	{
		id: 'ljdJkshj2',
		pic: '../assets/svg/position/lawyer.svg',
		salary: 64,
		years: '12',
		main: iconuri + 'wordpress',
		position: 'International lawyer',
		skillset: iconuri + u012 + '&perline=5',
		desc: `Practical experience in the field of international law; Knowledge and practical experience in the field of Polish and Ukrainian legislation; Experience in negotiation and business correspondence`
	}
]

export default UserList