import { Link } from './Router';
import heroimage from "../assets/heroimage.svg"

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
    className="btn-arrow-icon"
  >
    <path
      fill="currentColor"
      d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
    />
  </svg>
);

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Experiences Fast and<br /> Scalable Hosting
          </h1>

          <div className="hero-tags">
            <Link href="/vps-hosting" className="hero-tag hero-tag-green">VPS Hosting</Link>
            <Link href="/dedicated-hosting" className="hero-tag hero-tag-green">Dedicated Server</Link>
          </div>

          <p className="hero-description">
            Fully Customizable Linux &amp; Windows Web Hosting. Enjoy the lowest prices in the industry.
          </p>

          <a href="#plans" className="btn-primary" id="hero-cta">
            <ArrowIcon />
            <span>Order Now</span>
          </a>
        </div>

        <div className="hero-image">
          <img
            src={heroimage}
            // src="https://cloud.orionstellar.com/wp-content/uploads/2025/05/phox-hero-1.svg"
            alt="Fast and Scalable Hosting Illustration"
            width="577"
            height="452"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
