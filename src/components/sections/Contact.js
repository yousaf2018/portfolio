const Contact = () => {
  return (
    <section className="contact main-section flex-column-mobile" id="contact">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Get in touch
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* CONTACTS STARTS */}
      <div className="boxes">
        <div>
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-phone" />
            <p>
              <span className="small-text">phone</span>
              +92 324 5187873
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-location-dot" />
            <p>
              <span className="small-text">address</span>
              Islamabad, Pakistan
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
        <div>
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-envelope" />
            <p>
              <span className="small-text">email</span>
              bilalbinyaar@gmail.com
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-share-nodes" />
            <span className="small-text">follow me</span>
            <ul className="social">
              <li>
                <a
                  href="https://www.linkedin.com/in/bilalbinyar/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin-in" />
                </a>
              </li>
              <li>
                <a href="https://github.com/bilalbinyaar" target="_blank">
                  <i className="fa-brands fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@BilalBinYar" target="_blank">
                  <i class="fa-brands fa-youtube" />
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/artist/4tcrYMxcZ4z2oAh68Cq9zq?si=4K_x8pp8TfaWLOiZyUp30w"
                  target="_blank"
                >
                  <i class="fa-brands fa-spotify" />
                </a>
              </li>
            </ul>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
      </div>
      {/* CONTACTS ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Contact;
