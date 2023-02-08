import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpeg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Ashwin Chembu - Software Developer" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Welcome to my website</h2>
                </header>
                <p>
                  My name is Ashwin Chembu and I am a Computer Engineering student at UC Santa Cruz with a competitive GPA and certifications in data science and cloud computing. I have developed a strong foundation in programming and a passion for technology, and I have 2-3 years of hands-on experience in customer service, data analytics, machine learning, and software development. I am highly motivated to continue learning and growing as a professional, and I am seeking internship opportunities in spring and summer 2023 to gain professional work experience and further develop my skills. I am a dedicated and hardworking individual with strong time management and teamwork skills, and I am eager to make a meaningful contribution to the field through the development of innovative tools and solutions. I am set to graduate in mid-2024, and my goal is to explore and contribute to the fields of data analytics, machine learning, and cybersecurity. If you are looking for a motivated intern with a solid foundation in computer science, a competitive GPA, and practical experience in a variety of technical fields, please don't hesitate to reach out. I am confident that my technical skills, strong work ethic, and dedication to learning make me a valuable asset to any team.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="https://www.linkedin.com/in/ashwin-chembu-a5292b205/" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major fa-duotone fa-diagram-project"></span>
                <h3>Six Degrees of Kevin Bacon</h3>
                <p>
                  In this project, I developed a C++ program that utilizes a graph data structure and breadth-first search to find the shortest path between any two actors in the IMDb database. 
                </p>
              </li>
              <li>
                <span className="icon major fa-light fa-puzzle"></span>
                <h3>Sudoku/SAT Solver</h3>
                <p>
                  I wrote a Python program that uses the boolean satisfiability (SAT) problem to solve Sudoku puzzles. Given a partially filled-in grid, the goal is to fill in the remaining cells such that every row, column, and 3x3 subgrid contains the digits 1 through 9 without repetitions. 
                </p>
              </li>
              <li>
                <span className="icon major fa-recycle"></span>
                <h3>Sorta</h3>
                <p>
                  Sorta is a comprehensive waste management solution that provides a machine learning model to determine the waste type, SMS updates on recycling, trash, pollution, and the environment, a chatbot to assist with navigation, and general waste management information. 
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="https://github.com/ashw24" className="button">
                    More on My Github
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Work Experience</h2>

              <p>
                Photon Commerce
              </p>

            </header>
            <p className="content">
              - Collaborated with cross-functional teams to identify and resolve bugs and technical issues                           

              - Conducted thorough manual testing to validate the functionality and performance of software
              applications                                            

              - Improved software quality by detecting and reporting defects and recommending solutions

              - Contributed to the improvement of software development processes by identifying areas for
              improvement and implementing changes.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="https://www.photoncommerce.com" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Contact Me</h2>
              <p>
               Thank you for visiting my website. If you would like to get in touch with me for any questions,
                <br />
               inquiries or to simply say hello, please don't hesitate to reach out. I'd be happy to hear from you!
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="https://www.linkedin.com/in/ashwin-chembu-a5292b205/" className="button special">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link to="ashchembu@gmail.com" className="button">
                    Email
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
