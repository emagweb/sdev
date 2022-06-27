const u001 = ['vscode', 'css', 'javascript', 'jquery', 'wordpress', 'mysql']
const u002 = ['ruby', 'plan9', 'postgres', 'powershell', 'pr', 'prisma']
const u003 = ['bash', 'bevy', 'blender', 'bootstrap', 'bsd', 'c']
const u004 = ['github', 'gitlab', 'gherkin', 'linux', 'lua', 'md']
const u005 = ['ps', 'php', 'sketchup', 'svelte', 'svg', 'swift']
const u006 = ['aws', 'ableton', 'julia', 'kotlin', 'wordpress', 'workers']
const u007 = ['mongodb', 'mysql', 'neovim', 'nestjs', 'vue', 'wordpress']
const u008 = ['hibernate', 'html', 'idea', 'ai', 'instagram', 'js']
const u009 = ['kotlin', 'ktor', 'kubernetes', 'laravel', 'latex', 'linkedin']
const u010 = ['html', 'idea', 'ai', 'instagram', 'java', 'js']
const u011 = ['gamemakerstudio', 'gatsby', 'gcp', 'git', 'github', 'gitlab']
const u012 = ['emotion', 'express', 'fastapi', 'fediverse', 'figma', 'firebase']

const pics = ['backend', 'designer', 'devops', 'frontend', 'gamedev', 'hiring', 'lawyer', 'marketing', 'mobile', 'pm', 'smm', 'software']

const picuri = 'https://emagweb.github.io/sdev/icons/'

const iconuri = 'https://skillicons.dev/icons?i='

const UserList = [
	{
		id: 'bswswh6dJ',
		pic: '../assets/svg/position/backend.svg',
		salary: 42,
		years: '8',
		main: picuri + pics[0] + '.svg',
		position: 'Backend developer',
		skillset: iconuri + u002 + '&perline=6',
		desc: `Backend developer. Web development  with the use of CMS WordPress, Woocommerce of solutions of arbitrary complexity`
	},
	{
		id: 'x5bHddkj2',
		pic: '../assets/svg/position/designer.svg',
		salary: 38,
		years: '22',
		main: picuri + pics[1] + '.svg',
		position: 'UI/UX Designer',
		skillset: iconuri + u008 + '&perline=6',
		desc: `Design and development. Web  the use of CMS WordPress, Woocommerce development of solutions of arbitrary complexity with`
	},
	{
		id: 'keb8k4ej2',
		pic: '../assets/svg/position/devops.svg',
		salary: 72,
		years: '30',
		main: picuri + pics[2] + '.svg',
		position: 'DevOps',
		skillset: iconuri + u007 + '&perline=6',
		desc: `DevOps. Web development of solutions of  the use of arbitrary complexity with CMS WordPress Woocommerce`
	},
	{
		id: 'sdde5bHj2',
		pic: '../assets/svg/position/frontend.svg',
		salary: 38,
		years: '14',
		main: picuri + pics[3] + '.svg',
		position: 'Frontend developer',
		skillset: iconuri + u006 + '&perline=6',
		desc: `Frontend development on Angular2+, HTML, , etc. Web development of solutions CSS/SCSS JavaScript, jQuery of arbitrary complexity with the use of CMS WordPress, Woocommerce`
	},
	{
		id: 'bdj5Jk4e5',
		pic: '../assets/svg/position/gamedev.svg',
		salary: 62,
		years: '9',
		main: picuri + pics[4] + '.svg',
		position: 'Game developer',
		skillset: iconuri + u005 + '&perline=6',
		desc: `Web development of solutions of arbitrary complexity with the use of CMS WordPress, Woocommerce, Game development on Angular2+, HTML, CSS/SCSS JavaScript, jQuery, etc. `
	},
	{
		id: 'vddJsk4e2',
		pic: '../assets/svg/position/hiring.svg',
		salary: 44,
		years: '3',
		main: picuri + pics[5] + '.svg',
		position: 'HR manager',
		skillset: iconuri + u011 + '&perline=6',
		desc: `Front-end development on Angular2+, HTML, CSS/SCSS JavaScript, jQuery, with the use of CMS WordPress, Woocommerce etc. Web development of solutions of arbitrary complexity `
	},
	{
		id: 'ljdJkshj2',
		pic: '../assets/svg/position/lawyer.svg',
		salary: 64,
		years: '12',
		main: picuri + pics[6] + '.svg',
		position: 'International lawyer',
		skillset: iconuri + u012 + '&perline=6',
		desc: `Practical experience in the field of international law;  in the field of Polish and Ukrainian legislation; Knowledge and practical experience Experience in negotiation and business correspondence`
	},
	{
		id: 'pnf64bHj2',
		pic: '../assets/svg/position/marketing.svg',
		salary: 32,
		years: '11',
		main: picuri + pics[7] + '.svg',
		position: 'Marketing manager',
		skillset: iconuri + u003 + '&perline=6',
		desc: `Marketing manager. Web development of solutions of arbitrary complexity with the use of CMS WordPress, Woocommerce`
	},
	{
		id: 'kshks4Hj2',
		pic: '../assets/svg/position/mobile.svg',
		salary: 52,
		years: '4',
		main: picuri + pics[8] + '.svg',
		position: 'Mobile developer',
		skillset: iconuri + u010 + '&perline=6',
		desc: `HTML, CSS/SCSS JavaScript, jQuery, etc.  of arbitrary complexity with the use of CMS WordPress, WoocommerceWeb development of solutions`
	},
	{
		id: 'llmbw7s78',
		pic: '../assets/svg/position/pm.svg',
		salary: 38,
		years: '16',
		main: picuri + pics[9] + '.svg',
		position: 'Project manager',
		skillset: iconuri + u004 + '&perline=6',
		desc: `Project manager. Web development of solutions of arbitrary complexity with the use of CMS WordPress, Woocommerce`
	},
	{
		id: 'gfdkkJ6b4',
		pic: '../assets/svg/position/smm.svg',
		salary: 36,
		years: '6',
		main: picuri + pics[10] + '.svg',
		position: 'SMM manager',
		skillset: iconuri + u009 + '&perline=6',
		desc: `jQuery, of arbitrary complexity with the use of CMS WordPress, Woocommerce etc. Web development of solutions`
	},
	{
		id: 'rfjdJk4e5',
		pic: '../assets/svg/position/software.svg',
		salary: 48,
		years: 5,
		main: picuri + pics[11] + '.svg',
		position: 'Software engineer',
		skillset: iconuri + u001 + '&perline=6',
		desc: `Software engeener. Web development of solutions of arbitrary complexity with the use of CMS WordPress, Woocommerce`
	}
]

export default UserList