import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_home.scss";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <SEO bodyClass="home" title="Custom SaaS Websites | Jelly Development" />

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
                <h1>Get more clients with managed YouTube outreach</h1>
                <p className="section-description">
                  Getting new clients is hard. We make it easy by analyzing and optimizing a brand new YouTube channel for you.
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
                  <p className="display">FULLY MANAGED YOUTUBE OUTREACH</p>
                  <h2>Stick with what you know, and let us handle the rest</h2>
                  <p className="section-description">
                    We know that running a business takes a lot of time. That's why we handle every aspect of your YouTube channel, so you can focus on your clients.
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
                      <h3>Reach the right people</h3>
                      <p>Finding the right people to turn into clients is hard.</p>
                      <p>We'll optimize your social media so more people can find you, and you can convert them into new clients.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="feature">
                    <div className="feature__image">
                      <img src="/media/img/icons/bolt.svg" alt="Thundercloud icon" />
                    </div>
                    <div className="feature__content">
                      <h3>Become the expert in your industry</h3>
                      <p>You can't convert clients if they don't trust you.</p>
                      <p>We help you say and do the right things so you can become an industry expert.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="feature">
                    <div className="feature__image">
                      <img src="/media/img/icons/badge.svg" alt="Badge icon" />
                    </div>
                    <div className="feature__content">
                      <h3>Showcase your brand to your visitors</h3>
                      <p>Letting your visitors know what you're about is tough.</p>
                      <p>We'll make sure your website effectively communicates your brand - and looks great while doing it.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="chat">
            <img role="presentation" alt="" className="blob" src="/media/img/backgrounds/blob.svg" />
            <img role="presentation" alt="" className="blobs" src="/media/img/backgrounds/blobs.svg" />
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
                <p className="section-description">At Jelly Development, we’re proud to say we go all in to bring the best websites we can to our clients.</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="testimonial">
                    <p>
                      I had hired Jelly Development to create a landing page for a new product of mine, I gave them minimal requirements and they knocked it out
                      of the ballpark with needing minimal changes. Definitely recommend and will be using them more often.
                    </p>
                    <p>- Josh Manders | CEO of Primcloud</p>
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
            <img role="presentation" src="/media/img/backgrounds/wave--dark.svg" alt="" className="wave" />
            <img role="presentation" alt="" className="blob" src="/media/img/backgrounds/blob--dark.svg" />
            <img role="presentation" alt="" className="blobs" src="/media/img/backgrounds/blobs--dark.svg" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 max-560">
                  <p className="display">CONTACT US</p>
                  <h2 className="section-heading">Let's discuss your new website.</h2>
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
                            <textarea required id="message" name="message" placeholder="I've got some questions about a new website" />
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <input type="submit" value="Let's chat!" className="btn" />
                        </div>
                      </div>
                      <p className="subtext">
                        or email us at <a href="mailto:sales@jellydevelopment.com">sales@jellydevelopment.com</a>
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
