import fleximg from "../assets/fleximg.svg"
import callroundimage from "../assets/callroundimage.svg"
import secimage from "../assets/secimage.svg"
import speed from "../assets/speed.png"


const services = [
  {
    id: 'performance',
    icon: speed,
    title: 'Performance Excellence',
    description:
      'Orionstellar prioritizes performance optimization. Our hosting services ensure fast loading times, enhancing user experience for your audience.',
  },
  {
    id: 'security',
    icon: secimage,
    // icon: 'https://cloud.orionstellar.com/wp-content/uploads/2025/05/Group-95.svg',
    title: 'Security Assurance',
    description:
      "Your data\u2019s security is top priority. Orionstellar uses advanced measures like firewalls, malware scanning, and security audits.",
  },
  {
    id: 'flexible',
    icon: secimage,
    // icon: 'https://cloud.orionstellar.com/wp-content/uploads/2025/05/Vector-1.svg',
    title: 'Flexible Hosting',
    description:
      'We know your hosting needs evolve. Our services scale as your business grows, adapting to increased traffic and demand.',
  },
  {
    id: 'support',
    icon: callroundimage,
    // icon: 'https://cloud.orionstellar.com/wp-content/uploads/2025/05/Group-96.svg',
    title: '24/7 Expert Support',
    description:
      'Our support team is available to help with technical issues. From minor tweaks to critical fixes, we ensure your hosting stays smooth and stress-free.',
  },
];

function PowerfulServices() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="section-title">Powerful Hosting Services</h2>
        <p className="section-description">
          OrionStellar understands that different users have distinct hosting
          needs. Our hosting services are designed to cater to a variety of
          requirements, ensuring a tailored solution for every client.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id} id={`service-${service.id}`}>
              <div className="service-icon">
                <img src={service.icon} alt={`${service.title} icon`} />
              </div>
              <div className="service-text">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PowerfulServices;
