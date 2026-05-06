/* global React */

function HomePage({ onNavigate }) {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div style={{order: 2}}>
              <h1>
                オーストラリアでも、<br/>
                <span className="accent">日本語で</span>安心の<br/>
                医療サービス。
              </h1>
              <p className="hero-sub">
                経験豊富な日本人通訳が常勤。予約から入院手配、専門医の診察まで、すべて日本語でしっかりサポートします。提携保険会社のキャッシュレスサービスにも対応。
              </p>

              <div className="hero-meta">
                <div className="stat">
                  <div className="num">25<span style={{fontSize: 18, color: 'var(--ink-mute)'}}>＋</span></div>
                  <div className="lbl">Years of trust</div>
                </div>
                <div className="stat">
                  <div className="num">18</div>
                  <div className="lbl">提携保険会社</div>
                </div>
                <div className="stat">
                  <div className="num">100%</div>
                  <div className="lbl">日本語対応</div>
                </div>
              </div>

              <div className="hero-cta">
                <a className="btn btn-primary" href="tel:1800355855">
                  電話で予約 — 1800 355 855
                </a>
                <a className="btn btn-ghost" href="#" onClick={(e) => { e.preventDefault(); onNavigate('insurance'); }}>
                  保険について <span className="arrow">→</span>
                </a>
              </div>
            </div>

            <div style={{position: 'relative', order: 1}}>
              <div className="hero-card" style={{cursor:'pointer'}} onClick={() => onNavigate('clinic')}>
                <img
                  src="assets/hero.png"
                  alt="Townhall Clinic"
                  style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block'}}
                />
              </div>
              <div className="hero-floater">
                <div className="ico">¥0</div>
                <div>
                  <div className="t1">キャッシュレス診療</div>
                  <div className="t2">提携保険でその場の自己負担なし</div>
                </div>
              </div>
              <div className="hero-floater-2">
                <div className="label">Free dial</div>
                <div style={{fontFamily: 'JetBrains Mono, monospace', fontWeight: 600}}>1800 355 855</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services-section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Services</span>
            <h2>シドニーCBDで、幅広い<br/>日本語医療サービスを。</h2>
            <p className="section-sub">
              タウンホール駅・ウィンヤード駅から徒歩5分。総合医（GP）として全診療科目をカバー。専門医・検査機関のご紹介もお任せください。
            </p>
          </div>

          <div className="svc-grid">
            <div className="svc" style={{cursor:'pointer'}} onClick={() => onNavigate('doctors')}>
              <div className="num">01 / GP</div>
              <h3>一般診療</h3>
              <p>風邪、発熱、腹痛、ケガ、皮膚疾患など、まずはご相談ください。総合医として全診療科目をカバーします。</p>
              <div className="svc-meta"><span>女性医師指名可</span><span>→</span></div>
            </div>
            <div className="svc" style={{cursor:'pointer'}} onClick={() => onNavigate('insurance')}>
              <div className="num">02 / TRAVEL</div>
              <h3>海外旅行傷害保険</h3>
              <p>提携保険会社にご加入なら、診察費・検査費・薬代・通訳費すべてキャッシュレスで対応いたします。</p>
              <div className="svc-meta"><span>18社と提携</span><span>→</span></div>
            </div>
            <div className="svc" style={{cursor:'pointer'}} onClick={() => onNavigate('insurance')}>
              <div className="num">03 / OSHC</div>
              <h3>学生保険・その他</h3>
              <p>OSHC（Nib、Bupaを除く）は差額のみで診察可能。保険のない方もご相談ください。</p>
              <div className="svc-meta"><span>差額のみ</span><span>→</span></div>
            </div>
            <div className="svc" style={{cursor:'pointer'}} onClick={() => onNavigate('doctors')}>
              <div className="num">04 / SPEC</div>
              <h3>専門医ご紹介</h3>
              <p>必要に応じて専門医（Specialist）への紹介状を発行。予約・通訳手配まで日本語でサポート。</p>
              <div className="svc-meta"><span>紹介状発行</span><span>→</span></div>
            </div>
            <div className="svc" style={{cursor:'pointer'}} onClick={() => onNavigate('insurance')}>
              <div className="num">05 / TEST</div>
              <h3>検査・血液検査</h3>
              <p>院内での処置に加え、血液検査・X線・各種検査機関への手配も同様にキャッシュレスでご利用可能。</p>
              <div className="svc-meta"><span>院外連携</span><span>→</span></div>
            </div>
            <div className="svc" style={{cursor:'pointer'}} onClick={() => onNavigate('insurance')}>
              <div className="num">06 / RX</div>
              <h3>薬の処方</h3>
              <p>院内で薬の手配、もしくは提携薬局でキャッシュレスでお受け取りいただけます。服用方法も日本語で丁寧にご説明。</p>
              <div className="svc-meta"><span>提携薬局あり</span><span>→</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CASHLESS FEATURE */}
      <section className="section" style={{paddingTop: 0}}>
        <div className="container">
          <div className="feature-split">
            <div>
              <span className="section-eyebrow">Cashless Service</span>
              <h2 style={{fontSize: 'clamp(28px, 3.4vw, 42px)', marginTop: 14}}>その場の支払い、ゼロ。</h2>
              <p className="section-sub">
                提携保険会社の海外旅行傷害保険にご加入の場合、自己負担なく安心して診療を受けられるキャッシュレスサービスがご利用いただけます。
              </p>
              <ul className="feature-list">
                <li>
                  <span className="check">✓</span>
                  <span><strong>診察費・検査費・薬代・通訳費</strong>を、自己負担することなく治療を受けられます。</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>保険会社への請求手続きは <strong>当クリニックが代行</strong>。基本事項のご記入のみで完了します。</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>ご紹介した <strong>専門医・検査機関</strong> でも、同様のキャッシュレスサービスをご利用可能。</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>処方された薬の服用方法など、<strong>通訳が日本語できめ細かく</strong>ご説明します。</span>
                </li>
              </ul>
              <div style={{marginTop: 32}}>
                <a className="btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); onNavigate('insurance'); }}>
                  保険の詳細を見る <span className="arrow">→</span>
                </a>
              </div>
            </div>

            <div className="callout-card">
              <div style={{fontSize: 12, color: 'var(--ink-mute)', textTransform: 'uppercase', letterSpacing: '0.1em'}}>診療予約</div>
              <h3 style={{fontSize: 24, marginTop: 8, marginBottom: 18}}>当日のご予約も承ります</h3>
              <div className="row">
                <span className="label">フリーダイヤル</span>
                <a href="tel:1800355855" className="value accent" style={{textDecoration:'none'}}>1800 355 855</a>
              </div>
              <div className="row">
                <span className="label">直通</span>
                <a href="tel:0292994661" className="value accent" style={{textDecoration:'none'}}>02 9299 4661</a>
              </div>
              <div className="row">
                <span className="label">住所</span>
                <a href="https://maps.google.com/?q=Level+4,+50+York+St+Sydney" target="_blank" rel="noopener" className="value" style={{textDecoration:'none', color:'inherit'}}>Level 4, 50 York St</a>
              </div>
              <div className="row">
                <span className="label">受付時間</span>
                <span className="value">平日 9:00 – 18:00</span>
              </div>
              <div className="row">
                <span className="label">最寄駅</span>
                <span className="value">Town Hall / Wynyard 5min</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="section-tight">
        <div className="container">
          <div className="contact-strip">
            <div>
              <span style={{color: 'var(--accent)', fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase'}}>
                Get in touch
              </span>
              <h2>体調が優れないときは、<br/>早めにご相談ください。</h2>
              <p className="sub">
                海外滞在中の体調不良は、自分で何とかしようとせず、早めに専門家に相談することが大切です。経験豊富なスタッフがしっかりサポートいたします。
              </p>
            </div>
            <div className="contact-tiles">
              <div className="contact-tile accent">
                <div>
                  <div className="lbl">Free dial</div>
                  <div className="val">1800 355 855</div>
                </div>
              </div>
              <div className="contact-tile accent">
                <div>
                  <div className="lbl">Direct</div>
                  <div className="val">02 9299 4661</div>
                </div>
              </div>
              <div className="contact-tile accent">
                <div>
                  <div className="lbl">Address</div>
                  <div className="val" style={{fontSize: 14, fontFamily: 'inherit'}}>Level 4, 50 York St, Sydney</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

window.HomePage = HomePage;
