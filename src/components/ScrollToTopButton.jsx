import { useEffect, useState } from "react";

import "../styles/scroll-to-top-button.css";
import arrowUp from "../assets/arrow-up.png";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top ${visible ? "scroll-to-top--visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Повернутися догори"
      tabIndex={visible ? 0 : -1}
    >
      <img
        src={arrowUp}
        alt=""
        className="scroll-to-top__wand"
      />
    </button>
  );
}

export default ScrollToTopButton;