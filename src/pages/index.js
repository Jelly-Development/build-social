import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_home.scss";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <SEO bodyClass="home" />

      <header>
        <Navigation />
      </header>
      <div id="wrapper" className="wrapper">
        <section className="hero">
          <div className="hero__image">
            <img src="/media/img/hero.jpg" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-xl-6">
                {/* <h1>Get more clients with managed YouTube outreach</h1> */}
                <h1>Get qualified buyers in your local market with managed YouTube outreach</h1>
                <p className="section-description">
                  Getting ready-to-go buyers in your market is hard. We make it easy by analyzing and optimizing your social brand with YouTube.
                </p>
                {/* <p className="section-description">We combine design, branding, SEO and copywriting to craft the perfect website for you and your customers.</p> */}

                <a href="/get-started" className="btn dark">
                  Let’s get more customers
                </a>
                <a href="#services" className="btn text">
                  Learn more{" "}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="#1C2C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 5L19 12L12 19" stroke="#1C2C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <main>
          <section className="services" id="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 max-560">
                  <p className="display">FULLY MANAGED YOUTUBE HELP</p>
                  <h2>Stick with what you know, and let us handle the rest</h2>
                  <p className="section-description">
                    We know that editing, scripting, thumbnails and YouTube analytics isn't what you're used to. We let you help people buy and sell homes in your market, while we handle the dirty work online.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="feature">
                    <div className="feature__image">
                      <img src="/media/img/icons/target.svg" alt="Target icon" />
                    </div>
                    <div className="feature__content">
                      <h3>Drive Business To You</h3>
                      <p>Getting the phone to ring can be difficult.</p>
                      <p>Out sole focus is to get clients calling you by utilizing the power of YouTube and our targeted SEO program.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="feature">
                    <div className="feature__image">
                      <img src="/media/img/icons/bolt.svg" alt="Thundercloud icon" />
                    </div>
                    <div className="feature__content">
                      <h3>Increase your conversion</h3>
                      <p>People do business with who they like, know and trust.</p>
                      <p>By positioning you as the expert in your field, we give you the opportunity to capture the most business in your area, increasing your credibility and revenue.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="feature">
                    <div className="feature__image">
                      <img src="/media/img/icons/badge.svg" alt="Badge icon" />
                    </div>
                    <div className="feature__content">
                      <h3>Showcase your brand</h3>
                      <p>Letting people know what you're about is crucial.</p>
                      <p>We'll help you unleash a powerful brand that sets you apart from your competition. Any direct prospecting that you do in your farm will lead to easier "come list me" opportunities, because they already know who you are.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="chat">
            {/* <img role="presentation" alt="" className="blob" src="/media/img/backgrounds/blob.svg" /> */}
            {/* <img role="presentation" alt="" className="blobs" src="/media/img/backgrounds/blobs.svg" /> */}
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 max-560">
                  <h2>Want to know exactly what we can do for you?</h2>
                  <div className="d-flex">
                    <a href="/get-started" className="btn mr-md-4">
                      I’m ready to talk
                    </a>
                    <a href="/contact" className="btn text">
                      I've got questions{" "}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="#1C2C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 5L19 12L12 19" stroke="#1C2C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="testimonials">
            <div className="container">
              <div className="col-lg-8 offset-lg-2 max-560">
                <p className="display">WHAT PEOPLE SAY</p>
                <h2 className="section-heading">Don’t settle for anything less than incredible.</h2>
                <p className="section-description">At Build Social, we’re proud to say we go all in to bring more customers to our clients.</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="testimonial">
                    <p>Before I connected with Build Social I thought I was doing great. But I knew I was missing pieces and no matter what courses I took, it seemed like things were still being held back.</p>
                    <p>The minute I got in with Build Social and I listened and watched, they transformed the trajectory of my channel growth and the amount of leads that flowed in had me scrambling for help. Now my channel produces side sponsorships and has given me opportunities to leverage myself as a trusted real estate influencer on YouTube.</p>
                    <p>- Greg Langhaim</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial">
                    <p>Utilizing their proven methods, the team at Build Social has grown our YouTube channel to over 30,000 subscribers.</p>
                    <p>- Able Family Life</p>
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <div className="testimonial">
                    <p>Working with Jelly Development was awesome. Here's something about how amazing they were. Truly awesome!</p>
                    <p>- Jarod Peachey | CEO of Jelly Development</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial">
                    <p>Working with Jelly Development was awesome. Here's something about how amazing they were. Truly awesome!</p>
                    <p>- Jarod Peachey | CEO of Jelly Development</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial">
                    <p>Working with Jelly Development was awesome. Here's something about how amazing they were. Truly awesome!</p>
                    <p>- Jarod Peachey | CEO of Jelly Development</p>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
          <section className="cta">
            <img role="presentation" alt="" className="blobs" src="/media/img/backgrounds/blobs--dark.svg" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 max-560">
                  <p className="display">CONTACT US</p>
                  <h2 className="section-heading">Let's get started today.</h2>
                  <div className="card">
                    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                      <p class="hidden">
                        <label>
                          Don’t fill this out if you’re human: <input name="bot-field" />
                        </label>
                      </p>
                      <div className="row">
                        <div className="col-lg-12">
                          <label name="name">
                            Name <span>*</span>
                            <input required type="text" id="name" name="name" placeholder="Name" />
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <label name="email">
                            Email <span>*</span>
                            <input required type="email" id="email" name="email" placeholder="Email" />
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <label name="message">
                            Message? <span>*</span>
                            <textarea required id="message" name="message" placeholder="I've got some questions" />
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <input type="submit" value="Let's chat!" className="btn" />
                        </div>
                      </div>
                      <p className="subtext">
                        or email us at <a href="mailto:info@buildoutsocial.com">info@buildoutsocial.com</a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
