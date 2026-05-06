/* global React */

const DOCTORS = [
  {
    name: 'Dr Christine O\'Chee',
    title: 'General Practitioner',
    quals: 'MBBS, FRACGP',
    school: 'University of New South Wales',
    photo: 'https://www.townhallclinic.com.au/wp-content/uploads/2017/09/doctor04.jpg',
    specialties: ['General Practice', 'Family Medicine'],
    note: '',
  },
  {
    name: 'Dr Eriko Sharp (Shimada)',
    title: 'General Practitioner',
    quals: 'MBBS, FRACGP',
    school: 'University of Adelaide',
    photo: 'https://www.townhallclinic.com.au/wp-content/uploads/2019/08/ES-Edit.jpg',
    specialties: ['Family Planning', 'Sexual & Reproductive Health'],
    note: '',
  },
  {
    name: 'Dr Tony Yee',
    title: 'General Practitioner',
    quals: 'MBBS',
    school: 'University of New South Wales',
    photo: 'https://www.townhallclinic.com.au/wp-content/uploads/2019/08/Tpny-new.png',
    specialties: ['Child Health', 'Sports Medicine'],
    note: '',
  },
  {
    name: 'Dr Carol Moon',
    title: 'General Practitioner',
    quals: 'MBBS, FRACGP',
    school: 'University of London',
    photo: 'https://www.townhallclinic.com.au/wp-content/uploads/2020/04/CM_1-300x200.jpg',
    specialties: ['Sexual & Reproductive Health'],
    note: 'Languages: English, Korean',
  },
];

const ALLIED = [
  {
    name: 'Nicholas French',
    title: 'Physiotherapist',
    quals: 'BAppSc (Exercise/Sport Science & Physiotherapy)',
    school: 'University of Sydney',
    photo: 'https://www.townhallclinic.com.au/wp-content/uploads/2017/09/doctor09.jpg',
    specialties: ['Sports Physiotherapy', 'Rehabilitation'],
    note: 'AFL enthusiast',
  },
  {
    name: 'Kaoru Sato',
    title: 'Counsellor',
    quals: 'MCounselling, GradDipCounselling, MPhil, BAHons — CAPA & PACFA Clinical Member',
    school: 'University of Sydney · Jansen Newman Institute',
    photo: 'https://www.townhallclinic.com.au/wp-content/uploads/2017/09/doctor11.jpg',
    specialties: ['Counselling', 'Applied Psychotherapy'],
    note: '「一人で悩まずに、気軽に相談してください」',
  },
];

function DoctorCard({ person }) {
  return (
    <div style={{
      background: 'var(--bg-elev)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      transition: 'box-shadow .2s, transform .2s',
      display: 'flex',
      flexDirection: 'column',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
    >
      {/* Photo */}
      <div style={{
        width: '100%', aspectRatio: '4/3',
        background: 'var(--accent-soft)',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <img
          src={person.photo}
          alt={person.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
          onError={e => { e.target.style.display = 'none'; }}
        />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: 60,
          background: 'linear-gradient(to top, rgba(15,29,44,0.35), transparent)',
        }} />
      </div>

      {/* Info */}
      <div style={{ padding: '24px 26px 28px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div>
          <div style={{ fontSize: 11, fontFamily: 'JetBrains Mono, monospace', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>
            {person.title}
          </div>
          <h3 style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--ink)' }}>
            {person.name}
          </h3>
        </div>

        <div style={{ fontSize: 13, color: 'var(--ink-mute)', lineHeight: 1.5 }}>
          {person.quals}
        </div>

        <div style={{ fontSize: 12.5, color: 'var(--ink-soft)' }}>
          🎓 {person.school}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
          {person.specialties.map(s => (
            <span key={s} style={{
              padding: '3px 10px',
              background: 'var(--accent-soft)',
              color: 'var(--accent-ink)',
              borderRadius: 999,
              fontSize: 11.5,
              fontWeight: 500,
            }}>{s}</span>
          ))}
        </div>

        {person.note && (
          <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px dashed var(--line)', fontSize: 12.5, color: 'var(--ink-mute)', fontStyle: 'italic' }}>
            {person.note}
          </div>
        )}
      </div>
    </div>
  );
}

function DoctorsPage({ onNavigate }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>HOME</a>
            <span>/</span>
            <span style={{ color: 'var(--accent)' }}>DOCTORS_&amp;_THERAPISTS</span>
          </div>
          <span className="section-eyebrow">Our Team</span>
          <h1 style={{ marginTop: 14 }}>ドクター &amp;<br/>セラピスト</h1>
          <p className="lede">
            経験豊富な医師・セラピストが、日本語でしっかりとサポートします。<br/>
            <span style={{ fontSize: 15, color: 'var(--ink-mute)' }}>Our experienced team is here to support you — fully in Japanese.</span>
          </p>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Doctors / 医師</span>
            <h2>General Practitioners</h2>
            <p className="section-sub">女性医師のご指名も承ります。Female doctor available upon request.</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 24,
          }}>
            {DOCTORS.map(d => <DoctorCard key={d.name} person={d} />)}
          </div>
        </div>
      </section>

      {/* ALLIED HEALTH */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Allied Health / メディカルスタッフ</span>
            <h2>Physiotherapist &amp; Counsellor</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 24,
          }}>
            {ALLIED.map(d => <DoctorCard key={d.name} person={d} />)}
          </div>
        </div>
      </section>

      {/* BOOK CTA */}
      <section className="section-tight">
        <div className="container">
          <div className="contact-strip">
            <div>
              <span style={{ color: 'var(--accent)', fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                Book an Appointment
              </span>
              <h2>ご予約・お問い合わせ</h2>
              <p className="sub">
                女性医師のご指名、オンライン診療のご希望もお気軽にお申し付けください。<br/>
                Female doctor requests and online consultations welcome.
              </p>
            </div>
            <div className="contact-tiles">
              <a href="tel:1800355855" className="contact-tile accent" style={{ textDecoration: 'none' }}>
                <div>
                  <div className="lbl">Free dial</div>
                  <div className="val">1800 355 855</div>
                </div>
                <span style={{ fontSize: 22 }}>→</span>
              </a>
              <a href="tel:0292994661" className="contact-tile" style={{ textDecoration: 'none' }}>
                <div>
                  <div className="lbl">Direct</div>
                  <div className="val">02 9299 4661</div>
                </div>
                <span style={{ fontSize: 22, color: '#8b96a8' }}>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

window.DoctorsPage = DoctorsPage;
