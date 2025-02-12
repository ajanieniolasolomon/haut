import React, { useState, useEffect, useRef } from "react";

const Typewriter = ({ text, speed = 50, delay = 0, onComplete }) => {
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
        setCursorVisible(false);
        if (onComplete) {
          onComplete();
        }
      }
    }, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, text, speed, onComplete]);

  useEffect(() => {
    if (delay > 0) {
      const initialTimeout = setTimeout(() => {
        setCurrentIndex(0);
        setCursorVisible(true);
      }, delay);

      return () => clearTimeout(initialTimeout);
    } else {
      setCurrentIndex(0);
      setCursorVisible(true);
    }
  }, [text, delay]);

  const formattedText = displayedText.replace(
    /90 secs/g,
    "<span class='text-secondary'>90 secs</span>"
  );

  return (
    <span className="typewriter" dangerouslySetInnerHTML={{ __html: formattedText }} />
  );
};

export default Typewriter;
