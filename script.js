:root {
  --ink: #f9f5ff;
  --muted: #b9afd0;
  --soft: #81739d;
  --purple: #8d56dc;
  --pink: #f16b9c;
  --yellow: #ffd86c;
  --background: #100c2b;
  --panel: #1c163b;
  --panel-light: #28204f;
  --line: rgba(255, 255, 255, 0.14);
  --shadow: 0 28px 80px rgba(0, 0, 0, 0.34);
  --serif: "Playfair Display", Georgia, serif;
  --sans: "DM Sans", Arial, sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  min-width: 320px;
  margin: 0;
  overflow-x: hidden;
  color: var(--ink);
  background:
    radial-gradient(circle at 50% -10%, rgba(126, 76, 202, 0.3), transparent 33rem),
    var(--background);
  font-family: var(--sans);
  line-height: 1.55;
}

body::before {
  position: fixed;
  inset: 0;
  z-index: -2;
  pointer-events: none;
  content: "";
  opacity: 0.22;
  background-image: radial-gradient(rgba(255, 255, 255, 0.5) 0.7px, transparent 0.7px);
  background-size: 37px 37px;
}

button,
input {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

button {
  cursor: pointer;
}

[hidden] {
  display: none !important;
}

.star-field {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}

.star {
  position: absolute;
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #fff;
  opacity: 0.55;
  animation: twinkle 4s ease-in-out infinite;
}

.star::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 2px;
  content: "";
  background: currentColor;
  transform: translate(-50%, -50%);
  opacity: 0.45;
}

