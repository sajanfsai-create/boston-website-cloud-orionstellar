import { useState } from 'react';
import dediimage from "../../public/dediimage.svg";
import speedIcon from "../assets/speed.png";
import setchainIcon from "../assets/setchain.png";
import shieldlineIcon from "../assets/shieldline.png";
import stackIcon from "../assets/stackimage.png";
import dataceterIcon from "../assets/dataceterline.png";
import phoneIcon from "../assets/phone.png";
import datalinkImage from "../assets/datalink.png";
import threeserverimg from "../assets/threeserverimg.svg";

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
    className="btn-arrow-icon"
    width="16"
    height="16"
  >
    <path
      fill="currentColor"
      d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
    ></path>
  </svg>
);

const CheckIcon = () => (
  <svg
    className="vps-check-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
  >
    <circle cx="12" cy="12" r="10" fill="#1A74FA" fillOpacity="0.1" />
    <path
      d="M8.5 12.5L11 15L16 9"
      stroke="#1A74FA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const singleProcessorServers = [
  { name: 'Intel Xeon E3-1230 v2', cpu: '4x3.3GHz', ram: '16GB DDR3', storage: '1x 2TB HDD/240GB SSD', bw: '20TB', time: '12 - 48 Hours', price: 'CALL US', link: 'tel:+94761357297' },
  { name: 'Intel Xeon E3-1230 v2', cpu: '4x3.3GHz', ram: '16GB DDR3', storage: '1x 2TB HDD/240GB SSD', bw: '20TB', time: '12 - 48 Hours', price: 'CALL US', link: 'tel:+94761357297' },
  { name: 'Intel Xeon E3-1230 v2', cpu: '4x3.3GHz', ram: '16GB DDR3', storage: '1x 2TB HDD/240GB SSD', bw: '20TB', time: '12 - 48 Hours', price: 'CALL US', link: 'tel:+94761357297' },
  { name: 'Intel Xeon E3-1230 v2', cpu: '4x3.3GHz', ram: '16GB DDR3', storage: '1x 2TB HDD/240GB SSD', bw: '20TB', time: '12 - 48 Hours', price: 'CALL US', link: 'tel:+94761357297' },
  { name: 'Intel Xeon E3-1230 v2', cpu: '4x3.3GHz', ram: '16GB DDR3', storage: '1x 2TB HDD/240GB SSD', bw: '20TB', time: '12 - 48 Hours', price: 'CALL US', link: 'tel:+94761357297' },
  { name: 'Intel Xeon E3-1230 v2', cpu: '4x3.3GHz', ram: '16GB DDR3', storage: '1x 2TB HDD/240GB SSD', bw: '20TB', time: '12 - 48 Hours', price: 'CALL US', link: 'tel:+94761357297' },
  { name: 'Intel Xeon E3-1230 v2', cpu: '4x3.3GHz', ram: '16GB DDR3', storage: '1x 2TB HDD/240GB SSD', bw: '20TB', time: '12 - 48 Hours', price: 'CALL US', link: 'tel:+94761357297' },
];

const dualProcessorServers = [
  { name: 'Intel Xeon E3-1230 v2', cpu: '4x3.3GHz', ram: '16GB DDR3', storage: '1x 2TB HDD/240GB SSD', bw: '20TB', time: '12 - 48 Hours', price: 'CALL US', link: 'tel:+94761357297' },
  { name: 'Intel Xeon E3-1230 v2', cpu: '4x3.3GHz', ram: '16GB DDR3', storage: '1x 2TB HDD/240GB SSD', bw: '20TB', time: '12 - 48 Hours', price: 'CALL US', link: 'tel:+94761357297' },
  { name: 'Intel Xeon E3-1230 v2', cpu: '4x3.3GHz', ram: '16GB DDR3', storage: '1x 2TB HDD/240GB SSD', bw: '20TB', time: '12 - 48 Hours', price: 'CALL US', link: 'tel:+94761357297' },
  { name: 'Intel Xeon E3-1230 v2', cpu: '4x3.3GHz', ram: '16GB DDR3', storage: '1x 2TB HDD/240GB SSD', bw: '20TB', time: '12 - 48 Hours', price: 'CALL US', link: 'tel:+94761357297' },
  { name: 'Intel Xeon E3-1230 v2', cpu: '4x3.3GHz', ram: '16GB DDR3', storage: '1x 2TB HDD/240GB SSD', bw: '20TB', time: '12 - 48 Hours', price: 'CALL US', link: 'tel:+94761357297' },
  { name: 'Intel Xeon E3-1230 v2', cpu: '4x3.3GHz', ram: '16GB DDR3', storage: '1x 2TB HDD/240GB SSD', bw: '20TB', time: '12 - 48 Hours', price: 'CALL US', link: 'tel:+94761357297' },
];

const ChevronIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 448 512"
    fill="currentColor"
  >
    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357 9.357 24.522 9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
  </svg>
);

const faqCol1 = [
  {
    q: 'Affordable Pricing',
    a: 'At Orionstellar, we deliver great value without sacrificing quality. Our Linux Shared Hosting plans are affordably priced to suit individuals and businesses of all sizes.'
  },
  {
    q: 'Generous Resources',
    a: 'At Orionstellar, we deliver great value without sacrificing quality. Our Linux Shared Hosting plans are affordably priced to suit individuals and businesses of all sizes.'
  },
  {
    q: 'Free Domain Name',
    a: 'At Orionstellar, we deliver great value without sacrificing quality. Our Linux Shared Hosting plans are affordably priced to suit individuals and businesses of all sizes.'
  },
  {
    q: 'Unlimited Email Accounts',
    a: 'At Orionstellar, we deliver great value without sacrificing quality. Our Linux Shared Hosting plans are affordably priced to suit individuals and businesses of all sizes.'
  }
];

const faqCol2 = [
  {
    q: 'Affordable Pricing',
    a: 'At Orionstellar, we deliver great value without sacrificing quality. Our Linux Shared Hosting plans are affordably priced to suit individuals and businesses of all sizes.'
  },
  {
    q: 'Generous Resources',
    a: 'At Orionstellar, we deliver great value without sacrificing quality. Our Linux Shared Hosting plans are affordably priced to suit individuals and businesses of all sizes.'
  },
  {
    q: 'Free Domain Name',
    a: 'At Orionstellar, we deliver great value without sacrificing quality. Our Linux Shared Hosting plans are affordably priced to suit individuals and businesses of all sizes.'
  },
  {
    q: 'Unlimited Email Accounts',
    a: 'At Orionstellar, we deliver great value without sacrificing quality. Our Linux Shared Hosting plans are affordably priced to suit individuals and businesses of all sizes.'
  }
];

