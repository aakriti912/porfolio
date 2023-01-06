import React from 'react';
import phoneImg from './images/aakriti.jpg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h2>
            React Developer Portfolio<br />
           Aakriti Thapa
          </h2>
          <p>
            Hello, my name is Aakriti Thapa and I am a software engineering
            student with a passion for building modern, interactive web
            applications using React. I have been working with React for few
            years, and I have completed several projects that showcase my skills
            in building efficient, scalable, and user-friendly applications. I
            am always looking for ways to improve my skills and stay up-to-date
            with the latest technologies and best practices in the field.
          </p>
          <button className="btn">Hire me</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
