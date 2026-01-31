import { CSSProperties, useEffect, useRef, useState } from "react";

import { cursorTrail } from "@/utility/cursor-trail";

export interface CursorTrailCanvasProps {
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export default function CursorTrailCanvas(props: CursorTrailCanvasProps) {
  const refCanvas = useRef<HTMLCanvasElement>(null);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(true);

  useEffect(() => {
    // Check if device is mobile/tablet (screen width < 1024px or has touch)
    const checkDevice = () => {
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024;
      setIsMobileOrTablet(hasTouch || isSmallScreen);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  useEffect(() => {
    if (isMobileOrTablet) return;

    const { cleanUp, renderTrailCursor } = cursorTrail({
      ref: refCanvas,
      color: props.color,
    });
    renderTrailCursor();

    return () => {
      cleanUp();
    };
  }, [props.color, isMobileOrTablet]);

  if (isMobileOrTablet) return null;

  return (
    <canvas
      ref={refCanvas}
      className={props.className}
      style={props.style}
    ></canvas>
  );
}