.star-1 { top: 12%; left: 9%; color: #eec4ff; animation-delay: -1s; }
.star-2 { top: 18%; right: 14%; color: #ffd86c; animation-delay: -3s; }
.star-3 { top: 52%; left: 5%; color: #c4bbff; animation-delay: -2s; }
.star-4 { top: 62%; right: 9%; color: #ffc5e3; animation-delay: -0.5s; }
.star-5 { top: 82%; left: 17%; color: #fff; animation-delay: -2.5s; }
.star-6 { top: 88%; right: 24%; color: #ffd86c; animation-delay: -1.5s; }

.section-shell {
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
}

.welcome {
  display: flex;
  min-height: 100svh;
  padding: 32px 0 72px;
  flex-direction: column;
  align-items: center;
}

.welcome-top {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: var(--muted);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.brand {
  color: var(--ink);
}

.brand-mark {
  display: inline-grid;
  width: 25px;
  height: 25px;
  margin-right: 8px;
  border: 1px solid rgba(255, 216, 108, 0.7);
  border-radius: 50%;
  color: var(--yellow);
  place-items: center;
  font-size: 0.75rem;
}

.welcome-copy {
  max-width: 650px;
  margin: auto auto 2.2rem;
  text-align: center;
}

.eyebrow {
  margin: 0 0 10px;
  color: var(--pink);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.welcome h1,
.video-copy h2,
.section-heading h2,
.message-side h2,
.closing-card h2 {
  margin: 0;
  font-family: var(--serif);
  font-weight: 600;
  letter-spacing: -0.045em;
  line-height: 0.98;
}

.welcome h1 {
  font-size: clamp(3.3rem, 8vw, 6.8rem);
}

h1 em,
h2 em {
  color: var(--pink);
  font-weight: 600;
}

.intro {
  max-width: 430px;
  margin: 22px auto 0;
  color: var(--muted);
  font-size: 1rem;
}

.envelope-stage {
  display: grid;
  width: 100%;
  min-height: 255px;
  place-items: center;
  perspective: 1000px;
}

.envelope {
  position: relative;
  width: min(360px, 78vw);
  aspect-ratio: 1.58;
  filter: drop-shadow(0 30px 26px rgba(0, 0, 0, 0.28));
  transform-style: preserve-3d;
}

.envelope::after {
  position: absolute;
  right: 10%;
  bottom: -24px;
  left: 10%;
  height: 32px;
  z-index: -1;
  content: "";
  border-radius: 50%;
  background: #060412;
  filter: blur(12px);
  opacity: 0.75;
}

.envelope-back,
.envelope-paper,
.envelope-flap,
.envelope-front {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 14px;
}

.envelope-back {
  z-index: 1;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.12), transparent 46%),
    linear-gradient(135deg, #6637a0, #c75991);
}

.envelope-paper {
  display: flex;
  z-index: 2;
  padding: 25px 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #36204d;
  background: #fff4dd;
  text-align: center;
  transform: translateY(57%) rotate(-1deg);
  transition: transform 850ms cubic-bezier(0.2, 0.85, 0.2, 1);
}

.paper-label {
  margin-bottom: 10px;
  color: #a34a72;
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.2em;
}

.envelope-paper strong {
  font-family: var(--serif);
  font-size: clamp(1.15rem, 3vw, 1.6rem);
  line-height: 1.1;
}

.paper-signature {
  margin-top: 14px;
  color: #8f5470;
  font-size: 0.8rem;
}

.envelope-flap {
  z-index: 5;
  border-radius: 14px 14px 0 0;
  background: linear-gradient(145deg, #a95ad0, #ed709c);
  clip-path: polygon(0 0, 100% 0, 50% 73%);
  transform-origin: top center;
  transition: transform 850ms cubic-bezier(0.2, 0.85, 0.2, 1), z-index 0ms 300ms;
}

.envelope-front {
  z-index: 4;
  border-radius: 0 0 14px 14px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.09), transparent 50%),
    linear-gradient(145deg, #713ea9, #c25891);
  clip-path: polygon(0 0, 50% 54%, 100% 0, 100% 100%, 0 100%);
}

.wax-seal {
  position: absolute;
  top: 48%;
  left: 50%;
  z-index: 8;
  display: grid;
  width: 62px;
  height: 62px;
  padding: 0;
  border: 6px solid rgba(255, 240, 220, 0.5);
  border-radius: 50%;
  color: #fff1dc;
  background: #a73366;
  box-shadow: 0 8px 18px rgba(58, 10, 54, 0.32), inset 0 0 0 2px rgba(255, 255, 255, 0.16);
  place-items: center;
  font-size: 1.35rem;
  transform: translate(-50%, -50%);
  transition: transform 220ms ease, filter 220ms ease, opacity 400ms ease;
}

.wax-seal:hover,
.wax-seal:focus-visible {
  filter: brightness(1.12);
  transform: translate(-50%, -50%) scale(1.07) rotate(-5deg);
}

.wax-seal:disabled {
  cursor: default;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.65);
}

.envelope.opened .envelope-paper {
  z-index: 6;
  transform: translateY(-38%) rotate(-1deg);
}

.envelope.opened .envelope-flap {
  z-index: 1;
  transform: rotateX(180deg);
}

.seal-hint {
  min-height: 28px;
  margin: 18px 0 0;
  color: var(--muted);
  font-size: 0.82rem;
  text-align: center;
  transition: color 250ms ease;
}

.password-panel {
  width: min(100%, 520px);
  margin-top: 28px;
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: rgba(28, 22, 59, 0.88);
  box-shadow: var(--shadow);
  animation: rise 650ms both;
}

.password-heading {
  display: flex;
  gap: 13px;
  align-items: flex-start;
  margin-bottom: 18px;
}

.mini-icon,
.success-icon {
  display: grid;
  flex: 0 0 auto;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  color: #4f3374;
  background: var(--yellow);
  place-items: center;
  font-size: 0.85rem;
}

.password-panel h2 {
  margin: 0;
  font-family: var(--serif);
  font-size: 1.65rem;
  letter-spacing: -0.03em;
}

.password-panel label {
  display: block;
  margin-bottom: 7px;
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.password-row {
  display: flex;
  gap: 9px;
}

.password-row input {
  min-width: 0;
  flex: 1;
  padding: 13px 15px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 11px;
  outline: none;
  color: var(--ink);
  background: rgba(0, 0, 0, 0.18);
  letter-spacing: 0.24em;
}

.password-row input:focus {
  border-color: var(--pink);
  box-shadow: 0 0 0 3px rgba(241, 107, 156, 0.15);
}

.password-message {
  min-height: 22px;
  margin: 9px 0 0;
  color: #ff9dbd;
  font-size: 0.8rem;
}

.button {
  display: inline-flex;
  min-height: 44px;
  padding: 11px 18px;
  border: 1px solid transparent;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  gap: 9px;
  font-size: 0.78rem;
  font-weight: 700;
  text-decoration: none;
  transition: transform 200ms ease, background 200ms ease, border-color 200ms ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-2px);
}

.button-primary {
  color: #321a49;
  background: var(--yellow);
}

.button-primary:hover,
.button-primary:focus-visible {
  background: #ffe49a;
}

.button-outline,
.button-ghost {
  color: var(--ink);
  border-color: rgba(255, 255, 255, 0.25);
  background: transparent;
}

.button-outline:hover,
.button-outline:focus-visible,
.button-ghost:hover,
.button-ghost:focus-visible {
  border-color: var(--pink);
  background: rgba(241, 107, 156, 0.1);
}

.video-section {
  min-height: 100svh;
  padding-top: 90px;
  padding-bottom: 100px;
}

.video-layout {
  display: grid;
  min-height: 500px;
  grid-template-columns: minmax(230px, 0.75fr) minmax(0, 1.25fr);
  gap: clamp(28px, 7vw, 90px);
  align-items: center;
}

.video-copy h2 {
  font-size: clamp(3rem, 6.5vw, 6.3rem);
}

.video-copy > p:not(.eyebrow) {
  max-width: 360px;
  margin: 25px 0;
  color: var(--muted);
}

.video-status {
  display: inline-flex;
  max-width: 100%;
  padding: 9px 13px;
  border: 1px solid var(--line);
  border-radius: 999px;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 0.72rem;
}

.status-dot,
.loading-dot {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--pink);
  box-shadow: 0 0 0 5px rgba(241, 107, 156, 0.13);
  animation: pulse 1.8s ease-in-out infinite;
}

.video-stage {
  position: relative;
  display: grid;
  min-height: 360px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: #080617;
  box-shadow: var(--shadow);
  place-items: center;
}

.video-stage video {
  display: block;
  width: 100%;
  max-height: 72svh;
  background: #080617;
  object-fit: contain;
}

.video-loading {
  position: absolute;
  z-index: 2;
  display: flex;
  padding: 12px 17px;
  border: 1px solid var(--line);
  border-radius: 999px;
  align-items: center;
  gap: 10px;
  color: var(--muted);
  background: rgba(16, 12, 43, 0.84);
  font-size: 0.78rem;
}

.play-fallback {
  position: absolute;
  z-index: 3;
  bottom: 24px;
}

.continue-button {
  display: flex;
  width: fit-content;
  margin: 46px auto 0;
}

.post-video {
  padding-bottom: 30px;
}

.message-section,
.memories-section,
.surprise-section {
  padding-top: 100px;
  padding-bottom: 100px;
}

.section-number {
  margin-bottom: 22px;
  color: var(--pink);
  font-size: 0.69rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.section-number span {
  color: var(--soft);
}

.message-card {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 40px;
  padding: clamp(27px, 6vw, 65px);
  border: 1px solid var(--line);
  border-radius: 26px;
  background:
    radial-gradient(circle at 90% 0%, rgba(241, 107, 156, 0.22), transparent 20rem),
    var(--panel);
  box-shadow: var(--shadow);
}

.message-side h2 {
  font-size: clamp(2.5rem, 5vw, 5rem);
}

.message-body {
  display: flex;
  min-height: 200px;
  padding-left: 35px;
  border-left: 1px solid rgba(255, 255, 255, 0.18);
  flex-direction: column;
  justify-content: center;
}

.message-body p {
  max-width: 490px;
  color: var(--muted);
  font-size: 1.05rem;
}

.message-body .signature {
  margin-top: auto;
  color: var(--ink);
  font-family: var(--serif);
  font-size: 1.15rem;
}

.signature strong {
  color: var(--pink);
  font-weight: 600;
}

.section-heading {
  display: flex;
  margin-bottom: 45px;
  justify-content: space-between;
  gap: 40px;
  align-items: end;
}

.section-heading h2 {
  font-size: clamp(2.8rem, 6vw, 6rem);
}

.section-heading > p {
  max-width: 280px;
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 0.88rem;
}

.puzzle-area {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(220px, 0.65fr);
  gap: 38px;
  align-items: center;
}

.puzzle-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.puzzle-card {
  position: relative;
  display: grid;
  min-height: 160px;
  overflow: hidden;
  padding: 0;
  border: 1px solid rgba(255, 216, 108, 0.35);
  border-radius: 16px;
  color: rgba(255, 255, 255, 0.75);
  place-items: center;
  font-family: var(--serif);
  font-size: 3rem;
  background: var(--card-color, #7953b5);
  box-shadow: 0 18px 30px rgba(0, 0, 0, 0.2);
  transition: transform 220ms ease, filter 220ms ease, opacity 320ms ease;
}

.puzzle-card::after {
  position: absolute;
  inset: 0;
  content: "";
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), transparent 48%);
}

.puzzle-card:hover:not(:disabled),
.puzzle-card:focus-visible {
  filter: brightness(1.12);
  transform: translateY(-4px);
}

.puzzle-card:disabled {
  cursor: default;
}

.puzzle-card.is-picked {
  border-color: var(--yellow);
  box-shadow: 0 0 0 3px rgba(255, 216, 108, 0.13), 0 18px 30px rgba(0, 0, 0, 0.2);
  transform: scale(0.98);
}

.puzzle-card.is-muted {
  opacity: 0.35;
}

.puzzle-side {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 16px;
}

.hint-card {
  display: flex;
  padding: 17px;
  border-left: 1px solid var(--pink);
  color: var(--muted);
  background: rgba(40, 32, 79, 0.65);
  gap: 10px;
  font-size: 0.82rem;
}

.hint-icon {
  color: var(--yellow);
}

.puzzle-side .button {
  width: fit-content;
}

.reveal-panel {
  display: grid;
  min-height: 0;
  margin-top: 50px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 25px;
  text-align: center;
  transition: min-height 500ms ease, padding 500ms ease, background 500ms ease, border-color 500ms ease;
}

.reveal-panel.is-visible {
  min-height: 400px;
  padding: 52px 20px;
  border-color: var(--line);
  background: rgba(28, 22, 59, 0.68);
}

.reveal-content {
  display: flex;
  width: min(100%, 650px);
  margin: auto;
  flex-direction: column;
  align-items: center;
}

.success-icon {
  width: 42px;
  height: 42px;
  margin-bottom: 15px;
  animation: pop 600ms both;
}

.reveal-panel h3 {
  margin: 0 0 22px;
  font-family: var(--serif);
  font-size: clamp(1.65rem, 3vw, 2.4rem);
  font-weight: 600;
}

.photo-frame {
  position: relative;
  display: grid;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(130deg, #7953b5, #db6798);
  place-items: center;
}

.photo-frame img {
  width: 100%;
  height: 100%;
  opacity: 0;
  object-fit: cover;
  transition: opacity 350ms ease;
}

.photo-frame.photo-loaded img {
  opacity: 1;
}

.photo-placeholder {
  position: absolute;
  padding: 20px;
  color: #fff;
  font-size: 0.8rem;
}

.photo-frame.photo-loaded .photo-placeholder {
  display: none;
}

code {
  color: #ffd5e5;
  font-family: monospace;
  font-size: 0.9em;
}

.asset-note {
  margin: 10px 0 0;
  color: var(--soft);
  font-size: 0.75rem;
}

.closing-card {
  padding: clamp(28px, 7vw, 75px);
  border: 1px solid var(--line);
  border-radius: 26px;
  background:
    radial-gradient(circle at 100% 100%, rgba(141, 86, 220, 0.35), transparent 25rem),
    var(--panel);
}

.closing-card h2 {
  max-width: 760px;
  font-size: clamp(2.8rem, 7vw, 6.5rem);
}

.closing-card > p:not(.eyebrow) {
  max-width: 400px;
  margin: 25px 0;
  color: var(--muted);
}

footer {
  padding: 20px 24px 42px;
  color: var(--soft);
  font-size: 0.75rem;
  text-align: center;
}

footer span {
  color: var(--yellow);
}

.confetti-layer {
  position: fixed;
  inset: 0;
  z-index: 20;
  pointer-events: none;
  overflow: hidden;
}

.confetti {
  position: absolute;
  top: -20px;
  width: 8px;
  height: 15px;
  animation: fall 2.8s linear forwards;
}

.reveal-on-scroll {
  opacity: 0;
  transform: translateY(25px);
  transition: opacity 700ms ease, transform 700ms ease;
}

.reveal-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes twinkle {
  0%, 100% { opacity: 0.25; transform: scale(0.75); }
  50% { opacity: 0.9; transform: scale(1.35); }
}

@keyframes pulse {
  0%, 100% { transform: scale(0.8); opacity: 0.65; }
  50% { transform: scale(1.25); opacity: 1; }
}

@keyframes rise {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pop {
  0% { opacity: 0; transform: scale(0.6) rotate(-15deg); }
  75% { transform: scale(1.12) rotate(4deg); }
  100% { opacity: 1; transform: scale(1) rotate(0); }
}

@keyframes fall {
  0% { opacity: 1; transform: translate3d(0, -20px, 0) rotate(0); }
  100% { opacity: 0; transform: translate3d(var(--drift), 105vh, 0) rotate(500deg); }
}

@media (max-width: 760px) {
  .section-shell {
    width: min(100% - 32px, 620px);
  }

  .welcome {
    padding-top: 20px;
  }

  .welcome-top {
    font-size: 0.58rem;
  }

  .brand-mark {
    width: 21px;
    height: 21px;
    margin-right: 4px;
  }

  .welcome-copy {
    margin-top: 65px;
    margin-bottom: 1.5rem;
  }

  .welcome h1 {
    font-size: clamp(2.65rem, 14vw, 4.4rem);
  }

  .intro {
    margin-top: 17px;
    font-size: 0.88rem;
  }

  .envelope-stage {
    min-height: 200px;
  }

  .password-panel {
    padding: 18px;
  }

  .password-row {
    flex-direction: column;
  }

  .password-row .button {
    width: 100%;
  }

  .video-section {
    padding-top: 52px;
  }

  .video-layout,
  .message-card,
  .puzzle-area {
    grid-template-columns: 1fr;
  }

  .video-layout {
    min-height: 0;
    gap: 33px;
  }

  .video-copy h2 {
    font-size: clamp(2.9rem, 15vw, 5rem);
  }

  .video-stage {
    min-height: 300px;
    border-radius: 18px;
  }

  .message-card {
    gap: 28px;
  }

  .message-body {
    min-height: 0;
    padding-top: 25px;
    padding-left: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.18);
    border-left: 0;
  }

  .section-heading {
    display: block;
  }

  .section-heading > p {
    margin-top: 20px;
  }

  .puzzle-card {
    min-height: 120px;
  }

  .puzzle-side {
    align-items: flex-start;
  }

  .message-section,
  .memories-section,
  .surprise-section {
    padding-top: 70px;
    padding-bottom: 70px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
