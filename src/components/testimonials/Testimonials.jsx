import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.png';
import AVTR2 from '../../assets/avatar2.png';
import AVTR3 from '../../assets/avatar3.png';
import AVTR4 from '../../assets/avatar4.png';
import AVTR5 from '../../assets/avatar5.png';

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    avatar: AVTR1,
    alt: 'Akshit Rawat',
    name: 'Akshit Rawat',
    review:
      'Please make sure that you thank everyone at arunpandey for all of the work they have done, we are very happy with everything and will be recommending your services to anyone that will listen. Pass it on please.',
  },
  {
    avatar: AVTR2,
    alt: 'Kavita Pannu',
    name: 'Kavita Pannu',
    review:
      'We just completed our new website with arunpandey Web Design and are so excited to have it live!! It is so professionally done and eye appealing, not to mention how great it looks and works with mobile devices. We tried it on an iPhone and a Droid and it was great on both! We love how easy it is to make changes ourselves, (after some training from arunpandey) yet know we have the support when/if we need it.',
  },
  {
    avatar: AVTR3,
    alt: 'Ketan Patel',
    name: 'Ketan Patel',
    review:
      'Arun and team are the greatest — so responsive and timely in getting back to me if I have questions or need to make changes.   I love their design sense, and their willingness to dig down deep to understand my business and what’s important to me and the people I need to reach.   I’m so thankful I found Arunpandey!',
  },
  {
    avatar: AVTR4,
    alt: 'Lalit Badoni',
    name: 'Lalit Badoni',
    review:
      'Arun was very helpful and fast to respond to my inquiry to help with Wordpress website issues.  His knowledge was comprehensive.  Even better, his advice helped me enough to solve the problems and he did not accept any payment for this, very straight up guy! Thank you Arun.',
  },
  {
    avatar: AVTR5,
    alt: 'Rajan Sharma',
    name: 'Rajan Sharma',
    review:
      'Arun is a great help managing a very out of date website. Everything we ask him to do is done quickly and efficiently, we would be lost without him',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review, alt }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={alt} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
