import React, { useState } from 'react';

export default function AffiliateForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    aboutYou: '',
    facebook: '',
    instagram: '',
    youtube: '',
    linkedin: '',
    otherSocial: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const InputField = ({ label, name, placeholder, maxLength, required }) => (
    <div style={{ marginBottom: 25 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <label style={{ color: 'white', fontWeight: 700, fontSize: 16 }}>
          {label} {required && <span style={{ color: '#F3AC06' }}>*</span>}
        </label>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>
          {formData[name].length}/{maxLength}
        </span>
      </div>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        value={formData[name]}
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '16px 20px',
          background: 'rgba(255,255,255,0.05)',
          border: '1.2px solid rgba(243, 172, 6, 0.4)',
          borderRadius: 12,
          color: 'white',
          fontSize: 15,
          outline: 'none',
          transition: 'all 0.3s ease'
        }}
        onFocus={e => {
          e.target.style.border = '1.2px solid #F3AC06';
          e.target.style.background = 'rgba(243, 172, 6, 0.08)';
          e.target.style.boxShadow = '0 0 15px rgba(243, 172, 6, 0.1)';
        }}
        onBlur={e => {
          e.target.style.border = '1.2px solid rgba(243, 172, 6, 0.4)';
          e.target.style.background = 'rgba(255,255,255,0.05)';
          e.target.style.boxShadow = 'none';
        }}
      />
    </div>
  );

  return (
    <section style={{ background: '#000', padding: '0px 20px 100px 20px' }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        background: 'linear-gradient(135deg, rgba(20,20,20,0.8) 0%, rgba(10,10,10,0.9) 100%)',
        padding: '50px 60px',
        borderRadius: 40,
        border: '1.5px solid #F3AC06',
        boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 100px rgba(243, 172, 6, 0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative background glows */}
        <div style={{
          position: 'absolute', top: '-20%', right: '-10%', width: '40%', height: '50%',
          background: 'radial-gradient(circle, rgba(243, 172, 6, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', bottom: '-20%', left: '-10%', width: '40%', height: '50%',
          background: 'radial-gradient(circle, rgba(243, 172, 6, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <form onSubmit={(e) => e.preventDefault()} style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '0 40px' }}>
            <InputField label="Full Name" name="fullName" placeholder="Enter your full name" maxLength={100} required />
            <InputField label="Phone Number" name="phoneNumber" placeholder="Enter your phone number" maxLength={20} required />
          </div>

          <div style={{ marginBottom: 35 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <label style={{ color: 'white', fontWeight: 700, fontSize: 16 }}>
                About You <span style={{ color: '#F3AC06' }}>*</span>
              </label>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>
                {formData.aboutYou.length}/1000
              </span>
            </div>
            <textarea
              name="aboutYou"
              placeholder="Tell us about yourself, your audience, and why you'd be a great FlexFume affiliate..."
              maxLength={1000}
              value={formData.aboutYou}
              onChange={handleChange}
              style={{
                width: '100%',
                height: 160,
                padding: '16px 20px',
                background: 'rgba(255,255,255,0.03)',
                border: '1.2px solid rgba(243, 172, 6, 0.4)',
                borderRadius: 15,
                color: 'white',
                fontSize: 15,
                outline: 'none',
                resize: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={e => {
                e.target.style.border = '1.2px solid #F3AC06';
                e.target.style.background = 'rgba(243, 172, 6, 0.05)';
                e.target.style.boxShadow = '0 0 20px rgba(243, 172, 6, 0.1)';
              }}
              onBlur={e => {
                e.target.style.border = '1.2px solid rgba(243, 172, 6, 0.4)';
                e.target.style.background = 'rgba(255,255,255,0.03)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div style={{ marginBottom: 30 }}>
            <div style={{ marginBottom: 30 }}>
              <h3 style={{ color: '#F3AC06', fontSize: 22, fontWeight: 700, marginBottom: 5 }}>Social Media Handles</h3>
              <div style={{ width: 60, height: 2, background: '#F3AC06', marginBottom: 10 }}></div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>(At least one required)</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '0 40px' }}>
              <InputField label="Facebook" name="facebook" placeholder="facebook.com/yourpage" maxLength={50} />
              <InputField label="Instagram" name="instagram" placeholder="@yourusername" maxLength={50} />
              <InputField label="YouTube" name="youtube" placeholder="youtube.com/@yourchannel" maxLength={50} />
              <InputField label="LinkedIn" name="linkedin" placeholder="linkedin.com/in/yourprofile" maxLength={50} />
            </div>
            <InputField label="Other Social Media" name="otherSocial" placeholder="TikTok, Website, etc." maxLength={50} />
          </div>

          <button type="submit" style={{
            width: '100%',
            padding: '15px',
            background: 'linear-gradient(90deg, #F3AC06, #ffdf94)',
            color: 'black',
            border: 'none',
            borderRadius: 18,
            fontSize: 16,
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            marginTop: 20,
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }} onMouseEnter={e => {
            e.target.style.transform = 'scale(1.02)';
            e.target.style.boxShadow = '0 15px 40px rgba(243, 172, 6, 0.4)';
          }} onMouseLeave={e => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}>
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}
