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
  resume: 'https://drive.google.com/file/d/1GinAgpiCRThAP3ljAyBSmsYbb7EeNTu0/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'kevin-bacon.png',
    title: 'Six Degrees of Kevin Bacon',
    info: "In this project, I developed a C++ program that utilizes a graph data structure and breadth-first search to find the shortest path between any two actors in the IMDb database. By constructing a graph of the relationships between actors based on the movies they have appeared in, the program is able to efficiently find the connection between any two actors and output the specific movies and co-actors that form the path. This project demonstrates my ability to design and implement a graph data structure and utilize it to solve a real-world problem, as well as my proficiency in C++ programming.",
    repo: 'https://github.com/ashw24/Projects/tree/main/C%2B%2B%20Projects%20-%20Data%20Structures%20and%20Algorithms/six-degrees-of-kevin-bacon', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'myq.jpg',
    title: 'NQueens Without Recursion',
    info: 'In this project, I wrote a C++ program that solves the N Queens problem using a stack-based backtracking algorithm. The N Queens problem consists of placing N queens on an NxN chessboard such that no two queens attack each other and can be represented as a search tree, with each level corresponding to a row and each child representing a possible placement. My program starts at the root of the tree and pushes nodes onto a stack as it traverses, and pops nodes off the stack when it backtracks. This project demonstrates my ability to implement a non-recursive backtracking algorithm and use it to solve a classic computer science problem.',
    repo: 'https://github.com/ashw24/Projects/tree/main/C%2B%2B%20Projects%20-%20Data%20Structures%20and%20Algorithms/nqueens-without-recursion', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sodukopuzzle.png',
    title: 'Sudoku/SAT Solver',
    info: ' I wrote a Python program that uses the boolean satisfiability (SAT) problem to solve Sudoku puzzles. Given a partially filled-in grid, the goal is to fill in the remaining cells such that every row, column, and 3x3 subgrid contains the digits 1 through 9 without repetitions. This problem can be represented as a boolean formula, where each cell corresponds to a boolean variable and the constraints are represented using logical clauses. I used the pycosat library to find a satisfying assignment and implemented a function to convert the boolean formula into conjunctive normal form using the Tseitin transformation.',
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
