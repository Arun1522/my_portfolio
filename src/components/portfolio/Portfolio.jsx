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
    title: 'E-commerce App: "Shoppio - Your Ultimate Online Marketplace"',
    github: 'https://github.com/Arun1522/store',
    demo: 'https://store-qchi.onrender.com/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Meal App: "MealMaster - Discover Delicious Meals Anytime"',
    github: 'https://github.com/Arun1522/Meal-App',
    demo: 'https://mealapps.vercel.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'BTech Chaiwala App: "TechTea - Uniting Techies Over Chai"',
    github: 'https://github.com/Arun1522/mbachaiwala',
    demo: 'https://btechchaiwala.netlify.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Attendance App: "AttendEZ - Simplifying Attendance Management"',
    github: 'https://github.com/Arun1522/ss_attendance',
    demo: 'https://ss-attendance.vercel.app/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Video Caption Generator App: "CaptionGenie - Create Captivating Video Captions"',
    github: 'https://github.com/Arun1522/Simple-Video-Captioning-Web-App',
    demo: 'https://videocaptioningapp.netlify.app/',
  },
  {
    id: 6,
    image: IMG6,
    title:'Courier Tracking App: "TrackSwift - Effortless Courier Tracking Solution"',
    github: 'https://github.com/Arun1522/theoctoppus',
    demo: 'https://theoctoppus.netlify.app/',
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
