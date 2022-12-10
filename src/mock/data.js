import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Ashwin Chembu',
  subtitle: 'Aspiring Software Engineer',
  cta: 'More About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'https://media.licdn.com/dms/image/C5603AQEQvjYBNtgt2Q/profile-displayphoto-shrink_800_800/0/1649897896533?e=1675900800&v=beta&t=zeYoowdnW3gv813nID3XNCPvqwuy_fRL8OK1aBsWCaA',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'kevin-bacon.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/ashw24/Projects/tree/main/C%2B%2B%20Projects%20-%20Data%20Structures%20and%20Algorithms/six-degrees-of-kevin-bacon"><img src="https://images.squarespace-cdn.com/content/v1/53cdd8f4e4b0c984e433fab1/1520818869918-RZ4I444SU983ANA4CLCF/kevin-bacon.png?format=1000w', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'myq.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/ashw24/Projects/tree/main/C%2B%2B%20Projects%20-%20Data%20Structures%20and%20Algorithms/nqueens-without-recursion', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sodukopuzzle.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/ashw24/Projects/blob/main/Python%20Projects(Data%20Structures%20and%20Algorithms)/Sudoku-SAT%20Solver.ipynb', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Contact me!',
  btn: 'Email',
  email: 'ashchembu@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ashwin-chembu-a5292b205/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ashw24',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
