import { useState } from 'react';
import vpsimage from "../../public/vpsimage.svg";
import datalinkImage from "../assets/datalink.png";
import phoneIcon from "../assets/phone.png";
import settingIcon from "../assets/setting.png";
import datacenterIcon from "../assets/datacenter.svg";

import dataceterline from "../assets/dataceterline.png"
import shieldline from "../assets/shieldline.png"
import usermanagement from "../assets/usermanagement.png"


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

const linuxPlans = [
  { name: 'Linux VPS Essential', cpu: '4 vCPU', ram: '4 GB', storage: '100GB', kvm: 'Yes', usd: '$63.00', link: 'https://console.orionstellar.com/index.php/store/linux-vps/vps-1' },
  { name: 'Linux VPS Power', cpu: '4 vCPU', ram: '8 GB', storage: '100GB', kvm: 'Yes', usd: '$90.00', link: 'https://console.orionstellar.com/index.php/store/linux-vps/vps-2' },
  { name: 'Linux VPS Pro', cpu: '8 vCPU', ram: '8GB', storage: '200GB', kvm: 'Yes', usd: '$125.00', link: 'https://console.orionstellar.com/index.php/store/linux-vps/vps-3' },
  { name: 'Linux VPS Elite', cpu: '8 vCPU', ram: '16 GB', storage: '200GB', kvm: 'Yes', usd: '$176.00', link: 'https://console.orionstellar.com/index.php/store/linux-vps/vps-4' },
  { name: 'Linux VPS Turbo', cpu: '8 vCPU', ram: '32 GB', storage: '500GB', kvm: 'Yes', usd: '$210.00', link: 'https://console.orionstellar.com/index.php/store/linux-vps/vps-5' },
  { name: 'Linux VPS Ultra', cpu: '8 vCPU', ram: '64 GB', storage: '500GB', kvm: 'Yes', usd: '$260.00', link: 'https://console.orionstellar.com/index.php/store/linux-vps/vps-6' }
];

const windowsPlans = [
  { name: 'Windows VPS Essential', cpu: '4 vCPU', ram: '4 GB', storage: '100GB', kvm: 'Yes', usd: '$85.00', link: 'https://console.orionstellar.com/index.php/store/linux-vps/vps-1' },
  { name: 'Windows VPS Power', cpu: '4 vCPU', ram: '8 GB', storage: '100GB', kvm: 'Yes', usd: '$120.00', link: 'https://console.orionstellar.com/index.php/store/linux-vps/vps-2' },
  { name: 'Windows VPS Pro', cpu: '8 vCPU', ram: '8GB', storage: '200GB', kvm: 'Yes', usd: '$168.60', link: 'https://console.orionstellar.com/index.php/store/linux-vps/vps-3' },
  { name: 'Windows VPS Elite', cpu: '8 vCPU', ram: '16 GB', storage: '200GB', kvm: 'Yes', usd: '$238.00', link: 'https://console.orionstellar.com/index.php/store/linux-vps/vps-4' },
  { name: 'Windows VPS Turbo', cpu: '8 vCPU', ram: '32 GB', storage: '500GB', kvm: 'Yes', usd: '$280.00', link: 'https://console.orionstellar.com/index.php/store/linux-vps/vps-5' },
  { name: 'Windows VPS Ultra', cpu: '8 vCPU', ram: '64 GB', storage: '500GB', kvm: 'Yes', usd: '$351.00', link: 'https://console.orionstellar.com/index.php/store/linux-vps/vps-6' }
];

