import React, { useState } from "react";
import { useAccessibility, THEME_COLORS } from "../context/AccessibilityContext";
import "./AccessibilityToolbar.css";

const AccessibilityToolbar = () => {
  const {
    increaseFont,
    decreaseFont,
    resetFont,
    isSpeaking,
    toggleSound,
    themeColor,
    setThemeColor,
  } = useAccessibility();

  const [fontOpen, setFontOpen] = useState(false);

  return (
    <div className="acc-toolbar">
      {/* Skip to main content */}
      <a href="#main-content" className="acc-skip">Skip to main content</a>

      {/* ── 1. SOUND ── */}
      <button
        id="acc-sound-btn"
        className={`acc-btn ${isSpeaking ? "acc-btn--active" : ""}`}
        onClick={toggleSound}
        title={isSpeaking ? "वाचणे थांबवा (Stop reading)" : "पान मराठीत वाचा (Read in Marathi)"}
        aria-label="Toggle Marathi text to speech"
      >
        {isSpeaking ? (
          /* Stop icon when speaking */
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <rect x="5" y="5" width="14" height="14" rx="2" />
          </svg>
        ) : (
          /* Speaker icon when idle */
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
        {isSpeaking && <span className="acc-pulse" />}
      </button>

      <div className="acc-divider" />

      {/* ── 2. FONT SIZE ── */}
      <div className="acc-font-group">
        <button
          id="acc-font-btn"
          className="acc-btn acc-font-label"
          onClick={() => setFontOpen((o) => !o)}
          title="Font size"
          aria-label="Font size options"
        >
          <span style={{ fontWeight: 700, fontSize: "15px" }}>A</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: 2 }}>
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>

        {fontOpen && (
          <div className="acc-font-dropdown">
            <button id="acc-font-increase" className="acc-dropdown-btn" onClick={() => { increaseFont(); setFontOpen(false); }}>
              <span style={{ fontSize: "18px", fontWeight: 700 }}>A+</span>
              <span className="acc-dropdown-label">Increase</span>
            </button>
            <button id="acc-font-decrease" className="acc-dropdown-btn" onClick={() => { decreaseFont(); setFontOpen(false); }}>
              <span style={{ fontSize: "13px", fontWeight: 700 }}>A−</span>
              <span className="acc-dropdown-label">Decrease</span>
            </button>
            <button id="acc-font-reset" className="acc-dropdown-btn" onClick={() => { resetFont(); setFontOpen(false); }}>
              <span style={{ fontSize: "15px", fontWeight: 700 }}>A</span>
              <span className="acc-dropdown-label">Reset</span>
            </button>
          </div>
        )}
      </div>

      <div className="acc-divider" />

      {/* ── 3. CONTRAST ── */}
      <button id="acc-contrast-btn" className="acc-btn" title="High Contrast" aria-label="High contrast">
        <svg width="20" height="20" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 2 A10 10 0 0 1 12 22 Z" fill="currentColor" />
        </svg>
      </button>

      <div className="acc-divider" />

      {/* ── 4. SITEMAP ── */}
      <button id="acc-sitemap-btn" className="acc-btn" title="Sitemap" aria-label="Sitemap">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="1" width="6" height="4" rx="1" />
          <rect x="1" y="19" width="6" height="4" rx="1" />
          <rect x="9" y="19" width="6" height="4" rx="1" />
          <rect x="17" y="19" width="6" height="4" rx="1" />
          <line x1="12" y1="5" x2="12" y2="12" />
          <line x1="4" y1="19" x2="4" y2="15.5" />
          <line x1="12" y1="19" x2="12" y2="12" />
          <line x1="20" y1="19" x2="20" y2="15.5" />
          <line x1="4" y1="15.5" x2="20" y2="15.5" />
        </svg>
      </button>

      <div className="acc-divider" />

      {/* ── 5. SOCIAL ── */}
      <button id="acc-social-btn" className="acc-btn" title="Social Links" aria-label="Social Links">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: 2 }}>
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>

      <div className="acc-divider" />

      {/* ── 6. COLOR SWATCHES: Red | Orange | Yellow | Light ── */}
      <div className="acc-colors" title="Change header & footer colour">
        {THEME_COLORS.map((theme) => (
          <button
            key={theme.id}
            id={`acc-color-${theme.id}`}
            className={`acc-swatch ${themeColor.id === theme.id ? "acc-swatch--active" : ""}`}
            style={{ backgroundColor: theme.swatch }}
            onClick={() => setThemeColor(theme)}
            title={`${theme.label} theme`}
            aria-label={`${theme.label} colour theme`}
          />
        ))}
      </div>

      <div className="acc-divider" />

      {/* ── 7. LANGUAGE A/अ ── */}
      <button id="acc-lang-btn" className="acc-btn acc-lang" title="Toggle Language" aria-label="Toggle language">
        <span style={{ fontWeight: 700, fontSize: "13px" }}>A</span>
        <span style={{ fontWeight: 700, fontSize: "12px", fontFamily: "serif" }}>अ</span>
      </button>
    </div>
  );
};

export default AccessibilityToolbar;
