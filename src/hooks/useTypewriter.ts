import { useEffect, useState } from 'react';

export const useTypewriter = (
  texts: string[],
  typingSpeed: number = 50,
  deletingSpeed: number = 30,
  delayBetweenTexts: number = 2000
) => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Finished typing, wait before deleting
          setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayedText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return displayedText;
};
