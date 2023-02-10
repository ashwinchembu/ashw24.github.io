import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Little About Me</h2>
      <p>
      I am a highly motivated and competitive college student with a passion for technology and computer science. I have a solid foundation in these areas and possess certifications in data science and cloud computing, along with hands-on experience. I am a skilled time manager, a team player, and a dedicated individual who can listen carefully, complete tasks efficiently, and make meaningful contributions to a team. 
      </p>
    </section>
    <section>
      <h2>Contact Info</h2>
      <dl className="alt">
        <dt>Phone</dt>
        <dd>(341) 356-1722</dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:ashchembu@gmail.com">ashchembu@gmail.com</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://github.com/ashw24"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ashwin-chembu-a5292b205/" className="icon fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
    </section>
  </footer>
)

export default Footer
