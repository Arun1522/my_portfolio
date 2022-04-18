import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/img1.webp';
import IMG2 from '../../assets/img2.webp';
import IMG3 from '../../assets/img3.webp';
import IMG4 from '../../assets/img4.webp';
import IMG5 from '../../assets/img5.webp';
import IMG6 from '../../assets/img6.webp';

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Present this modern and futuristic concept for a',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17982155/attachments/13164749?mode=media',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Presenting a milk product company website landing page.',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17982155/attachments/13164749?mode=media',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Podcasts have always been one-way conversations',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17982155/attachments/13164749?mode=media',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Popular and top-rated video games and a search bar and',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17982155/attachments/13164749?mode=media',
  },
  {
    id: 5,
    image: IMG5,
    title: 'We chose a bluish color palette with dark blue as ',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17982155/attachments/13164749?mode=media',
  },
  {
    id: 6,
    image: IMG6,
    title:
      'The neumorphic Soft UI kit for Sketch, Photoshop, Adobe illustrator',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17982155/attachments/13164749?mode=media',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
