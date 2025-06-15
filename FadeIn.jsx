import { useState, useEffect } from 'react';

const useFadeIn = (duration = 300) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInStyle = {
    opacity: isVisible ? 1 : 0,
    transition: `opacity ${duration}ms ease-in`,
  };

  return fadeInStyle;
};

export default useFadeIn;