import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.08, ease: 'power2.out' });
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      gsap.set(ring, { x: ringX, y: ringY });
      requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', onMove);
    const frame = requestAnimationFrame(animateRing);

    const onEnter = () => {
      gsap.to(dot, { scale: 3, opacity: 0.4, duration: 0.2 });
      gsap.to(ring, { scale: 1.6, borderColor: 'rgba(139,92,246,0.5)', duration: 0.25 });
    };
    const onLeave = () => {
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.2 });
      gsap.to(ring, { scale: 1, borderColor: 'rgba(0,212,255,0.35)', duration: 0.25 });
    };

    const addListeners = () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default Cursor;
