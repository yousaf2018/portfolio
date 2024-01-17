import Link from 'next/link';
const Blog = () => {
  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              My Music
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* LATEST POSTS STARTS */}
      <div className="latestposts flex-column-mobile">
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <iframe
            title="Bilal Bin Yar"
            src="https://open.spotify.com/embed/track/5GivuLXbz1q21CQJEfxQQc?utm_source=generator"
            // width="100%"
            height="352"
            // frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>

        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <iframe
            title="Bilal Bin Yar"
            src="https://open.spotify.com/embed/track/6ggMhVUD3WzPkFhXFVNQ8F?utm_source=generator"
            // width="100%"
            height="352"
            // frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>

        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <iframe
            title="Bilal Bin Yar"
            src="https://open.spotify.com/embed/track/3lZseBKc2J57NLA55WI7Pw?utm_source=generator"
            // width="100%"
            height="352"
            // frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Blog;
