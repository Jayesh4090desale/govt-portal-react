import React, { createContext, useContext, useState, useEffect, useRef } from "react";

const AccessibilityContext = createContext();

// Four clear theme colors: Red, Orange, Yellow, Light
export const THEME_COLORS = [
  { id: "red",    label: "Red",    swatch: "#e53935", header: "#c62828", footer: "#b71c1c" },
  { id: "orange", label: "Orange", swatch: "#fb8c00", header: "#fd7e14", footer: "#e65100" },
  { id: "yellow", label: "Yellow", swatch: "#fdd835", header: "#f9a825", footer: "#f57f17" },
  { id: "light",  label: "Light",  swatch: "#eceff1", header: "#607d8b", footer: "#455a64" },
];

export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize]     = useState(100);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [themeColor, setThemeColor] = useState(THEME_COLORS[1]); // orange = default
  const utteranceRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  const increaseFont = () => setFontSize((f) => Math.min(f + 10, 150));
  const decreaseFont = () => setFontSize((f) => Math.max(f - 10, 80));
  const resetFont    = () => setFontSize(100);

  // Read page main content in Marathi. Click again to stop.
  const toggleSound = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    const mainEl  = document.getElementById("main-content");
    const rawText = mainEl ? mainEl.innerText : document.body.innerText;
    const clean   = rawText.replace(/\s+/g, " ").trim().slice(0, 4000);

    const utterance   = new SpeechSynthesisUtterance(clean);
    utterance.lang    = "mr-IN";  // Marathi
    utterance.rate    = 0.9;
    utterance.pitch   = 1;
    utterance.onend   = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  return (
    <AccessibilityContext.Provider
      value={{ fontSize, increaseFont, decreaseFont, resetFont, isSpeaking, toggleSound, themeColor, setThemeColor }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);

