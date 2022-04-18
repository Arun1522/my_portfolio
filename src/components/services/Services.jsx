import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-item" />
              <p>Match your project ideas with our team’s skills</p>
            </li>
            <li>
              <BiCheck className="service__list-item" />
              <p>I gauge your needs and assign web developers and coders.</p>
            </li>
            <li>
              <BiCheck className="service__list-item" />
              <p>We create the paperwork required to take the project ahead.</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-item" />
              <p>
                You interact with your dedicated team to iron out details and
                specifications.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-item" />
              <p>
                Our developers and project managers start the development
                process, which you can review on a timely basis.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-item" />
              <p>
                We maintain a constant line of communication using emails, Skype
                and calls.
              </p>
            </li>
          </ul>
        </article>

        {/* END OF Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-item" />
              <p>
                Our web development team puts out the first project prototype.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-item" />
              <p>
                We conduct a set of tests to fix bugs and make sure it’s
                user-friendly.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-item" />
              <p>
                The project is delivered and launched on the agreed-upon
                platform.
              </p>
            </li>
          </ul>
        </article>

        {/* END OF Content Creation */}
      </div>
    </section>
  );
};

export default Services;
