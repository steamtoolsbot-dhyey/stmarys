import React, { useState, useEffect, useRef } from 'react';

/**
 * Typewriter — Cycling typewriter effect for rotating taglines.
 * Types out text character by character with blinking cursor.
 */
export default function Typewriter({
  strings = [],
  typingSpeed = 45,
  deletingSpeed = 25,
  pauseTime = 2500,
  className = '',
  cursorColor = 'var(--accent-primary)',
}) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [stringIndex, setStringIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef(null);

  // Cursor blink
  useEffect(() => {
    const blink = setInterval(() => setShowCursor(v => !v), 530);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (strings.length === 0) return;

    const currentString = strings[stringIndex % strings.length];

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentString.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentString.slice(0, displayText.length + 1));
        }, typingSpeed + Math.random() * 30);
      } else {
        // Pause before deleting
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentString.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % strings.length);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, stringIndex, strings, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className} aria-label={strings[stringIndex % strings.length]}>
      <span>{displayText}</span>
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '1em',
          backgroundColor: cursorColor,
          marginLeft: '2px',
          verticalAlign: 'text-bottom',
          opacity: showCursor ? 1 : 0,
          transition: 'opacity 0.1s ease',
        }}
        aria-hidden="true"
      />
    </span>
  );
}