function VPSHosting() {
  const [activeTab, setActiveTab] = useState('linux');

  const scrollToPlans = (e) => {
    e.preventDefault();
    const element = document.getElementById('vps-plans');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="vps-hosting-page">
      {/* Hero Section */}
      <section className="vps-hero hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Elevate your Hosting experience with the best VPS Hosting service from Orionstellar
            </h1>
            <p className="hero-description">A Global Solution Tailored to Your Needs</p>
            <a href="#vps-plans" onClick={scrollToPlans} className="btn-primary">
              Order Now <ArrowIcon />
            </a>
          </div>
          <div className="hero-image">
            <img
              src={vpsimage}
              // src="https://cloud.orionstellar.com/wp-content/uploads/2025/05/Group-1597883126.svg"
              alt="VPS Hosting Graphic"
            />
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="vps-plans-section" id="vps-plans">
        <div className="section-container">
          <h2 className="vps-section-title">VPS hosting Plans</h2>
          <p className="vps-section-subtitle">
            Elevating Your WordPress Experience with Powerful Hosting Solutions
          </p>

          {/* Custom Tabs */}
          <div className="vps-tabs-wrapper">
            <button
              className={`vps-tab-btn ${activeTab === 'linux' ? 'active' : ''}`}
              onClick={() => setActiveTab('linux')}
            >
              Linux VPS
            </button>
            <button
              className={`vps-tab-btn ${activeTab === 'windows' ? 'active' : ''}`}
              onClick={() => setActiveTab('windows')}
            >
              Windows VPS
            </button>
          </div>

          {/* Tables */}
          <div className="table-responsive-wrapper">
            <table className="vps-table">
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>CPU Power</th>
                  <th>RAM</th>
                  <th>Storage</th>
                  <th>KVM</th>
                  <th>Monthly ($)</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {(activeTab === 'linux' ? linuxPlans : windowsPlans).map((plan, index) => (
                  <tr key={index}>
                    <td className="plan-name-cell">{plan.name}</td>
                    <td>{plan.cpu}</td>
                    <td>{plan.ram}</td>
                    <td>{plan.storage}</td>
                    <td>{plan.kvm}</td>
                    <td className="price-cell">{plan.usd}</td>
                    <td>
                      <a href={plan.link} target="_blank" rel="noopener noreferrer" className="btn-table-action">
                        Deploy Now
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* All Plans Include Section */}
      <section className="vps-includes-section">
        <div className="section-container">
          <h2 className="vps-section-title">All Plans Include</h2>
          <p className="vps-section-subtitle">
            WordPress is the undisputed leader in the world of content management systems (CMS).
          </p>
          <div className="vps-includes-grid">
            {[
              'Affordable Pricing',
              'Free Domain Name',
              'Managed Backups',
              'Unlimited Bandwidth',
              'SSD Storage',
              'Free SSL Certificate',
              'Customization Options',
              'Unparalleled Performance',
              'Proactive Security Measures',
              'User-Friendly cPanel Access',
              '24/7 Expert Support'
            ].map((item, index) => (
              <div key={index} className="vps-include-item">
                <CheckIcon />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="vps-why-section">
        <div className="section-container">
          <h2 className="vps-section-title">Why Choose VPS from Us</h2>
          <p className="vps-section-subtitle">
            Explore the features, benefits, and unique advantages of Orionstellar’s VPS Hosting services
          </p>

          <div className="vps-why-grid">
            {[
              {
                title: 'Unleashing the Power of VPS Hosting',
                desc: 'Virtual Private Server hosting is a game-changer in the hosting industry, offering users a dedicated virtual environment within a shared server infrastructure. Orionstellar’s VPS Hosting is crafted to provide the perfect balance between the affordability of shared hosting and the control of dedicated servers.'
              },
              {
                title: 'Global Reach, Local Impact',
                desc: 'Orionstellar understands the significance of a global presence. Our strategically located data centers in India, Sri Lanka, Singapore, the USA, and Germany ensure that users can host their VPS in proximity to their target audience, guaranteeing low-latency access and optimal performance, regardless of geographical location.'
              },
              {
                title: 'Versatility and Scalability',
                desc: 'Whether you are an individual with growing hosting needs or a business with specific requirements, Orionstellar’s VPS Hosting offers the versatility and scalability to adapt to your unique demands. Enjoy the freedom to customize resources such as CPU, RAM, and storage, ensuring your hosting environment evolves with your digital presence.'
              },
              {
                title: 'Cutting-Edge Performance',
                desc: 'Performance is at the core of Orionstellar’s VPS Hosting. Leverage the latest technologies and optimized server configurations to ensure your virtual server operates at peak efficiency. Enjoy faster loading times, enhanced responsiveness, and an overall superior user experience for your website visitors.'
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

      {/* VPS Features Section */}
      <section className="vps-features-section">
        <div className="section-container">
          <h2 className="vps-section-title">VPS hosting Features</h2>
          <p className="vps-section-subtitle">
            Explore the features, benefits, and unique advantages of Orionstellar’s VPS Hosting services
          </p>

          <div className="vps-features-grid">
            {[
              {
                title: 'Enhanced Security Measures',
                desc: 'Security is at the core of our VPS Hosting. With isolated virtual servers, firewalls, and regular security audits, your data and applications remain safe and protected in a secure hosting environment.',
                icon: shieldline,
                // icon: 'https://cloud.orionstellar.com/wp-content/uploads/2025/05/Group-124-1.svg'
              },
              {
                title: 'Cost-Effective Customization',
                desc: 'Our VPS Hosting offers the flexibility to customize your environment at competitive prices. Orionstellar ensures you get powerful features without stretching your budget.',
                // icon: 'https://cloud.orionstellar.com/wp-content/uploads/2025/05/Vector-7.svg'
                icon: dataceterline,
              },
              {
                title: 'User-Friendly Management',
                desc: 'Easily manage your virtual server through our user-friendly control panel. Monitor resources, configure settings, and control your environment—no advanced technical skills required.',
                icon: usermanagement,
                // icon: 'https://cloud.orionstellar.com/wp-content/uploads/2025/05/Vector-1-3.svg'
              },
              {
                title: '24/7 Support',
                desc: 'Orionstellar’s Linux Hosting includes Softaculous for quick app installs. Set up WordPress, Joomla, and more in just one click.',
                icon: phoneIcon
              },
              {
                title: 'Dedicated Resources for Maximum Control',
                desc: 'cPanel includes strong security tools like SSL setup, IP blocking, and password-protected directories to keep your website secure.',
                icon: settingIcon
              },
              {
                title: 'Data Center Redundancy for Reliability',
                desc: 'The MySQL Database Wizard lets you quickly create, modify, and manage databases, ensuring smooth app performance and easy setup.',
                icon: datacenterIcon
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
            <h2 className="vps-section-title left-align">Orionstellar's VPS Hosting services</h2>
            <p className="vps-section-subtitle left-align">
              Elevate Your Hosting Experience with Orionstellar's VPS Hosting: A Global Solution Tailored to Your Needs
            </p>
            <ul className="vps-check-list">
              {[
                'Unleashing the Power of VPS Hosting',
                'Global Reach, Local Impact',
                'Versatility and Scalability',
                'Cutting-Edge Performance',
                'Dedicated Resources for Maximum Control',
                'Data Center Redundancy for Reliability'
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
              src={datalinkImage}
              alt="Orionstellar VPS Hosting Services Illustration"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default VPSHosting;
