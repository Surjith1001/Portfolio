import React, { useEffect } from 'react';
import '../styles.css';
import doctorImage from '../assets/Anand.jfif';

const Home = () => {
  useEffect(() => {
    const serviceBoxes = document.querySelectorAll('.service');

    serviceBoxes.forEach(box => {
      box.addEventListener('mousemove', handleMouseMove);
      box.addEventListener('mouseleave', handleMouseLeave);
    });

    function handleMouseMove(e) {
      const box = e.currentTarget;
      const rect = box.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      box.style.transform = `rotateX(${y / 10}deg) rotateY(${x / 10}deg)`;
    }

    function handleMouseLeave(e) {
      const box = e.currentTarget;
      box.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }

    return () => {
      serviceBoxes.forEach(box => {
        box.removeEventListener('mousemove', handleMouseMove);
        box.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="container">
      <div className="hero">
        <div className="hero-text">
            <h1>Hi, I'm Dr. Anand, a MBBS student at MMC, Chennai</h1>
            <p>Pursuing my MBBS at one of the top-ranked medical colleges in India, dedicated to acquiring the knowledge and skills to provide the best healthcare solutions in the future.</p>
          <div className="button-group">
            <a href="/contact">Get in Touch</a>
            <a href="/about">About Me</a>
          </div>
        </div>
        <img src={doctorImage} alt="Dr. Anand" />
      </div>
      <div className="services">
        <div className="service">
            <h3>Academic Excellence</h3>
            <p>Consistently achieving top grades in a rigorous medical curriculum.</p>
        </div>
        <div className="service">
            <h3>Clinical Exposure</h3>
            <p>Gaining hands-on experience through clinical rotations at MMC's affiliated hospitals.</p>
        </div>
        <div className="service">
            <h3>Future Aspirations</h3>
            <p>Aiming to specialize in a field that combines research and patient care, contributing to the medical community.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
