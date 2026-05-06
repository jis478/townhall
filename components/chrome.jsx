/* global React */
const { useState } = React;

function Header({ active, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (page) => {
    setMenuOpen(false);
    onNavigate(page);
  };

  return (
    <>
      <div className="utility-bar">
        <div className="container">
          <div className="util-left">
            <span className="util-dot"></span>
            <span>平日 月〜金　9:00 – 18:00</span>
            <span className="util-hide-sm" style={{opacity:0.5}}>·</span>
            <span className="util-hide-sm">Level 4, 50 York St, Sydney</span>
          </div>
          <div className="util-right">
            <a href="#">日本語</a>
            <span style={{opacity:0.4}}>/</span>
            <a href="#" style={{opacity:0.55}}>EN</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container">
          <a href="#" className="brand" onClick={(e) => { e.preventDefault(); go('home'); }}>
            <img src="assets/logo_sv.png" alt="Townhall Clinic" style={{height: 110, width: 'auto'}} />
          </a>

          <nav className="nav">
            <a href="#" className={active === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); go('home'); }}>ホーム</a>
            <a href="#" className={active === 'clinic' ? 'active' : ''} onClick={(e) => { e.preventDefault(); go('clinic'); }}>クリニック詳細</a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('home'); window.setTimeout(() => { const el = document.getElementById('services-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>サービス案内</a>
            <a href="#" className={active === 'doctors' ? 'active' : ''} onClick={(e) => { e.preventDefault(); go('doctors'); }}>ドクター</a>
            <a href="#" className={active === 'insurance' ? 'active' : ''} onClick={(e) => { e.preventDefault(); go('insurance'); }}>海外旅行傷害保険</a>
            <a href="#" className={active === 'oshc' ? 'active' : ''} onClick={(e) => { e.preventDefault(); go('oshc'); }}>学生保険・OSHC</a>
          </nav>

          <div className="cta-row">
            <div className="btn btn-accent" style={{cursor:'default'}}>
              <span style={{opacity:0.75, fontFamily:'JetBrains Mono, monospace', fontSize: 12}}>TEL</span>
              1800 355 855
            </div>
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="メニュー"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        <a href="#" className={active === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); go('home'); }}>ホーム / Home</a>
        <a href="#" className={active === 'clinic' ? 'active' : ''} onClick={(e) => { e.preventDefault(); go('clinic'); }}>クリニック詳細 / Clinic Details</a>
        <a href="#" onClick={(e) => { e.preventDefault(); go('home'); setMenuOpen(false); window.setTimeout(() => { const el = document.getElementById('services-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>サービス案内 / Services</a>
        <a href="#" className={active === 'doctors' ? 'active' : ''} onClick={(e) => { e.preventDefault(); go('doctors'); }}>ドクター / Doctors</a>
        <a href="#" className={active === 'insurance' ? 'active' : ''} onClick={(e) => { e.preventDefault(); go('insurance'); }}>海外旅行傷害保険 / Travel Insurance</a>
        <a href="#" className={active === 'oshc' ? 'active' : ''} onClick={(e) => { e.preventDefault(); go('oshc'); }}>学生保険・OSHC / Student Insurance</a>
        <div className="mobile-cta">
          <a className="btn btn-accent" href="tel:1800355855" style={{flex:1, justifyContent:'center'}}>📞 1800 355 855</a>
          <a className="btn btn-ghost" href="tel:0292994661" style={{flex:1, justifyContent:'center'}}>02 9299 4661</a>
        </div>
      </div>
    </>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{marginBottom: 16}}>
              <img src="assets/logo_sv.png" alt="Townhall Clinic" style={{height: 80, width: 'auto'}} />
            </div>
            <p style={{color: 'var(--ink-soft)', fontSize: 14, lineHeight: 1.7, maxWidth: 320}}>
              シドニーCBD中心、25年以上の信頼と実績。経験豊富な日本人通訳が常勤する日本語医療サービス。
            </p>
          </div>
          <div>
            <h5>クリニック</h5>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('clinic'); }}>クリニック詳細</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>サービス案内</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('doctors'); }}>ドクター・セラピスト</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('insurance'); }}>海外旅行傷害保険</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('oshc'); }}>学生保険(OSHC)</a></li>
            </ul>
          </div>
          <div>
            <h5>お問い合わせ</h5>
            <ul>
              <li><a href="tel:1800355855">1800 355 855</a></li>
              <li><a href="tel:0292994661">(02) 9299 4661</a></li>
              <li>Level 4, 50 York St</li>
              <li>Sydney NSW 2000</li>
            </ul>
          </div>
          <div>
            <h5>診療時間</h5>
            <ul>
              <li>月–金　9:00–18:00</li>
              <li>土曜　休診</li>
              <li>日祝　休診</li>
              <li style={{color: 'var(--accent)', marginTop: 6}}>キャッシュレス対応</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Townhall Clinic · 日本語医療サービス</span>
          <span style={{fontFamily: 'JetBrains Mono, monospace', letterSpacing: 0.5}}>SYD · EST. 1998</span>
        </div>
      </div>
    </footer>
  );
}

window.Header = Header;
window.Footer = Footer;
