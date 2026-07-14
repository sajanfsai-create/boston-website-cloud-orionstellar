import { useState } from 'react';

import cloudHeroImage from "../assets/cloud_hero.png";
// Custom SVG Icons matching Tabler/Orionstellar style
const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42 0-.83.07-1.22.2A6 6 0 0 0 3.5 14A5.5 5.5 0 0 0 9 19.5H17.5Z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

const DatabaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const ServerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ok-icon">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const PlusCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opt-icon">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

const WifiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.1a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ReceiptIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1Z" />
    <path d="M16 8H8" />
    <path d="M16 12H8" />
    <path d="M12 16H8" />
  </svg>
);

const Server2Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
    <path d="M12 6h6" />
    <path d="M12 18h6" />
  </svg>
);

const HeadsetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

function CloudServices() {
  const [activeNas, setActiveNas] = useState('n1');

  const nasData = {
    n1: {
      name: 'RS422+ - 4 Bay Entry',
      chips: [
        { label: 'Form factor', val: '1U rack mount' },
        { label: 'Power supply', val: 'Standard PSU' },
        { label: 'Drive bays', val: '4 bays' },
        { label: 'Internet link', val: '10 Mbps (1 static IP)' },
        { label: 'Commitment', val: '2 years minimum' }
      ],
      rows: [
        { drive: '4 TB * 2', usable: '3.6 TB', nas: '125.00', total: '180.00' },
        { drive: '4 TB * 4', usable: '10.8 TB', nas: '150.00', total: '200.00' },
        { drive: '8 TB * 4', usable: '21.6 TB', nas: '200.00', total: '250.00' },
        { drive: '16 TB * 4', usable: '43.9 TB', nas: '250.00', total: '300.00' }
      ]
    },
    n2: {
      name: 'RS822RP+ - 4 Bay Mid',
      chips: [
        { label: 'Form factor', val: '1U rack mount' },
        { label: 'Power supply', val: 'Redundant PSU' },
        { label: 'Drive bays', val: '4 bays' },
        { label: 'Internet link', val: '10 Mbps (1 static IP)' },
        { label: 'Commitment', val: '2 years minimum' }
      ],
      rows: [
        { drive: '4 TB * 2', usable: '3.6 TB', nas: '180.00', total: '250.00' },
        { drive: '4 TB * 4', usable: '10.8 TB', nas: '200.00', total: '320.00' },
        { drive: '8 TB * 4', usable: '21.6 TB', nas: '240.00', total: '300.00' },
        { drive: '16 TB * 4', usable: '43.9 TB', nas: '270.00', total: '320.00' }
      ]
    },
    n3: {
      name: 'RS1221RP+ - 8 Bay Mid',
      chips: [
        { label: 'Form factor', val: '2U rack mount' },
        { label: 'Power supply', val: 'Redundant PSU' },
        { label: 'Drive bays', val: '8 bays' },
        { label: 'Internet link', val: '10 Mbps (1 static IP)' },
        { label: 'Commitment', val: '2 years minimum' }
      ],
      rows: [
        { drive: '8 TB * 4', usable: '21.6 TB', nas: '300.00', total: '350.00' },
        { drive: '8 TB * 8', usable: '50.4 TB', nas: '360.00', total: '460.00' },
        { drive: '16 TB * 8', usable: '108.0 TB', nas: '450.00', total: '530.00' }
      ]
    }
  };

  return (
    <div className="cloud-services-page">
      {/* Hero Section */}
      <section className="cloud-services-hero hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <ShieldCheckIcon />
              <span>Synology Powered . RAID-6 Protected</span>
            </div>
            <h1 className="hero-title">Storage &amp; NAS Solutions</h1>
            <p className="hero-description">
              Reseller-ready cloud infrastructure - primary &amp; secondary backup, VPN connectivity, flexible storage, and dedicated NAS units on rent.
            </p>
          </div>
          <div className="hero-image">
            <img
              src={cloudHeroImage}
              // src="https://cloud.orionstellar.com/wp-content/uploads/2025/05/Group-1597883259.svg"
              alt="Cloud Solutions Graphic"
            />
          </div>
        </div>
      </section>

      <div className="section-container">
        {/* SECTION 1 - CLOUD STORAGE WITH BANDWIDTH */}
        <section className="cloud-services-section" id="cloud-storage">
          <div className="section-header-box">
            <div className="section-num">1</div>
            <div>
              <h2 className="vps-section-title left-align">Cloud Storage - with Bandwidth</h2>
              <p className="vps-section-subtitle left-align">
                Entry-level reseller cloud storage on RAID-6 with redundant power. Primary backup included. Synology Virtual DSM . 1 vCPU . 2 GB RAM.
              </p>
            </div>
          </div>

          <div className="info-chips-row">
            <div className="info-chip"><div className="ic-label">vCPU</div><div className="ic-val">1 vCPU</div></div>
            <div className="info-chip"><div className="ic-label">RAM</div><div className="ic-val">2 GB</div></div>
            <div className="info-chip"><div className="ic-label">Bandwidth</div><div className="ic-val">10 Mbps (burst 50)</div></div>
            <div className="info-chip"><div className="ic-label">Backup</div><div className="ic-val">Primary only</div></div>
            <div className="info-chip"><div className="ic-label">Platform</div><div className="ic-val">Synology vDSM</div></div>
          </div>

          <div className="cloud-plans-grid">
            {/* Starter */}
            <div className="cloud-plan-card">
              <div className="plan-card-icon-title">
                <div className="plan-icon-wrapper"><DatabaseIcon /></div>
                <h3 className="plan-name">Starter - 1 TB</h3>
              </div>
              <p className="plan-desc">Entry package. 1 TB primary cloud storage with Synology Virtual DSM access.</p>
              <div className="price-block">
                <div className="price-init">One-time setup: $3.03</div>
                <div className="price-main">$20.00 <span className="price-period">/ month</span></div>
                <div className="price-per-tb">1 TB included</div>
              </div>
              <ul className="feats">
                <li><CheckIcon /><span>Virtual DSM environment</span></li>
                <li><CheckIcon /><span>FTP, CIFS, NFS, Rsync</span></li>
                <li><CheckIcon /><span>Web portal + user account creation</span></li>
                <li><CheckIcon /><span>Shared internet 10 Mbps (burst 50)</span></li>
                <li><PlusCircleIcon /><span>Secondary backup: +$7.58 / TB / month</span></li>
                <li><PlusCircleIcon /><span>VPN connectivity: +$3.03 / conn / month</span></li>
              </ul>
              <a className="order-btn" href="mailto:sales@orionstellar.com?subject=Cloud Storage Starter 1TB">Order now &rarr;</a>
            </div>

            {/* Standard (Featured) */}
            <div className="cloud-plan-card featured">
              <div className="featured-badge">Most popular</div>
              <div className="plan-card-icon-title">
                <div className="plan-icon-wrapper"><DatabaseIcon /></div>
                <h3 className="plan-name">Standard - 2 TB</h3>
              </div>
              <p className="plan-desc">2 TB primary cloud storage. Ideal for small teams and backup workloads.</p>
              <div className="price-block">
                <div className="price-init">One-time setup: $3.03</div>
                <div className="price-main">$35.00 <span className="price-period">/ month</span></div>
                <div className="price-per-tb">2 * 15.15 / TB</div>
              </div>
              <ul className="feats">
                <li><CheckIcon /><span>Virtual DSM environment</span></li>
                <li><CheckIcon /><span>FTP, CIFS, NFS, Rsync</span></li>
                <li><CheckIcon /><span>Web portal + user account creation</span></li>
                <li><CheckIcon /><span>Shared internet 10 Mbps (burst 50)</span></li>
                <li><PlusCircleIcon /><span>Secondary backup: +$15.15 / month</span></li>
                <li><PlusCircleIcon /><span>VPN connectivity: +$3.03 / conn / month</span></li>
              </ul>
              <a className="order-btn primary-btn" href="mailto:sales@orionstellar.com?subject=Cloud Storage Standard 2TB">Order now &rarr;</a>
            </div>

            {/* Pro */}
            <div className="cloud-plan-card">
              <div className="plan-card-icon-title">
                <div className="plan-icon-wrapper"><DatabaseIcon /></div>
                <h3 className="plan-name">Pro - 5 TB</h3>
              </div>
              <p className="plan-desc">5 TB primary storage for larger data sets and multi-user environments.</p>
              <div className="price-block">
                <div className="price-init">One-time setup: $3.03</div>
                <div className="price-main">$85.00 <span className="price-period">/ month</span></div>
                <div className="price-per-tb">5 * 15.15 / TB</div>
              </div>
              <ul className="feats">
                <li><CheckIcon /><span>Virtual DSM environment</span></li>
                <li><CheckIcon /><span>FTP, CIFS, NFS, Rsync</span></li>
                <li><CheckIcon /><span>Web portal + user account creation</span></li>
                <li><CheckIcon /><span>Shared internet 10 Mbps (burst 50)</span></li>
                <li><PlusCircleIcon /><span>Secondary backup: +$37.88 / month</span></li>
                <li><PlusCircleIcon /><span>VPN connectivity: +$3.03 / conn / month</span></li>
              </ul>
              <a className="order-btn" href="mailto:sales@orionstellar.com?subject=Cloud Storage Pro 5TB">Order now &rarr;</a>
            </div>
          </div>

          <div className="billing-terms">
            <strong>Billing:</strong> Initial setup $3.03 + (number of TB * 15.15 / month). Payable upfront. Overage charged separately. <strong>1-year minimum commitment.</strong> Only a limited number of discrete accounts can be created per server.
          </div>
        </section>

        <hr className="layout-divider" />

        {/* SECTION 2 - FILE SERVER ON CLOUD */}
        <section className="cloud-services-section" id="file-server">
          <div className="section-header-box">
            <div className="section-num">2</div>
            <div>
              <h2 className="vps-section-title left-align">File Server on Cloud</h2>
              <p className="vps-section-subtitle left-align">
                Full-featured cloud file server with secondary backup included (Taiwan DC). Synology Virtual DSM . 2 vCPU . 2 GB RAM . 50 users base.
              </p>
            </div>
          </div>

          <div className="info-chips-row">
            <div className="info-chip"><div className="ic-label">vCPU</div><div className="ic-val">2 vCPU</div></div>
            <div className="info-chip"><div className="ic-label">RAM</div><div className="ic-val">2 GB</div></div>
            <div className="info-chip"><div className="ic-label">Users (base)</div><div className="ic-val">50 users</div></div>
            <div className="info-chip"><div className="ic-label">Secondary backup</div><div className="ic-val">Taiwan DC ✓</div></div>
            <div className="info-chip"><div className="ic-label">Bandwidth</div><div className="ic-val">10 Mbps (burst 50)</div></div>
          </div>

          <div className="cloud-plans-grid">
            {/* 1 TB */}
            <div className="cloud-plan-card">
              <div className="plan-card-icon-title">
                <div className="plan-icon-wrapper"><ServerIcon /></div>
                <h3 className="plan-name">File Server - 1 TB</h3>
              </div>
              <p className="plan-desc">Base package. 50-user licence, 2 vCPU / 2 GB RAM, 1 TB storage.</p>
              <div className="price-block">
                <div className="price-init">One-time setup: $15.15</div>
                <div className="price-main">$48.00 <span className="price-period">/ month</span></div>
                <div className="price-per-tb">$15.15 base + $24.24 * 1 TB</div>
              </div>
              <ul className="feats">
                <li><CheckIcon /><span>2 vCPU / 2 GB RAM</span></li>
                <li><CheckIcon /><span>50-user vDSM licence</span></li>
                <li><CheckIcon /><span>Secondary backup - Taiwan DC</span></li>
                <li><CheckIcon /><span>FTP, CIFS, NFS, Rsync, Web portal</span></li>
                <li><CheckIcon /><span>10 Mbps shared (burst 50)</span></li>
                <li><PlusCircleIcon /><span>Extra 2 vCPU / 2 GB: +$15.15 / month</span></li>
                <li><PlusCircleIcon /><span>VPN connectivity: +$3.03 / conn / month</span></li>
              </ul>
              <a className="order-btn" href="mailto:sales@orionstellar.com?subject=File Server 1TB">Order now &rarr;</a>
            </div>

            {/* 3 TB (Featured) */}
            <div className="cloud-plan-card featured">
              <div className="featured-badge">Best value</div>
              <div className="plan-card-icon-title">
                <div className="plan-icon-wrapper"><ServerIcon /></div>
                <h3 className="plan-name">File Server - 3 TB</h3>
              </div>
              <p className="plan-desc">Mid-range file server. 50-user base, scalable in 1 TB steps.</p>
              <div className="price-block">
                <div className="price-init">One-time setup: $15.15</div>
                <div className="price-main">$100.00 <span className="price-period">/ month</span></div>
                <div className="price-per-tb">$15.15 base + $24.24 * 3 TB</div>
              </div>
              <ul className="feats">
                <li><CheckIcon /><span>2 vCPU / 2 GB RAM</span></li>
                <li><CheckIcon /><span>50-user vDSM licence</span></li>
                <li><CheckIcon /><span>Secondary backup - Taiwan DC</span></li>
                <li><CheckIcon /><span>FTP, CIFS, NFS, Rsync, Web portal</span></li>
                <li><CheckIcon /><span>10 Mbps shared (burst 50)</span></li>
                <li><PlusCircleIcon /><span>Extra 2 vCPU / 2 GB: +$15.15 / month</span></li>
                <li><PlusCircleIcon /><span>VPN connectivity: +$3.03 / conn / month</span></li>
              </ul>
              <a className="order-btn primary-btn" href="mailto:sales@orionstellar.com?subject=File Server 3TB">Order now &rarr;</a>
            </div>

            {/* 5 TB */}
            <div className="cloud-plan-card">
              <div className="plan-card-icon-title">
                <div className="plan-icon-wrapper"><ServerIcon /></div>
                <h3 className="plan-name">File Server - 5 TB</h3>
              </div>
              <p className="plan-desc">Large-scale file server for organisations with heavy storage and user demands.</p>
              <div className="price-block">
                <div className="price-init">One-time setup: $15.15</div>
                <div className="price-main">$160.00 <span className="price-period">/ month</span></div>
                <div className="price-per-tb">$15.15 base + $24.24 * 5 TB</div>
              </div>
              <ul className="feats">
                <li><CheckIcon /><span>2 vCPU / 2 GB RAM</span></li>
                <li><CheckIcon /><span>50-user vDSM licence</span></li>
                <li><CheckIcon /><span>Secondary backup - Taiwan DC</span></li>
                <li><CheckIcon /><span>FTP, CIFS, NFS, Rsync, Web portal</span></li>
                <li><CheckIcon /><span>10 Mbps shared (burst 50)</span></li>
                <li><PlusCircleIcon /><span>Extra 2 vCPU / 2 GB: +$15.15 / month</span></li>
                <li><PlusCircleIcon /><span>VPN connectivity: +$3.03 / conn / month</span></li>
              </ul>
              <a className="order-btn" href="mailto:sales@orionstellar.com?subject=File Server 5TB">Order now &rarr;</a>
            </div>
          </div>

          <div className="billing-terms">
            <strong>Billing:</strong> Initial setup $15.15 + (number of TB * 24.24 / month). Payable upfront. Overage charged separately. <strong>1-year minimum commitment.</strong> Only a limited number of discrete accounts can be created per server.
          </div>
        </section>

        <hr className="layout-divider" />

        {/* SECTION 3 - NAS ON THE CLOUD */}
        <section className="cloud-services-section" id="nas-cloud">
          <div className="section-header-box">
            <div className="section-num">3</div>
            <div>
              <h2 className="vps-section-title left-align">NAS on the Cloud</h2>
              <p className="vps-section-subtitle left-align">
                Dedicated Synology NAS units on rent. Full device access, 1 static IP, 10 Mbps internet, rack space &amp; power included. All prices subject to 18% VAT.
              </p>
            </div>
          </div>

          <div className="nas-tabs-navigation" role="tablist">
            {Object.keys(nasData).map((key) => (
              <button
                key={key}
                className={`nas-tab-btn ${activeNas === key ? 'active' : ''}`}
                onClick={() => setActiveNas(key)}
                role="tab"
                aria-selected={activeNas === key}
              >
                {nasData[key].name}
              </button>
            ))}
          </div>

          <div className="nas-panel active">
            <div className="info-chips-row" style={{ marginBottom: '24px' }}>
              {nasData[activeNas].chips.map((chip, i) => (
                <div key={i} className="info-chip">
                  <div className="ic-label">{chip.label}</div>
                  <div className="ic-val">{chip.val}</div>
                </div>
              ))}
            </div>

            <div className="table-responsive-wrapper nas-table-wrapper">
              <table className="vps-table nas-pricing-table">
                <thead>
                  <tr>
                    <th>Drive configuration</th>
                    <th>Usable space</th>
                    <th>NAS only ($ / month)</th>
                    <th>With 10 Mbps + power + rack ($ / month)</th>
                  </tr>
                </thead>
                <tbody>
                  {nasData[activeNas].rows.map((row, i) => (
                    <tr key={i}>
                      <td className="plan-name-cell">{row.drive}</td>
                      <td>{row.usable}</td>
                      <td>$ {row.nas}</td>
                      <td className="highlighted-price-cell">$ {row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="vat-note">* All NAS on Cloud prices are subject to 18% VAT. Other models and capacities available on request.</div>
          
          <div className="billing-terms" style={{ marginTop: '16px' }}>
            <strong>What's included</strong> (with link + power + rack pricing): 1 static IP address . 10 Mbps dedicated internet link . rack space . power supply . full access to all Synology NAS features.
          </div>
        </section>

        <hr className="layout-divider" />

        {/* Summary Chips (Bottom) */}
        <section className="cloud-summary-section">
          <div className="summary-grid">
            <div className="summary-chip">
              <ShieldCheckIcon />
              <div>
                <div className="sc-label">Storage redundancy</div>
                <div className="sc-val">RAID-6 array</div>
              </div>
            </div>
            <div className="summary-chip">
              <WifiIcon />
              <div>
                <div className="sc-label">Connectivity protocols</div>
                <div className="sc-val">FTP . CIFS . NFS . Rsync</div>
              </div>
            </div>
            <div className="summary-chip">
              <CalendarIcon />
              <div>
                <div className="sc-label">Minimum commitment</div>
                <div className="sc-val">1 yr (Cloud) . 2 yr (NAS)</div>
              </div>
            </div>
            <div className="summary-chip">
              <ReceiptIcon />
              <div>
                <div className="sc-label">Billing</div>
                <div className="sc-val">Upfront . overage billed</div>
              </div>
            </div>
            <div className="summary-chip">
              <Server2Icon />
              <div>
                <div className="sc-label">Platform</div>
                <div className="sc-val">Synology Virtual DSM</div>
              </div>
            </div>
            <div className="summary-chip">
              <HeadsetIcon />
              <div>
                <div className="sc-label">Support</div>
                <div className="sc-val">Dedicated account team</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="cloud-cta-footer">
          <h3>Need a custom plan?</h3>
          <p>We can tailor storage, bandwidth, and NAS configurations to your exact requirements. Talk to our team today.</p>
          <a href="mailto:sales@orionstellar.com?subject=Custom Cloud Storage Enquiry" className="btn-primary">
            Talk to sales &rarr;
          </a>
        </section>
      </div>
    </div>
  );
}

export default CloudServices;