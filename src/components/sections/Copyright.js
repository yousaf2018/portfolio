const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        {/* <span>© {new Date().getFullYear()}</span> */}
        <span>
          © {new Date().getFullYear()} -{' '}
          <a target="_blank" href="#">
            Bilal Bin Yar
          </a>
        </span>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/bilalbinyar/" target="_blank">
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
    </section>
  );
};
export default Copyright;
