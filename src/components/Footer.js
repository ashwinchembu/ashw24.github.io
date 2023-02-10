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
          <a href="mailto:ashchembu@gmail.com"></a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/huntaroSan"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/codebushi/gatsby-starter-stellar"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-dribbble alt">
            <span className="label">Dribbble</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
