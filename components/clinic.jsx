/* global React */

function ClinicPage({ onNavigate }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>HOME</a>
            <span>/</span>
            <span style={{color: 'var(--accent)'}}>CLINIC_DETAILS</span>
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
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'start'}}>

            {/* LEFT */}
            <div>
              <span className="section-eyebrow">Access / アクセス</span>
              <h2 style={{marginTop:14, fontSize:'clamp(26px,3vw,36px)'}}>シドニーCBD<br/>中心地に位置</h2>
              <p className="section-sub" style={{marginTop:14}}>
                タウンホール駅・ウィンヤード駅から徒歩わずか5分。シドニーの中心地でアクセス抜群です。
              </p>

              <div style={{marginTop:36, display:'flex', flexDirection:'column', gap:16}}>
                {[
                  { label:'住所 / Address', value:'Level 4, 50 York St, Sydney NSW 2000', href:'https://maps.google.com/?q=Level+4,+50+York+St+Sydney', icon:'📍' },
                  { label:'電話 / Phone', value:'1800 355 855 (フリーダイヤル)', href:'tel:1800355855', icon:'📞' },
                  { label:'電話 / Phone', value:'(02) 9299 4661 (直通)', href:'tel:0292994661', icon:'📞' },
                  { label:'診療時間 / Hours', value:'平日 月〜金　9:00 – 18:00', href:null, icon:'🕐' },
                  { label:'最寄駅 / Nearest Station', value:'Town Hall駅・Wynyard駅 徒歩5分', href:null, icon:'🚉' },
                  { label:'Wi-Fi', value:'院内無料Wi-Fi完備', href:null, icon:'📶' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display:'flex', gap:16, alignItems:'flex-start',
                    padding:'18px 20px',
                    background:'var(--bg-elev)',
                    border:'1px solid var(--line)',
                    borderRadius:12,
                  }}>
                    <span style={{fontSize:20}}>{item.icon}</span>
                    <div>
                      <div style={{fontSize:11, color:'var(--ink-mute)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:4}}>{item.label}</div>
                      {item.href
                        ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener"
                             style={{fontSize:15, fontWeight:500, color:'var(--accent)', textDecoration:'none'}}>{item.value}</a>
                        : <div style={{fontSize:15, fontWeight:500}}>{item.value}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div style={{display:'flex', flexDirection:'column', gap:24}}>

              <div style={{background:'var(--bg-elev)', border:'1px solid var(--line)', borderRadius:'var(--radius-lg)', padding:32}}>
                <span className="section-eyebrow" style={{marginBottom:16}}>Our Features</span>
                <h3 style={{fontSize:22, marginBottom:20}}>選ばれる理由</h3>
                {[
                  ['日本語通訳スタッフ常駐', '経験豊富な日本人通訳が常勤しており、診察から薬の説明まですべて日本語でサポートします。'],
                  ['女性医師対応可', '女性ドクターへのご指名も承ります。ご予約時にお申し付けください。'],
                  ['キャッシュレス診療', '提携保険会社18社以上。自己負担なく診察を受けられます。'],
                  ['オンライン診療対応', 'ゴールドコーストを除くオーストラリア全国からオンライン受診が可能です。'],
                  ['広い待合室・無料Wi-Fi', 'ゆったりとした待合室で、無料Wi-Fiもご利用いただけます。'],
                ].map(([title, desc]) => (
                  <div key={title} style={{display:'grid', gridTemplateColumns:'28px 1fr', gap:14, marginBottom:18, alignItems:'start'}}>
                    <span style={{
                      width:24, height:24, borderRadius:'50%',
                      background:'var(--accent-soft)', color:'var(--accent-ink)',
                      display:'grid', placeItems:'center', fontSize:12, fontWeight:700, marginTop:2,
                    }}>✓</span>
                    <div>
                      <div style={{fontWeight:600, fontSize:15, marginBottom:3}}>{title}</div>
                      <div style={{fontSize:13.5, color:'var(--ink-soft)', lineHeight:1.6}}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Embedded map */}
              <div style={{
                borderRadius:'var(--radius-lg)',
                overflow:'hidden',
                border:'1px solid var(--line)',
                boxShadow:'var(--shadow-sm)',
              }}>
                <iframe
                  title="Townhall Clinic Map"
                  src="https://maps.google.com/maps?q=50+York+St,+Sydney+NSW+2000,+Australia&output=embed"
                  width="100%"
                  height="320"
                  style={{display:'block', border:0}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://maps.google.com/?q=Level+4,+50+York+St+Sydney+NSW+2000"
                  target="_blank"
                  rel="noopener"
                  style={{
                    display:'flex', alignItems:'center', justifyContent:'space-between',
                    padding:'12px 18px',
                    background:'var(--bg-elev)',
                    borderTop:'1px solid var(--line)',
                    textDecoration:'none',
                    color:'var(--accent)',
                    fontSize:13, fontWeight:600,
                  }}
                >
                  <span>📍 Level 4, 50 York St, Sydney CBD</span>
                  <span>Google マップで開く →</span>
                </a>
              </div>
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
              <a href="tel:1800355855" className="contact-tile accent" style={{textDecoration:'none'}}>
                <div><div className="lbl">Free dial</div><div className="val">1800 355 855</div></div>
                <span style={{fontSize:22}}>→</span>
              </a>
              <a href="tel:0292994661" className="contact-tile" style={{textDecoration:'none'}}>
                <div><div className="lbl">Direct</div><div className="val">02 9299 4661</div></div>
                <span style={{fontSize:22, color:'#8b96a8'}}>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

window.ClinicPage = ClinicPage;
