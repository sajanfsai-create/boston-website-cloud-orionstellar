
import mapimage from "../assets/mapimage.svg"
import dataceterline from "../assets/dataceterline.png"

function DataCenter() {
  return (
    <section className="datacenter-section" id="datacenter">
      <div className="datacenter-container">
        <div className="datacenter-content">
          <h2 className="datacenter-title">
            Strategic Data Center<br /> in Sri Lanka
          </h2>
          <p className="datacenter-description">
            Experience enhanced performance and reliability with our globally
            connected, high-performance data center in Sri Lanka.
          </p>
          <a href="#" className="btn-outline" id="datacenter-cta">
            Get Started
          </a>
        </div>

        <div className="datacenter-image">
          <img
            src={mapimage}
            // src="https://cloud.orionstellar.com/wp-content/uploads/2025/05/Group-1597883328.svg"
            alt="Data Center in Sri Lanka Illustration"
            width="333"
            height="537"
          />
        </div>
      </div>
    </section>
  );
}

export default DataCenter;
