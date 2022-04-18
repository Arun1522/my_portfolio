import React from 'react';
import './about.css';
import EDITT from '../../assets/arun.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={EDITT} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>12+ Completed</small>
            </article>
          </div>
          <p>
            I’m a Fullstack Developer located in India. I have a serious passion
            for Designing, Developing, UI, and creating intuitive, dynamic user
            experiences.
            <br /> I encompasses all of the layers of a web application, from
            the tech it runs on, to the database, to the user interface and
            business logic for the frontend.
            <br /> I'm able to work with code in the backend and in the frontend
            to build a web app, all using JavaScript. I'm also able to creating
            databases and APIs as I'm creating what the user sees.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
