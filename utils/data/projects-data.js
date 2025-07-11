import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Gaming Arcade',
        description: "I have developed a full-stack gaming arcade web app using NextJS, Typescript, and TailwindCSS for the front-end, and ExpressJS, MongoDB, and OpenAI API for the back-end. The app features user authentication, game management, and a chat system. I deployed the front-end on Vercel and the back-end on AWS EC2.",
        tools: ['Express', 'NeonDB', 'SQL', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'NextJS', 'Tailwind CSS', 'TypeScript', 'OpenAI API'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
        livePreview: 'https://hardcore.lat',
    },
    {
        id: 2,
        name: 'Browser-Based Code Editor',
        description: 'I have developed a browser-based code editor using NextJS, TailwindCSS, and Sun Editor. The app features syntax highlighting, code formatting, and a live preview of the code. I used AWS S3 for file storage and Gmail Passkey for authentication. The app is fully responsive and works seamlessly on both desktop and mobile devices.',
        tools: ['NextJS', 'Tailwind CSS', "lua", "NestJS", "TypeScript", "Arweave", "AWS S3", "monaco-editor", "wander-wallet"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
        livePreview: 'https://code-editor-eta-ten.vercel.app/',
    },
    {
        id: 3,
        name: 'BrainRot studios',
        description: 'A meem crypto earning platform where user can play and earn BRS token and trade it in the market. I have developed a full-stack real estate web app using NextJS, TypeScript, and TailwindCSS for the front-end, and ExpressJS, MongoDB, and OpenAI API for the back-end. The app features user authentication, property management, and a chat system. I deployed the front-end on Vercel and the back-end on AWS EC2.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Express', 'TypeScript', 'NeonDB', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
        livePreview: 'https://www.brainrotstudios.fun/',
    },
    {
        id: 4,
        name: 'SpiderMan Game',
        description: "A browser-based game where user can play as SpiderMan and shoot the enemies to earn rewards.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
        livePreview: 'https://spiderman-bay.vercel.app/',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },