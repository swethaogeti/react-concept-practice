import React, { useRef } from "react";
import { useEffect, useState } from "react";

const useWindowListener = (eventType, listner) => {
  useEffect(() => {
    window.addEventListener(eventType, listner);
    return () => window.removeEventListener(eventType, listner);
  }, [eventType, listner]);
};

const useIntersectionObserver = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const div = ref.current;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(div, { threshold: 1.0 });

    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
};

export const AppWindowListener = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useWindowListener("pointermove", (e) =>
    setPosition({ x: e.clientX, y: e.clientY })
  );
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "pink",
        borderRadius: "50%",
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: "none",
        left: -20,
        top: -20,
        width: 40,
        height: 40
      }}
    />
  );
};

export const AppInterSectionApi = () => {
  return (
    <>
      <LongSection />
      <Box />
      <LongSection />
      <Box />
      <LongSection />
    </>
  );
};

function Box() {
  const ref = useRef(null);

  const isIntersecting = useIntersectionObserver(ref);

  useEffect(() => {
    if (isIntersecting) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [isIntersecting]);
  return (
    <div
      ref={ref}
      style={{
        margin: 20,
        height: 100,
        width: 100,
        border: "2px solid black",
        backgroundColor: "blue"
      }}
    />
  );
}

function LongSection() {
  const items = [];
  for (let i = 0; i < 50; i++) {
    items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
  }
  return <ul>{items}</ul>;
}
