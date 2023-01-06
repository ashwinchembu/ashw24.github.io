import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ashwin Chembu | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
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
  img: 'ashwin.jpeg',
  paragraphOne: 'My name is Ashwin Chembu and I am a Computer Engineering student at UC Santa Cruz with a competitive GPA and certifications in data science and cloud computing. I have developed a strong foundation in programming and a passion for technology, and I have 2-3 years of hands-on experience in customer service, data analytics, machine learning, and software development.',
  paragraphTwo: "I am highly motivated to continue learning and growing as a professional, and I am seeking internship opportunities in spring and summer 2023 to gain professional work experience and further develop my skills. I am a dedicated and hardworking individual with strong time management and teamwork skills, and I am eager to make a meaningful contribution to the field through the development of innovative tools and solutions.",
  paragraphThree: "I am set to graduate in mid-2024, and my goal is to explore and contribute to the fields of data analytics, machine learning, and cybersecurity. If you are looking for a motivated intern with a solid foundation in computer science, a competitive GPA, and practical experience in a variety of technical fields, please don't hesitate to reach out. I am confident that my technical skills, strong work ethic, and dedication to learning make me a valuable asset to any team.",
  resume: 'https://drive.google.com/file/d/1PLhW6o0MAl8Kwog-alQz7kf_rWV0c1L3/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'kevin-bacon.png',
    title: 'Six Degrees of Kevin Bacon',
    info: "Using a text file consisting of movie names and actors, I was able to determine a path from one actor to another based on the movies they and their costars have acted in. Utilizing Graphs and a Breadth First Search algorithm, I was able to find the shortest number of connections required to connect these actors. This project was based on the pop-culture game Six Degrees of Kevin Bacon(Bacon's Law).",
    repo: 'https://github.com/ashw24/Projects/tree/main/C%2B%2B%20Projects%20-%20Data%20Structures%20and%20Algorithms/six-degrees-of-kevin-bacon', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'myq.jpg',
    title: 'NQueens Without Recursion',
    info: 'Utilizing the stack data structure, I was able to simulate recursion with backtracking and solve the n-queens problem. The n-queens problem takes a chessboard of size n and existing queens and utilizes that information to determine where n queens can be placed without attacking one another.',
    repo: 'https://github.com/ashw24/Projects/tree/main/C%2B%2B%20Projects%20-%20Data%20Structures%20and%20Algorithms/nqueens-without-recursion', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sodukopuzzle.png',
    title: 'Sudoku/SAT Solver',
    info: 'Developed a machine learning algorithm that utilized the Glucose SAT solver and Python in order to solve boolean expressions in Sudoku format by parsing through multi-dimensional arrays.',
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
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
