import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Add a slight delay to ensure mobile browsers and DOM updates register the scroll
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
