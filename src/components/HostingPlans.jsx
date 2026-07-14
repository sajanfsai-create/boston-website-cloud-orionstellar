import { Link } from './Router';
import vpsimage from '../../public/vpsimage.svg'
import dediimage from '../../public/dediimage.svg'

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

const plans = [
  {
    id: 'vps-1',
    icon: vpsimage,
    // icon: 'https://cloud.orionstellar.com/wp-content/uploads/2025/05/Group-1597883247.svg',
    title: 'VPS Hosting',
    price: '$63.00 /month',
    features: ['Single Domain', 'One Click Installs', 'Unlimited Bandwidth', 'SSL Certificate'],
    link: '/vps-hosting',
  },
  {
    id: 'dedicated-1',
    icon: dediimage,
    // icon: 'https://cloud.orionstellar.com/wp-content/uploads/2025/05/Group-1597883168.svg',
    title: 'Dedicated Server',
    price: 'Call Us',
    features: ['Single Domain', 'One Click Installs', 'Unlimited Bandwidth', 'SSL Certificate'],
    link: '/dedicated-hosting',
  },
  // {
  //   id: 'vps-2',
  //   icon: 'https://cloud.orionstellar.com/wp-content/uploads/2025/05/Group-1597883247.svg',
  //   title: 'VPS Hosting',
  //   price: '$25.00 /month',
  //   features: ['Single Domain', 'One Click Installs', 'Unlimited Bandwidth', 'SSL Certificate'],
  //   link: '/vps-hosting',
  // },
];

function HostingPlans() {
  return (
    <section className="plans-section" id="plans">
      <div className="plans-container">
        <h2 className="section-title">Choose your Best Hosting Plan</h2>
        <p className="section-description">
          At OrionStellar, we believe in providing value-driven hosting solutions.
          Our hosting plans are competitively priced, striking a balance between
          affordability and powerful features. Transparent pricing with no hidden
          fees ensures that you get the most out of your hosting investment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan) => (
            <div className="plan-card" key={plan.id} id={`plan-${plan.id}`}>
              <div className="plan-icon">
                <img src={plan.icon} alt={`${plan.title} icon`} />
              </div>
              <h3 className="plan-title">{plan.title}</h3>
              <p className="plan-price">{plan.price}</p>
              <div className="plan-features">
                {plan.features.map((feature, i) => (
                  <span key={i}>{feature}</span>
                ))}
              </div>
              <Link href={plan.link} className="btn-primary" id={`cta-${plan.id}`}>
                <ArrowIcon />
                <span>Order Now</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HostingPlans;
