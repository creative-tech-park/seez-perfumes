import React from 'react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Shop',
      links: ['Beast', 'Beauty', 'Beauty & Beast']
    },
    {
      title: 'Support',
      links: ['Track order', 'Contact us', 'Help center']
    },
    {
      title: 'Info',
      links: ['About us', 'Our team', 'Our investor']
    }
  ];

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #5c4500 0%, #000 100%)',
      color: 'white',
      padding: '100px 20px 40px 20px',
      borderTop: '1px solid rgba(243, 172, 6, 0.3)'
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 60,
        marginBottom: 80
      }}>
        {/* Brand Section */}
        <div style={{ gridColumn: 'span 1', minWidth: 300 }}>
          <div style={{ marginBottom: 25 }}>
            <img src="/logo.png" alt="Flexfume Logo" style={{ height: 80, objectFit: 'contain' }} />
          </div>
          <p style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: 'white',
            maxWidth: 320
          }}>
            Seez was created to keep your smells alive wherever life takes you, from the desk or date to every adventure.
          </p>
        </div>

        {/* Links Sections */}
        {footerSections.map((section, idx) => (
          <div key={idx}>
            <h3 style={{
              fontSize: 18,
              fontWeight: 700,
              marginBottom: 25,
              color: '#F3AC06',
              position: 'relative',
              display: 'inline-block'
            }}>
              {section.title}
              <div style={{ position: 'absolute', bottom: -5, left: 0, width: 20, height: 2, background: '#F3AC06' }} />
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {section.links.map((link, lIdx) => (
                <li key={lIdx} style={{ marginBottom: 15 }}>
                  <a href="#" style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: 15,
                    transition: 'all 0.3s ease'
                  }} onMouseEnter={e => {
                    e.target.style.color = '#F3AC06';
                    e.target.style.paddingLeft = '5px';
                  }} onMouseLeave={e => {
                    e.target.style.color = 'white';
                    e.target.style.paddingLeft = '0';
                  }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        paddingTop: 40,
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 30
      }}>
        <p style={{ fontSize: 14, color: 'white' }}>
          © 2026 Seez Perfumes. All rights reserved. Web development company Creative Teck Park.
        </p>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: 25, alignItems: 'center' }}>
          {[
            { 
              label: 'Facebook',
              svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            },
            { 
              label: 'Instagram',
              svg: <g><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></g>
            },
            { 
              label: 'YouTube',
              svg: <g><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 2.9 2.9 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></g>
            }
          ].map((social, idx) => (
            <a key={idx} href="#" style={{
              width: 40, height: 40, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', textDecoration: 'none', transition: 'all 0.4s ease',
              position: 'relative'
            }} onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(255,255,255,0.1)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }} onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'scale(1)';
            }}>
              <svg 
                viewBox="0 0 24 24" 
                width="20" 
                height="20" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {social.svg}
              </svg>
            </a>
          ))}
        </div>

        {/* Legal Links */}
        <div style={{ display: 'flex', gap: 30 }}>
          <a href="#" style={{ fontSize: 14, color: 'white', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#F3AC06'} onMouseLeave={e => e.target.style.color = 'white'}>Terms & Conditions</a>
          <a href="#" style={{ fontSize: 14, color: 'white', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#F3AC06'} onMouseLeave={e => e.target.style.color = 'white'}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
