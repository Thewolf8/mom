import { useState, useEffect } from "react";

const PAGES = [
  {
    id: 1,
    emoji: "🌹",
    title: "التضحيات",
    subtitle: "كل ما قدّمتِه من أجلي",
    color: "card-rose",
    accent: "#c9536a",
    message: [
      "أمي الغالية...",
      "",
      "لا أعرف من أين أبدأ. في كل مرة أجلس وأفكر في كل ما قدّمتِه من أجلي، يضيق صدري من الامتنان الذي لا تسعه الكلمات.",
      "",
      "تضحيتِ بليالي النوم لتضمني بأمان. تضحيتِ بأحلامكِ لتبني أحلامي. تضحيتِ بوقتكِ وراحتكِ وصحتكِ... كلها من أجلي دون أن تشكي يوماً.",
      "",
      "اعلمي يا أمي أن كل نجاح أحققه هو في الحقيقة نجاحكِ أنتِ... فأنتِ من زرعتِ البذرة.",
    ],
  },
  {
    id: 2,
    emoji: "🤲",
    title: "دعاؤكِ",
    subtitle: "سلاحي الأقوى في هذه الدنيا",
    color: "card-gold",
    accent: "#b8860b",
    message: [
      "أمي الحبيبة...",
      "",
      "كم مرة وقفتِ في جوف الليل، ورفعتِ يديكِ للسماء تدعين لي وأنا نائم لا أعلم...",
      "",
      "دعاؤكِ كان دائماً درعي الذي لا يُثقب. في كل مرة تجاوزتُ عقبة، كنتُ أشعر أن وراءها دعوة صادقة من قلبكِ الطاهر.",
      "",
      "استمري يا أمي... فأنا في حاجة لدعاء قلبكِ ما حييتُ. لا شيء في هذا الكون يعدله.",
    ],
  },
  {
    id: 3,
    emoji: "✨",
    title: "نظرتكِ",
    subtitle: "تكفيني عن كل العالم",
    color: "card-purple",
    accent: "#7b4fa6",
    message: [
      "أمي العزيزة...",
      "",
      "في أصعب اللحظات، لا أحتاج سوى نظرة واحدة منكِ... تلك النظرة التي تقول دون كلام: 'أنا هنا، لا تخف'.",
      "",
      "عيناكِ هما المكان الوحيد الذي أشعر فيه أنني محمي من كل شيء في هذا العالم.",
      "",
      "كيف لنظرة أم أن تحمل كل هذا الحب؟ هذا سرٌّ لا يعرفه إلا أبناء الأمهات العظيمات.",
    ],
  },
  {
    id: 4,
    emoji: "🙌",
    title: "يداكِ",
    subtitle: "دفء لا تجده في مكان آخر",
    color: "card-cream",
    accent: "#8b5e3c",
    message: [
      "أمي الجميلة...",
      "",
      "يداكِ اللتان أمسكتا بي وأنا أتعلم الخطو الأولى... اللتان مسحتا دموعي في أول يوم مدرسة... اللتان طبختا لي بحب كل يوم...",
      "",
      "هذه اليدان تحملان تاريخاً كاملاً من الحب غير المشروط.",
      "",
      "أتمنى يوماً أن أكون يدكِ التي تستندين عليها، كما استندتُ أنا عليكِ طوال عمري.",
    ],
  },
  {
    id: 5,
    emoji: "🌙",
    title: "صبركِ",
    subtitle: "علّمني أكثر من أي كتاب",
    color: "card-night",
    accent: "#d4a853",
    message: [
      "أمي الصابرة...",
      "",
      "كم مرة أخطأتُ وغضبتِ ثم عفوتِ... كم مرة أزعجتكِ وأتعبتكِ وقلقتكِ...",
      "",
      "لكنكِ لم تتخلّي عني يوماً. صبركِ كان مدرستي الحقيقية.",
      "",
      "منه تعلمتُ كيف أحب بلا شروط، وكيف أصبر حين يضيق العالم، وكيف أمضي قدماً حين يعجز الآخرون.",
      "",
      "شكراً يا أمي على كل لحظة صبر لم تُظهريها لي.",
    ],
  },
  {
    id: 6,
    emoji: "💛",
    title: "حبكِ",
    subtitle: "أغلى ما أملكه في هذه الحياة",
    color: "card-sunset",
    accent: "#c4760a",
    message: [
      "أمي الحنونة...",
      "",
      "يقول الناس أن الحب يأتي ويذهب، لكنني أعرف أن هناك حباً واحداً لا يتغير أبداً: حب الأم.",
      "",
      "حبكِ لم يشترط أن أكون ناجحاً، ولم يتوقف حين أخطأتُ، ولم ينقص يوماً حين احتجتُ إليه أكثر.",
      "",
      "هذا الحب هو أغلى شيء أملكه في هذه الدنيا.",
      "",
      "أحبكِ يا أمي... أكثر بكثير مما تتخيلين... ❤️",
    ],
  },
];

