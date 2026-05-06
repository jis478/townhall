/* global React */
const { useState: useStateIns, useEffect: useEffectIns } = React;

const PARTNERS = [
  { name: 'AIU 損保保険ジャパン' },
  { name: 'エイチ・エス損害保険' },
  { name: 'JI傷害火災保険' },
  { name: 'あいおいニッセイ同和損害保険' },
  { name: '冨士火災海上' },
  { name: '朝日火災海上' },
  { name: 'ソニー損害保険' },
  { name: '共栄火災海上' },
  { name: '東京海上日動火災', link: 'https://www.tokiomarine.com.au/overseas-travel-insurance-claims-inbound/' },
  { name: 'エース保険' },
  { name: '三井住友' },
  { name: '損保ジャパン日本興亜' },
  { name: '日新火災' },
  { name: 'ニューインディア保険' },
  { name: '大同火災' },
  { name: 'セゾン自動車火災' },
  { name: 'チャブ保険' },
  { name: 'au損保' },
];

const EXCLUSIONS = [
  '既往症 ― 持病や日本出国前に発症している疾病・ケガ（完治している場合は可）',
  '症状はないが「念のため」行う諸検査',
  '妊娠・出産・流産・早産およびこれらに起因する疾病',
  '避妊目的のみでのピル処方（婦人科系疾病の治療目的の場合は対象）',
  '避妊用に服用しているピルが原因で起こる症状（モーニングアフターピル含む）',
  '傷跡・火傷跡などの治療',
  'ピアス・タトゥ―・アートメイク・まつ毛エクステ等による炎症',
  'ほくろ ― 変色・サイズ変化・かゆみ・痛み・化膿などの症状がない場合',
  '視力低下 ― 他に病的症状がなく、乱視・近視等視力低下のみ',
  '虫歯・歯槽膿漏・歯肉炎などの歯科疾病とそれに起因する症状',
  '危険なスポーツ（ロッククライミング、ボルダリング、スカイダイビング等）',
  '自傷、自殺行為、違法な運転、闘争行為、犯罪行為によるケガ',
  '知人・友人・家族との喧嘩によるケガ',
  '違法な飲酒、医師の指示に反する飲酒に起因する症状',
  '一時帰国中の発症・日本での受診（一時帰国補償特約がある場合は対象）',
];

