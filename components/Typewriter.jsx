/* eslint-disable react/prop-types */
"use client"
import React, { useState, useEffect, useRef } from "react";

const Typewriter = ({ text, speed = 50, delay = 0, onComplete }) => {
  // Add onComplete callback
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        clearTimeout(timeoutRef.current);
        setCursorVisible(false); // Hide cursor when typing is done
        if (onComplete) {
          onComplete(); // Call the callback when typing is finished
        }
      }
    }, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, text, speed, onComplete]); // Add onComplete to dependency array

  useEffect(() => {
    if (delay > 0) {
      const initialTimeout = setTimeout(() => {
        setCurrentIndex(0); // Start typing after the delay
        setCursorVisible(true); // Show cursor after the delay
      }, delay);

      return () => clearTimeout(initialTimeout);
    } else {
      setCurrentIndex(0); // Start typing immediately
      setCursorVisible(true); // Show cursor immediately
    }
  }, [text, delay]);

  return (
    <span className="typewriter">
      {displayedText}
      {cursorVisible && <span className="cursor">|</span>}
    </span>
  );
};

export default Typewriter;