function generateStars(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    delay: Math.random() * 4,
    duration: Math.random() * 2 + 2,
    opacity: Math.random() * 0.6 + 0.2,
  }));
}

function generatePetals(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 12,
    duration: Math.random() * 8 + 10,
    size: Math.random() * 18 + 10,
    swing: Math.random() * 60 + 20,
  }));
}

export default function App() {
  const [screen, setScreen] = useState("lock");
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const [stars] = useState(() => generateStars(90));
  const [petals] = useState(() => generatePetals(18));
  const [unlocking, setUnlocking] = useState(false);
  const [readPages, setReadPages] = useState(new Set());

  const handleUnlock = () => {
    if (code.trim().toLowerCase() === "fatima") {
      setUnlocking(true);
      setTimeout(() => setScreen("welcome"), 900);
    } else {
      setError(true);
      setCode("");
      setTimeout(() => setError(false), 900);
    }
  };

  const openPage = (page) => {
    setActivePage(page);
    setReadPages((prev) => new Set([...prev, page.id]));
    setScreen("detail");
  };

  if (screen === "lock") {
    return (
      <div className={`lock-screen${unlocking ? " unlocking" : ""}`}>
        <div className="cosmos">
          {stars.map((s) => (
            <span
              key={s.id}
              className="star"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: s.size,
                height: s.size,
                opacity: s.opacity,
                animationDelay: `${s.delay}s`,
                animationDuration: `${s.duration}s`,
              }}
            />
          ))}
          <div className="nebula nebula-1" />
          <div className="nebula nebula-2" />
          <div className="nebula nebula-3" />
        </div>

        <div className="lock-card">
          <div className="lock-glow" />
          <div className="lock-icon-wrap">
            <div className="lock-icon-ring" />
            <span className="lock-icon">🔐</span>
          </div>

          <h1 className="lock-title">رسالة سرية</h1>
          <p className="lock-hint">
            هذا المكان محمي بسر خاص...
            <br />
            <em>هل تعرفين الكلمة السحرية؟</em>
          </p>

          <div className={`input-group${error ? " error" : ""}`}>
            <input
              className="lock-input"
              type="text"
              placeholder="✦  أدخلي الرمز السري  ✦"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
              autoComplete="off"
              dir="rtl"
            />
            {error && (
              <p className="error-text">✗ رمز خاطئ... حاولي مجدداً</p>
            )}
          </div>

          <button className="unlock-btn" onClick={handleUnlock}>
            <span>افتحي السر</span>
            <span className="btn-sparkle">✨</span>
          </button>
        </div>
      </div>
    );
  }

  if (screen === "welcome") {
    return (
      <div className="main-bg">
        {petals.map((p) => (
          <span
            key={p.id}
            className="petal"
            style={{
              left: `${p.x}%`,
              fontSize: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              "--swing": `${p.swing}px`,
            }}
          >
            🌸
          </span>
        ))}

        <div className="welcome-wrap animate-in">
          <div className="ornament">✦ ✦ ✦</div>
          <p className="welcome-prelude">إليكِ وحدكِ...</p>
          <h1 className="welcome-heading">أهلاً بكِ</h1>
          <h2 className="welcome-sub">يا أغلى الناس على قلبي</h2>
          <div className="beating-heart">💛</div>

          <div className="welcome-letter">
            <p>
              هذا الموقع صنعتُه من القلب... خصيصاً لكِ.
            </p>
            <p>
              داخله كلمات طالما أردتُ قولها، وعجزتُ عن البوح بها.
            </p>
            <p>
              اليوم، أهديكِ إياها كما هي...{" "}
              <strong>بكل صدق وبكل حب.</strong>
            </p>
          </div>

          <div className="ornament" style={{ marginBottom: "2rem" }}>
            ✦ ✦ ✦
          </div>

          <button className="cta-btn" onClick={() => setScreen("pages")}>
            <span>استمري</span>
            <span className="cta-arrow">←</span>
          </button>
        </div>
      </div>
    );
  }

  if (screen === "pages") {
    return (
      <div className="main-bg">
        {petals.map((p) => (
          <span
            key={p.id}
            className="petal"
            style={{
              left: `${p.x}%`,
              fontSize: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              "--swing": `${p.swing}px`,
            }}
          >
            🌸
          </span>
        ))}

        <div className="pages-wrap">
          <header className="pages-header">
            <div className="ornament">✦ ✦ ✦</div>
            <h2 className="pages-title">رسائلي إليكِ</h2>
            <p className="pages-sub">
              {readPages.size} / {PAGES.length} رسائل
            </p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${(readPages.size / PAGES.length) * 100}%` }}
              />
            </div>
          </header>

          <div className="cards-grid">
            {PAGES.map((page, i) => (
              <article
                key={page.id}
                className={`card ${page.color}${readPages.has(page.id) ? " card-read" : ""}`}
                style={{ animationDelay: `${i * 0.08}s` }}
                onClick={() => openPage(page)}
              >
                {readPages.has(page.id) && (
                  <div className="read-badge">قرأتُها ✓</div>
                )}
                <span className="card-emoji">{page.emoji}</span>
                <h3 className="card-title">{page.title}</h3>
                <p className="card-subtitle">{page.subtitle}</p>
                <div className="card-cta">
                  <span>اقرئي الرسالة</span>
                  <span className="card-arrow">←</span>
                </div>
              </article>
            ))}
          </div>

          {readPages.size === PAGES.length && (
            <div className="completed-msg animate-in">
              <span className="completed-icon">🌟</span>
              <p>قرأتِ كل الرسائل... شكراً يا أمي على كل شيء</p>
              <p className="completed-sub">أحبكِ إلى ما لا نهاية ❤️</p>
            </div>
          )}

          <footer className="site-footer">
            صُنع بكل الحب ❤️ من ابنكِ
          </footer>
        </div>
      </div>
    );
  }

  if (screen === "detail" && activePage) {
    return (
      <div className="main-bg">
        {petals.slice(0, 10).map((p) => (
          <span
            key={p.id}
            className="petal"
            style={{
              left: `${p.x}%`,
              fontSize: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              "--swing": `${p.swing}px`,
            }}
          >
            🌸
          </span>
        ))}

        <div className="detail-wrap animate-in">
          <button
            className="back-btn"
            onClick={() => setScreen("pages")}
          >
            ← العودة إلى الرسائل
          </button>

          <div className="detail-card">
            <span className="detail-emoji">{activePage.emoji}</span>
            <h2 className="detail-title">{activePage.title}</h2>
            <div
              className="detail-accent-bar"
              style={{ background: activePage.accent }}
            />
            <div className="detail-body">
              {activePage.message.map((line, i) =>
                line === "" ? (
                  <br key={i} />
                ) : (
                  <p key={i}>{line}</p>
                )
              )}
            </div>
            <div className="detail-sig">
              <span className="sig-line">— ابنكِ المحب</span>
              <span className="sig-heart">💛</span>
            </div>
          </div>

          <div className="detail-nav">
            {PAGES.map((p) => (
              <button
                key={p.id}
                className={`nav-dot${p.id === activePage.id ? " active" : ""}${readPages.has(p.id) ? " read" : ""}`}
                onClick={() => openPage(p)}
                title={p.title}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