function InsurancePage({ onNavigate }) {
  const sections = [
    { id: 'about', title: '保険について' },
    { id: 'cashless', title: 'キャッシュレスとは' },
    { id: 'creditcard', title: 'クレカ付帯保険' },
    { id: 'flow', title: 'ご利用の流れ' },
    { id: 'notes', title: 'ご利用上の注意' },
    { id: 'partners', title: '提携保険会社' },
  ];

  const [activeId, setActiveId] = useStateIns('about');

  useEffectIns(() => {
    const onScroll = () => {
      const tops = sections.map(s => {
        const el = document.getElementById(s.id);
        return el ? { id: s.id, top: el.getBoundingClientRect().top } : null;
      }).filter(Boolean);
      const above = tops.filter(t => t.top < 200);
      if (above.length > 0) setActiveId(above[above.length - 1].id);
      else setActiveId(tops[0]?.id || 'about');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>ホーム</a>
            <span>/</span>
            <span style={{color: 'var(--accent)'}}>海外旅行傷害保険</span>
          </div>
          <span className="section-eyebrow">Overseas Travel Insurance</span>
          <h1 style={{marginTop: 14}}>海外旅行傷害保険<br/>＆ キャッシュレス診療</h1>
          <p className="lede">
            旅行中・留学中の事故や病気に備える海外旅行傷害保険。提携保険にご加入の方は、自己負担なく安心して診療を受けられます。
          </p>
        </div>
      </section>

      <div className="container">
        <div className="article-layout">
          {/* TOC */}
          <aside className="toc">
            <h6>このページの内容</h6>
            <ol>
              {sections.map(s => (
                <li key={s.id}>
                  <a href={'#' + s.id} className={activeId === s.id ? 'active' : ''}>{s.title}</a>
                </li>
              ))}
            </ol>

            <div style={{marginTop: 32, padding: 20, background: 'var(--bg-elev)', border: '1px solid var(--line)', borderRadius: 14}}>
              <div style={{fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-mute)'}}>Need help?</div>
              <div style={{fontSize: 14, fontWeight: 600, marginTop: 6, lineHeight: 1.4}}>
                ご不明な点は<br/>お気軽にどうぞ
              </div>
              <a href="tel:1800355855" style={{display: 'block', marginTop: 12, fontFamily: 'JetBrains Mono, monospace', color: 'var(--accent)', fontSize: 14, fontWeight: 600}}>
                1800 355 855
              </a>
            </div>
          </aside>

          {/* BODY */}
          <article className="article-body">
            <section id="about">
              <h2><span className="num">01</span>海外旅行傷害保険とは</h2>
              <p>
                旅行中や留学中に事故や病気等の何かしらのトラブルが発生した際に保障してくれる保険で、<strong>日本を出発する前に加入する必要があります。</strong>
              </p>
              <p>
                病気・ケガについては、保険証券に記載されている支払限度額まで保障を受けることができます。但し、一回の病気やケガの治療で保険会社から支払いを受けられるのは、病気の場合は初診日から<strong>180日</strong>、ケガの場合はケガをした日から<strong>180日限度</strong>という制限があります。
              </p>
              <p>
                当クリニックと提携している保険会社の海外旅行傷害保険にご加入の場合、自己負担なく安心して診療を受けられる<strong>キャッシュレスサービス</strong>がご利用いただけます。
              </p>
              <div style={{padding: '14px 20px', borderLeft: '3px solid var(--accent)', background: 'var(--accent-soft)', borderRadius: '0 8px 8px 0', fontSize: 14, color: 'var(--accent-ink)', marginTop: 12}}>
                ※ 保険の延長は通常出国後も可能です。詳しくは保険会社にお問い合わせください。
              </div>
            </section>

            <section id="cashless">
              <h2><span className="num">02</span>当院のキャッシュレスサービス</h2>
              <ul>
                <li>診察費・検査費・薬代・通訳費を自己負担することなく安心して治療を受けられます。</li>
                <li>保険会社への請求手続きは、タウンホールクリニックが行いますので、基本事項を保険金請求書にご記入いただくのみで手続きは終わります。</li>
                <li>当クリニックのドクターからの指示のもとにご紹介した専門医や検査機関に行かれる場合も、同様のキャッシュレスサービスがご利用いただけます。</li>
              </ul>
            </section>

            <section id="creditcard">
              <h2><span className="num">03</span>クレジットカード付帯保険の方へ</h2>
              <div className="cc-card">
                <span className="tag">Important</span>
                <h3>事前に保険会社へご確認ください</h3>
                <p>
                  各社クレジットカード付帯海外旅行傷害保険ご加入の場合、保険カバー内容が多様なため、<strong>まずご自分で加入している保険会社にご連絡いただき、キャッシュレスサービスの提供が受けられるかどうか確認</strong>をいただく必要があります。
                </p>
                <p style={{marginTop: 10}}>
                  クレジットカード付帯海外旅行傷害保険は、<strong>日本出国後90日以内</strong>の病気・ケガ治療にのみ適用されますのでご注意ください。
                </p>
              </div>

              <p style={{marginTop: 18}}><strong>診療の際にお持ちいただくもの：</strong></p>
              <div className="bring-grid">
                <div className="bring-tile">
                  <div className="ic">01</div>
                  <div className="nm">パスポート</div>
                  <div className="desc">本人確認のため必須</div>
                </div>
                <div className="bring-tile">
                  <div className="ic">02</div>
                  <div className="nm">付帯クレジットカード</div>
                  <div className="desc">保険が付帯しているカード</div>
                </div>
                <div className="bring-tile">
                  <div className="ic">03</div>
                  <div className="nm">出国日確認書類</div>
                  <div className="desc">Eチケット、出国スタンプ、搭乗券半券等</div>
                </div>
              </div>
            </section>

            <section id="flow">
              <h2><span className="num">04</span>キャッシュレスサービスの流れ</h2>
              <p style={{color: 'var(--ink-mute)', fontSize: 14}}>
                ※ クレジットカード付帯海外旅行傷害保険をお持ちの方は、上記の事前確認をお願いいたします。
              </p>

              <div className="steps" style={{marginTop: 32}}>
                <div className="step">
                  <div className="num">01</div>
                  <h4>お電話でご予約</h4>
                  <p>当クリニックにお電話いただき、キャッシュレス診療の予約をしてください。</p>
                </div>
                <div className="step">
                  <div className="num">02</div>
                  <h4>保険証券・身分証ご持参</h4>
                  <p>保険証券、パスポート、出国日が確認できるもの（JI/Tabiho/HSの場合）をご持参。</p>
                </div>
                <div className="step">
                  <div className="num">03</div>
                  <h4>請求書記入サポート</h4>
                  <p>日本人スタッフが保険金請求書のご記入をお手伝いします。送付も当方で対応。</p>
                </div>
                <div className="step">
                  <div className="num">04</div>
                  <h4>日本語で診察</h4>
                  <p>通訳が同席。処方薬の服用方法もきめ細かくご説明。専門医手配もお任せください。</p>
                </div>
                <div className="step">
                  <div className="num">05</div>
                  <h4>お薬の受け取り</h4>
                  <p>院内、もしくは提携薬局でキャッシュレスで受け取れます。</p>
                </div>
              </div>

              <div style={{marginTop: 28, padding: 18, background: 'var(--bg-elev)', border: '1px dashed var(--line)', borderRadius: 12, fontSize: 13.5, color: 'var(--ink-soft)'}}>
                <strong style={{color: 'var(--ink)'}}>持ち物の補足：</strong> 保険証券は、被保険者名・契約番号・有効期限・カバー内容が明記された保険会社発行のE-mailプリントアウト等の正式文書でも代用可能です。出国日確認書類は JI / Tabiho / HS 保険の場合のみ必要です。
              </div>
            </section>

            <section id="notes">
              <h2><span className="num">05</span>ご利用にあたっての注意事項</h2>
              <p>下記のような場合には、海外旅行保険のお支払対象とならないことがあります。ご不明な点はご加入の保険会社にお問い合わせください。</p>

              <div className="notes-card" style={{marginTop: 18}}>
                <h3>サービスの提供が受けられない場合</h3>
                <div className="notes-title">対象外となる主なケース</div>
                <ol>
                  {EXCLUSIONS.map((ex, i) => <li key={i}>{ex}</li>)}
                </ol>
              </div>
            </section>

            <section id="partners">
              <h2><span className="num">06</span>キャッシュレス提携保険会社</h2>
              <p>以下の保険会社の海外旅行傷害保険にご加入の方は、当院でキャッシュレスサービスをご利用いただけます。</p>

              <div className="partner-grid">
                {PARTNERS.map((p, i) => (
                  <a className="partner" key={i} href={p.link || '#'} target={p.link ? '_blank' : undefined} rel="noopener">
                    <span className="name">{p.name}</span>
                    {p.link && <span className="ext">↗</span>}
                  </a>
                ))}
              </div>

              <p style={{fontSize: 13, color: 'var(--ink-mute)', marginTop: 18}}>
                ※ 東京海上日動火災の保険請求については、社名のリンクから詳細をご参照ください。
              </p>
            </section>

            <div className="page-cta-block">
              <div>
                <h3 style={{color: '#fff', fontSize: 26, lineHeight: 1.2, marginBottom: 10}}>ご不明な点は、お気軽にお電話を。</h3>
                <p style={{color: '#a8b3c4', fontSize: 15}}>
                  日本人通訳が常勤しております。受付時間：平日 9:00 – 18:00
                </p>
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

window.InsurancePage = InsurancePage;
