import React from 'react';
import Head from 'next/head';
import Logo_DarkMode from './components/Logo_DarkMode';

const Landing = () => {
  return (
    <>
      <div className="landing-container">
        <Head>
          <title>Landing Page - MDAERP</title>
        </Head>
        <header className="landing-header">
          <div className="landing-logo">
            <Logo_DarkMode/>
          </div>
          <nav className="landing-nav">
            <a href="#home">Home</a>
            <a href="#facilities">Facilities</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#trusted-by">Trusted by</a>
            <a href="#try-now">Try Now</a>
          </nav>
          <button className="landing-login-btn">Sign In / Sign Up</button>
        </header>
        <div className="landing-banner">
          <div className="landing-banner-text">
            <h1>Your Gateway to Medical Device Safety Reporting</h1>
            <p>Simplifying the process of reporting adverse medical device events for everyone.</p>
            <button className="landing-learn-more-btn">Learn More</button>
          </div>
          <div className="landing-banner-image">
            <img src="/images/external/tq_bz1kbwpkor-m5hl-700w.png" alt="Medical Device Reporting" />
          </div>
        </div>
        <section className="landing-features">
          <h2>Features</h2>
          <div className="landing-feature-cards">
            <div className="feature-card">
              <img src="/images/external/download18122-hrxc-200h.png" alt="Secure Data Handling" />
              <h3>Secure Data Handling</h3>
              <p>Your reports are encrypted and kept confidential to protect patient privacy.</p>
            </div>
            <div className="feature-card">
              <img src="\images\external\download18122-m0uh-200h.png" alt="Real-Time Alerts" />
              <h3>Real-Time Alerts</h3>
              <p>Get notified immediately about critical updates on reported events.</p>
            </div>
            <div className="feature-card">
              <img src="\images\external\download18122-q1h-200h.png" alt="User-Friendly Interface" />
              <h3>User-Friendly Interface</h3>
              <p>Intuitive design for seamless reporting, even for non-technical users.</p>
            </div>
          </div>
        </section>
        <footer className="landing-footer">
          <p>Copyright © 2024 MDAERP-NIMHANS | All Rights Reserved | Privacy Policy</p>
        </footer>
      </div>
      <style jsx>
        {`
          .landing-container {
            font-family: 'Lato', sans-serif;
            padding: 0;
            margin: 0;
            overflow-x: hidden;
          }
          .landing-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background-color: #004080;
            color: white;
          }
          .landing-logo img {
            height: 60px;
          }
          .landing-nav {
            display: flex;
            gap: 20px;
          }
          .landing-nav a {
            color: white;
            text-decoration: none;
            font-size: 18px;
          }
          .landing-login-btn {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
          }
          .landing-banner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 50px;
            background-color: #f5faff;
          }
          .landing-banner-text {
            max-width: 50%;
          }
          .landing-banner-text h1 {
            font-size: 48px;
            color: #003366;
          }
          .landing-banner-text p {
            font-size: 24px;
            margin: 20px 0;
            color: #333;
          }
          .landing-learn-more-btn {
            background-color: #007bff;
            color: white;
            padding: 15px 30px;
            font-size: 18px;
            border-radius: 5px;
            cursor: pointer;
            border: none;
          }
          .landing-banner-image img {
            width: 500px;
            height: auto;
          }
          .landing-features {
            text-align: center;
            padding: 50px 20px;
          }
          .landing-features h2 {
            font-size: 36px;
            margin-bottom: 30px;
            color: #003366;
          }
          .landing-feature-cards {
            display: flex;
            gap: 20px;
            justify-content: center;
          }
          .feature-card {
            width: 300px;
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 20px;
            background-color: #fff;
            text-align: center;
          }
          .feature-card img {
            width: 100px;
            height: 100px;
            margin-bottom: 15px;
          }
          .feature-card h3 {
            font-size: 20px;
            color: #003366;
            margin-bottom: 10px;
          }
          .feature-card p {
            font-size: 16px;
            color: #666;
          }
          .landing-footer {
            text-align: center;
            padding: 20px;
            background-color: #004080;
            color: white;
          }
          @media (max-width: 768px) {
            .landing-banner {
              flex-direction: column;
              text-align: center;
            }
            .landing-banner-text {
              max-width: 100%;
            }
            .landing-banner-image img {
              width: 300px;
            }
            .landing-feature-cards {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
};

export default Landing;
