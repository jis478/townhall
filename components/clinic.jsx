/* global React */

function ClinicPage({ onNavigate }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>ホーム</a>
            <span>/</span>
            <span style={{color: 'var(--accent)'}}>クリニック詳細</span>
          </div>
          <span className="section-eyebrow">Clinic Details / クリニック詳細</span>
          <h1 style={{marginTop: 14}}>タウンホール<br/>クリニックについて</h1>
          <p className="lede">
            1998年開院。シドニーCBDで25年以上、日本語医療サービスを提供し続けています。<br/>
            <span style={{fontSize: 15, color: 'var(--ink-mute)'}}>Open since 1998 — 25+ years of Japanese medical services in Sydney CBD.</span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* TOP: address + map side by side on desktop, stacked on mobile */}
          <div className="clinic-top-grid">

            {/* Address info */}
            <div>
              <span className="section-eyebrow">Access / アクセス</span>
              <h2 style={{marginTop:14, fontSize:'clamp(24px,3vw,34px)'}}>シドニーCBD<br/>中心地に位置</h2>
              <p style={{marginTop:12, color:'var(--ink-soft)', fontSize:15, lineHeight:1.7}}>
                タウンホール駅・ウィンヤード駅から徒歩わずか5分。
              </p>
              <div style={{marginTop:24, display:'flex', flexDirection:'column', gap:12}}>
                {[
                  { label:'住所 / Address',          value:'Level 4, 50 York St, Sydney NSW 2000', href:'https://maps.google.com/?q=Level+4,+50+York+St+Sydney', icon:'📍' },
                  { label:'フリーダイヤル / Free dial', value:'1800 355 855',                         href:'tel:1800355855',   icon:'📞' },
                  { label:'直通 / Direct',            value:'(02) 9299 4661',                        href:'tel:0292994661',   icon:'📞' },
                  { label:'診療時間 / Hours',          value:'平日 月〜金　9:00 – 18:00',              href:null,              icon:'🕐' },
                  { label:'最寄駅 / Station',          value:'Town Hall・Wynyard 徒歩5分',             href:null,              icon:'🚉' },
                  { label:'Wi-Fi',                    value:'院内無料Wi-Fi完備',                      href:null,              icon:'📶' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display:'flex', gap:14, alignItems:'center',
                    padding:'14px 16px',
                    background:'var(--bg-elev)',
                    border:'1px solid var(--line)',
                    borderRadius:10,
                  }}>
                    <span style={{fontSize:18, flexShrink:0}}>{item.icon}</span>
                    <div style={{minWidth:0}}>
                      <div style={{fontSize:10.5, color:'var(--ink-mute)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:2}}>{item.label}</div>
                      {item.href
                        ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener"
                             style={{fontSize:14.5, fontWeight:500, color:'var(--accent)', textDecoration:'none', wordBreak:'break-all'}}>{item.value}</a>
                        : <div style={{fontSize:14.5, fontWeight:500}}>{item.value}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div style={{borderRadius:'var(--radius-lg)', overflow:'hidden', border:'1px solid var(--line)', boxShadow:'var(--shadow-sm)'}}>
              <iframe
                title="Townhall Clinic Map"
                src="https://maps.google.com/maps?q=50+York+St,+Sydney+NSW+2000,+Australia&output=embed"
                width="100%"
                height="100%"
                style={{display:'block', border:0, minHeight:320}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.google.com/?q=Level+4,+50+York+St+Sydney+NSW+2000"
                target="_blank" rel="noopener"
                style={{
                  display:'flex', alignItems:'center', justifyContent:'space-between',
                  padding:'12px 18px',
                  background:'var(--bg-elev)',
                  borderTop:'1px solid var(--line)',
                  textDecoration:'none', color:'var(--accent)',
                  fontSize:13, fontWeight:600,
                }}
              >
                <span>📍 Level 4, 50 York St, Sydney CBD</span>
                <span>Google マップで開く →</span>
              </a>
            </div>
          </div>

          {/* BOTTOM: features full-width card */}
          <div style={{
            marginTop:40,
            background:'var(--bg-elev)', border:'1px solid var(--line)',
            borderRadius:'var(--radius-lg)', padding:'32px 36px',
          }}>
            <span className="section-eyebrow" style={{marginBottom:16, display:'inline-flex'}}>Our Features / 選ばれる理由</span>
            <div className="clinic-features-grid">
              {[
                ['🗣️', '日本語通訳スタッフ常駐', '診察から薬の説明まですべて日本語でサポート。'],
                ['👩‍⚕️', '女性医師対応可',         '女性ドクターへのご指名も承ります。'],
                ['💳', 'キャッシュレス診療',     '提携保険会社18社以上。自己負担なく受診可能。'],
                ['💻', 'オンライン診療対応',     '全国対応（ゴールドコースト除く）。'],
                ['🛋️', '広い待合室・無料Wi-Fi',  'ゆったりとした待合室で快適にお待ちいただけます。'],
              ].map(([icon, title, desc]) => (
                <div key={title} style={{display:'flex', gap:14, alignItems:'flex-start'}}>
                  <span style={{
                    fontSize:20, width:40, height:40, borderRadius:10, flexShrink:0,
                    background:'var(--accent-soft)', display:'grid', placeItems:'center',
                  }}>{icon}</span>
                  <div>
                    <div style={{fontWeight:600, fontSize:14.5, marginBottom:3}}>{title}</div>
                    <div style={{fontSize:13, color:'var(--ink-soft)', lineHeight:1.6}}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section-tight">
        <div className="container">
          <div className="contact-strip">
            <div>
              <span style={{color:'var(--accent)', fontSize:12, fontWeight:600, letterSpacing:'0.16em', textTransform:'uppercase'}}>予約受付中</span>
              <h2>お気軽にお電話<br/>ください。</h2>
              <p className="sub">日本人スタッフが対応いたします。当日のご予約も承ります。</p>
            </div>
            <div className="contact-tiles">
              <div className="contact-tile accent">
                <div><div className="lbl">Free dial</div><div className="val">1800 355 855</div></div>
              </div>
              <div className="contact-tile accent">
                <div><div className="lbl">Direct</div><div className="val">02 9299 4661</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

window.ClinicPage = ClinicPage;
