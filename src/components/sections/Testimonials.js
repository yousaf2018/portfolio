const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                "I really enjoyed working with this Bilal. He delivered on time
                and the delivery met my expectations. His communication was on
                point as well. I highly recommend his services."
              </span>
              <span className="person">Fqafrique</span>
              <span className="job">Kenya</span>
            </p>
            {/* <img src="assets/testimonials/testimonial-1.jpg" alt="" /> */}
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                "Bilal is an awesome professional to work with. He is very
                dedicated and displays personal interests during the execution
                of the project. He always advise the best for your project."
              </span>
              <span className="person">Saif</span>
              <span className="job">Canada</span>
            </p>
            {/* <img src="assets/testimonials/testimonial-2.jpg" alt="" /> */}
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                "You’re the BEST. Loved your services. Friendly communication
                and on time delivery. Looking forward to work again with you on
                future projects as well. May you have more success in life."
              </span>
              <span className="person">Allmoazam550</span>
              <span className="job">Germany</span>
            </p>
            {/* <img src="assets/testimonials/testimonial-2.jpg" alt="" /> */}
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                "Bilal is an awesome professional to work with. He is very
                dedicated and displays personal interests during the execution
                of the project. He always advise the best for your project."
              </span>
              <span className="person">Shopking247</span>
              <span className="job">United States</span>
            </p>
            {/* <img src="assets/testimonials/testimonial-2.jpg" alt="" /> */}
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