function DedicatedHosting() {
  const [openIndex1, setOpenIndex1] = useState(0);
  const [openIndex2, setOpenIndex2] = useState(0);

  const toggleFAQ1 = (index) => {
    setOpenIndex1(openIndex1 === index ? null : index);
  };

  const toggleFAQ2 = (index) => {
    setOpenIndex2(openIndex2 === index ? null : index);
  };

  const scrollToServers = (e) => {
    e.preventDefault();
    const element = document.getElementById('servers-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="dedicated-hosting-page">
      {/* Hero Section */}
      <section className="dedicated-hero hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Unleashing the Power of Dedicated Hosting
            </h1>
            <p className="hero-description">A Global Solution Tailored to Your Needs</p>
            <a href="#servers-section" onClick={scrollToServers} className="btn-primary">
              Order Now <ArrowIcon />
            </a>
          </div>
          <div className="hero-image">
            <img
              src={dediimage}
              // src="https://cloud.orionstellar.com/wp-content/uploads/2025/05/Group-1597883168-1.svg"
              alt="Dedicated Hosting Graphic"
            />
          </div>
        </div>
      </section>

      {/* Servers Section */}
      <section className="dedicated-servers-section" id="servers-section">
        <div className="section-container">
          <h2 className="vps-section-title">Choose your new server</h2>
          <p className="vps-section-subtitle">
            We delve into the features, benefits, and unique advantages of Orionstellar’s Dedicated Hosting services.
          </p>

          {/* Single Processor Table */}
          <div className="server-table-container">
            <h3 className="server-table-title">Single Processor – Intel Xeon E Series Processor Family</h3>
            <div className="table-responsive-wrapper">
              <table className="vps-table">
                <thead>
                  <tr>
                    <th>Servers</th>
                    <th>CPU Cores/Speed</th>
                    <th>Memory</th>
                    <th>Storage</th>
                    <th>Bandwidth</th>
                    <th>Deployment Time</th>
                    <th>Monthly ($)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {singleProcessorServers.map((server, index) => (
                    <tr key={index}>
                      <td className="plan-name-cell">{server.name}</td>
                      <td>{server.cpu}</td>
                      <td>{server.ram}</td>
                      <td>{server.storage}</td>
                      <td>{server.bw}</td>
                      <td>{server.time}</td>
                      <td className="price-cell">{server.price}</td>
                      <td>
                        <a href={server.link} className="btn-table-action">
                          Deploy Now
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dual Processor Table */}
          <div className="server-table-container" style={{ marginTop: '50px' }}>
            <h3 className="server-table-title">Dual Processor – Intel Xeon E Series &amp; Scalable Processor Family</h3>
            <div className="table-responsive-wrapper">
              <table className="vps-table">
                <thead>
                  <tr>
                    <th>Servers</th>
                    <th>CPU Cores/Speed</th>
                    <th>Memory</th>
                    <th>Storage</th>
                    <th>Bandwidth</th>
                    <th>Deployment Time</th>
                    <th>Monthly ($)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dualProcessorServers.map((server, index) => (
                    <tr key={index}>
                      <td className="plan-name-cell">{server.name}</td>
                      <td>{server.cpu}</td>
                      <td>{server.ram}</td>
                      <td>{server.storage}</td>
                      <td>{server.bw}</td>
                      <td>{server.time}</td>
                      <td className="price-cell">{server.price}</td>
                      <td>
                        <a href={server.link} className="btn-table-action">
                          Deploy Now
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="dedicated-specs-section">
        <div className="section-container split-layout">
          <div className="split-content">
            <h2 className="vps-section-title left-align">Dedicated Server Technical Specifications</h2>
            <p className="vps-section-subtitle left-align">Detailed environment parameters</p>

            <ul className="vps-check-list">
              {[
                '5,000 SMTP relays',
                'File and DB backups',
                'Linux with cPanel available (managed & fully managed)',
                '1 SSL certificate – 1 year free ($79.99 renewal annually)'
              ].map((item, index) => (
                <li key={index}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="server-table-title" style={{ marginTop: '30px', marginBottom: '15px' }}>
              Host Server Provide
            </h3>
            <ul className="vps-check-list">
              {[
                'Processor type: 2x Intel E5-2620v3',
                'Processor Cache: 15M Cache',
                'Processor hard disk: 2x 600GB HDD'
              ].map((item, index) => (
                <li key={index}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="split-graphic">
            <img
              src={threeserverimg}
              // src="https://cloud.orionstellar.com/wp-content/uploads/2025/05/Group-1597883228.svg"
              alt="Dedicated Server Specs Illustration"
            />
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="vps-why-section">
        <div className="section-container">
          <h2 className="vps-section-title">Advantages of a Dedicated Server</h2>
          <p className="vps-section-subtitle">
            Using a dedicated server for hosting your website or applications offers several advantages, particularly for businesses or individuals with specific performance, security, and customization needs.
          </p>

          <div className="vps-why-grid">
            {[
              {
                title: 'The Essence of Dedicated Hosting',
                desc: 'Dedicated Hosting stands as the epitome of hosting solutions, offering users an entire server exclusively for their digital assets. Orionstellar’s Dedicated Hosting is engineered to cater to users with demanding hosting requirements, providing a robust and scalable environment that goes beyond the capabilities of shared or virtual server hosting.'
              },
              {
                title: 'Global Reach, Local Impact',
                desc: 'Orionstellar understands the significance of a global presence. Our strategically located data centers in Sri Lanka ensure that users can host their server in proximity to their target audience, guaranteeing low-latency access and optimal performance, regardless of geographical location.'
              },
              {
                title: 'Redundancy for Unparalleled Reliability',
                desc: 'Reliability is paramount in Dedicated Hosting. Orionstellar ensures high uptime and reliability by implementing redundancy in our data centers. Your data is mirrored across multiple servers, reducing the risk of data loss and enhancing the overall reliability of your dedicated hosting environment.'
              },
              {
                title: 'User-Friendly Management',
                desc: 'While Dedicated Hosting provides extensive control, Orionstellar ensures that managing your dedicated server is user-friendly. Our intuitive control panel allows users to efficiently monitor and configure various aspects of their dedicated hosting environment without technical complexities.'
              }
            ].map((item, index) => (
              <div key={index} className="vps-why-card">
                <div className="vps-why-icon-wrapper">
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "#EAF4FF", // light blue background
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        border: "2px solid #3B82F6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#3B82F6",
                        fontSize: "14px",
                        fontWeight: "bold",
                        boxSizing: "border-box",
                      }}
                    >
                      ✓
                    </div>
                  </div>
                  {/* <img
                    src="https://cloud.orionstellar.com/wp-content/uploads/2025/05/Group-1597883330.svg"
                    alt="Check icon"
                    width="17"
                    height="17"
                  /> */}
                </div>
                <div className="vps-why-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="vps-features-section">
        <div className="section-container">
          <h2 className="vps-section-title">Dedicated Hosting Features</h2>
          <p className="vps-section-subtitle">
            Explore the features, benefits, and unique advantages of Orionstellar’s Dedicated Hosting services
          </p>

          <div className="vps-features-grid">
            {[
              {
                title: 'Unmatched Performance',
                desc: 'Orionstellar’s Dedicated Hosting delivers exceptional speed and reliability. With no resource sharing, you get lightning-fast load times, reduced latency, and a superior user experience.',
                icon: speedIcon
              },
              {
                title: 'Exclusive Control for Optimal Customization',
                desc: 'Enjoy complete control over your server with Orionstellar’s Dedicated Hosting. Root access lets you install custom applications, tweak settings, and build a hosting environment that fits your needs.',
                icon: setchainIcon
              },
              {
                title: 'Enterprise-Grade Security',
                desc: 'Protect your critical data with our security setup. Our Dedicated Hosting features firewalls, isolation, and regular audits to provide a highly secure environment for your business.',
                icon: shieldlineIcon
              },
              {
                title: 'Scalability for Growing Demand',
                desc: 'Scale effortlessly as your business grows. Orionstellar’s Dedicated Hosting adapts to evolving needs, handling increased traffic and demands without compromising performance.',
                icon: stackIcon
              },
              {
                title: 'Cost-Effective Customization',
                desc: 'Get the power you need without breaking the bank. Our Dedicated Hosting plans combine affordability with flexibility to customize your server environment.',
                icon: dataceterIcon
              },
              {
                title: '24/7 Support',
                desc: 'Our expert team is available around the clock to assist with technical issues or advice—ensuring a smooth hosting experience.',
                icon: phoneIcon
              }
            ].map((item, index) => (
              <div key={index} className="vps-feature-card">
                <div className="vps-feature-icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Split Section */}
      <section className="vps-bottom-split-section">
        <div className="section-container split-layout">
          <div className="split-content">
            <h2 className="vps-section-title left-align">Comprehensive Solutions for Diverse Needs</h2>
            <p className="vps-section-subtitle left-align">
              Orionstellar's Dedicated Hosting caters to a diverse range of users:
            </p>
            <ul className="vps-check-list">
              {[
                'Large Enterprises: Benefit from the power and exclusivity of a dedicated server, ensuring optimal performance and security for mission-critical applications.',
                'E-commerce Businesses: Securely host your online store with dedicated resources, handling increased traffic and ensuring a seamless shopping experience.',
                'Media and Content Platforms: Manage and deliver large volumes of content with ease, leveraging the resources of a dedicated server for optimal performance.'
              ].map((item, index) => (
                <li key={index} style={{ alignItems: 'flex-start' }}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="split-graphic">
            <img
              src={datalinkImage}
              alt="Orionstellar Dedicated Hosting Services Illustration"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-container faq-container">
          <h2 className="vps-section-title">Frequently asked Questions</h2>
          <p className="vps-section-subtitle">
            Explore common questions and expert answers about Virtual Private Servers (VPS) to optimize performance, security, and scalability for your website or application.
          </p>

          <div className="faq-grid">
            {/* Column 1 */}
            <div className="faq-list">
              {faqCol1.map((item, index) => (
                <div key={index} className="faq-item">
                  <div className="faq-header" onClick={() => toggleFAQ1(index)}>
                    <span className="faq-question">{item.q}</span>
                    <span className={`faq-icon-wrapper ${openIndex1 === index ? 'open' : ''}`}>
                      <ChevronIcon />
                    </span>
                  </div>
                  <div className={`faq-content ${openIndex1 === index ? 'open' : ''}`}>
                    <p className="faq-answer">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="faq-list">
              {faqCol2.map((item, index) => (
                <div key={index} className="faq-item">
                  <div className="faq-header" onClick={() => toggleFAQ2(index)}>
                    <span className="faq-question">{item.q}</span>
                    <span className={`faq-icon-wrapper ${openIndex2 === index ? 'open' : ''}`}>
                      <ChevronIcon />
                    </span>
                  </div>
                  <div className={`faq-content ${openIndex2 === index ? 'open' : ''}`}>
                    <p className="faq-answer">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DedicatedHosting;
