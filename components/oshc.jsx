/* global React */

function OshcPage({ onNavigate }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>HOME</a>
            <span>/</span>
            <span style={{color: 'var(--accent)'}}>STUDENT_INSURANCE_&amp;_OTHER</span>
          </div>
          <span className="section-eyebrow">Student Insurance &amp; Other Coverage</span>
          <h1 style={{marginTop: 14}}>学生保険（OSHC）・<br/>その他の保険</h1>
          <p className="lede">
            海外旅行傷害保険以外の保険をお持ちの方、または保険をお持ちでない方へのご案内です。
          </p>
        </div>
      </section>

      <div className="container">
        <div className="article-layout">

          {/* TOC */}
          <aside className="toc">
            <h6>このページの内容</h6>
            <ol>
              <li><a href="#oshc">学生保険 (OSHC)</a></li>
              <li><a href="#private">海外民間保険</a></li>
              <li><a href="#medicare">Medicare</a></li>
              <li><a href="#kokuho">日本の国民健康保険</a></li>
            </ol>
            <div style={{marginTop: 32, padding: 20, background: 'var(--bg-elev)', border: '1px solid var(--line)', borderRadius: 14}}>
              <div style={{fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-mute)'}}>Need help?</div>
              <div style={{fontSize: 14, fontWeight: 600, marginTop: 6, lineHeight: 1.4}}>ご不明な点は<br/>お気軽にどうぞ</div>
              <a href="tel:1800355855" style={{display: 'block', marginTop: 12, fontFamily: 'JetBrains Mono, monospace', color: 'var(--accent)', fontSize: 14, fontWeight: 600}}>
                1800 355 855
              </a>
            </div>
          </aside>

          {/* BODY */}
          <article className="article-body">

            {/* OSHC */}
            <section id="oshc">
              <h2><span className="num">01</span>学生保険（OSHC）をお持ちの方</h2>
              <p>
                OSHC（Overseas Student Health Cover）をお持ちの場合、<strong>差額のみのお支払いで診察を受けられます。</strong>当クリニックが保険会社へ直接請求を行います。
              </p>

              <div style={{marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12}}>
                <div style={{padding: '16px 20px', background: 'var(--accent-soft)', border: '1px solid rgba(31,107,107,0.2)', borderRadius: 12}}>
                  <div style={{fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8}}>✓ 対応している保険会社</div>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
                    {['Medibank', 'Allianz', 'AHM'].map(name => (
                      <span key={name} style={{
                        padding: '4px 14px',
                        background: 'var(--bg-elev)',
                        border: '1px solid var(--line)',
                        borderRadius: 999,
                        fontSize: 13.5, fontWeight: 500,
                      }}>{name}</span>
                    ))}
                  </div>
                </div>
                <div style={{padding: '16px 20px', background: '#fff8ed', border: '1px solid #f0e2c2', borderRadius: 12}}>
                  <div style={{fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--warn)', marginBottom: 8}}>✕ 対応していない保険会社</div>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
                    {['Nib', 'Bupa'].map(name => (
                      <span key={name} style={{
                        padding: '4px 14px',
                        background: 'var(--bg-elev)',
                        border: '1px solid #f0e2c2',
                        borderRadius: 999,
                        fontSize: 13.5, fontWeight: 500,
                        color: 'var(--warn)',
                      }}>{name}</span>
                    ))}
                  </div>
                </div>
              </div>

              <p style={{marginTop: 18}}>
                対応保険会社にご加入の場合、窓口でのお支払いは差額（ギャップ）のみとなります。保険証書をご持参ください。
              </p>
            </section>

            {/* PRIVATE */}
            <section id="private">
              <h2><span className="num">02</span>海外民間保険をお持ちの方</h2>
              <p>
                海外旅行傷害保険以外の民間保険をお持ちの場合、<strong>窓口では一旦全額をお支払いいただきます。</strong>その後、領収書を保険会社に提出して払い戻しを受けてください。
              </p>
              <p>
                当クリニックが発行する領収書は、診断書を兼ねた書式となっておりますので、保険会社への請求書類としてそのままご使用いただけます。
              </p>
              <div style={{padding: '14px 20px', borderLeft: '3px solid var(--accent)', background: 'var(--accent-soft)', borderRadius: '0 8px 8px 0', fontSize: 14, color: 'var(--accent-ink)', marginTop: 4}}>
                ご不明な点は、加入されている保険会社へ直接お問い合わせください。
              </div>
            </section>

            {/* MEDICARE */}
            <section id="medicare">
              <h2><span className="num">03</span>Medicareをお持ちの方</h2>
              <div className="cc-card" style={{borderColor: '#f0e2c2', background: '#fff8ed'}}>
                <span className="tag" style={{background: '#fde8c8', color: 'var(--warn)'}}>ご注意</span>
                <h3 style={{marginTop: 12}}>現在、Medicare新規患者の受付を停止しております</h3>
                <p>
                  現時点では新規のMedicareカード患者様のご予約は承っておりません。ご不便をおかけして申し訳ございません。
                </p>
              </div>
              <p style={{marginTop: 18}}>
                Medicareをご利用の場合は、窓口で全額をお支払いいただいた後、Medicareオフィスにて払い戻し請求を行ってください。その際、当クリニック発行の領収書が必要となります。
              </p>
            </section>

            {/* KOKUHO */}
            <section id="kokuho">
              <h2><span className="num">04</span>日本の国民健康保険をお持ちの方</h2>
              <p>
                2001年1月より、日本の国民健康保険（国保）が海外での医療費にも適用されるようになりました。ただし、<strong>窓口では全額をお支払いいただく必要があります。</strong>帰国後に日本の市区町村窓口で払い戻し請求を行ってください。
              </p>

              <div style={{marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10}}>
                <div style={{fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 4}}>請求に必要な書類</div>
                {[
                  '当クリニック発行の領収書（原本）',
                  '診療内容明細書（英語のものは日本語訳が必要な場合があります）',
                  '日本語訳の証明書（英文書類に添付）',
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '28px 1fr', gap: 12,
                    padding: '12px 16px',
                    background: 'var(--bg-elev)', border: '1px solid var(--line)', borderRadius: 10,
                    fontSize: 14, color: 'var(--ink-soft)', alignItems: 'center',
                  }}>
                    <span style={{
                      width: 22, height: 22, borderRadius: '50%',
                      background: 'var(--accent-soft)', color: 'var(--accent-ink)',
                      display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700,
                    }}>{i + 1}</span>
                    {item}
                  </div>
                ))}
              </div>

              <p style={{marginTop: 18}}>
                払い戻しは、日本国内での同等の治療費を基準に計算され、<strong>概ね70%程度</strong>が払い戻されます。詳細は加入されている市区町村の国民健康保険窓口にご確認ください。
              </p>
              <div style={{padding: '14px 20px', borderLeft: '3px solid #e0a020', background: '#fff8ed', borderRadius: '0 8px 8px 0', fontSize: 13.5, color: '#7a5500', marginTop: 4}}>
                ※ 保険制度は変更される場合があります。最新情報は各保険機関に直接ご確認ください。当クリニックは情報の正確性について責任を負いかねます。
              </div>
            </section>

            {/* CTA */}
            <div style={{
              marginTop: 32, padding: 36,
              background: 'var(--ink)', color: '#fff',
              borderRadius: 'var(--radius-lg)',
              display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 28, alignItems: 'center'
            }}>
              <div>
                <h3 style={{color: '#fff', fontSize: 24, lineHeight: 1.2, marginBottom: 10}}>ご不明な点は、お気軽にお電話を。</h3>
                <p style={{color: '#a8b3c4', fontSize: 15}}>日本人通訳が常勤しております。受付時間：平日 9:00 – 18:00</p>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                <a href="tel:1800355855" className="btn btn-accent" style={{justifyContent: 'space-between'}}>
                  <span>フリーダイヤル</span>
                  <span style={{fontFamily: 'JetBrains Mono, monospace'}}>1800 355 855</span>
                </a>
                <a href="tel:0292994661" className="btn btn-ghost" style={{justifyContent: 'space-between', background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.1)', color: '#fff'}}>
                  <span style={{color: '#a8b3c4'}}>直通</span>
                  <span style={{fontFamily: 'JetBrains Mono, monospace'}}>02 9299 4661</span>
                </a>
              </div>
            </div>

          </article>
        </div>
      </div>
    </>
  );
}

window.OshcPage = OshcPage;
