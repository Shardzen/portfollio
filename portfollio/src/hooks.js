import { useEffect, useRef, useState } from 'react';

// useReveal: IntersectionObserver scroll reveal
export function useReveal({ threshold = 0.18, once = true } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { setVisible(true); if (once) obs.unobserve(e.target); }
        else if (!once) setVisible(false);
      }),
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);
  return [ref, visible];
}

// useMagnetic: translates element toward cursor
export function useMagnetic(strength = 0.35) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0, tx = 0, ty = 0, x = 0, y = 0;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      x = (e.clientX - (r.left + r.width / 2)) * strength;
      y = (e.clientY - (r.top + r.height / 2)) * strength;
    };
    const onLeave = () => { x = 0; y = 0; };
    const tick = () => {
      tx += (x - tx) * 0.18;
      ty += (y - ty) * 0.18;
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener('mouseenter', onMove);
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener('mouseenter', onMove);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
      el.style.transform = '';
    };
  }, [strength]);
  return ref;
}

// useTilt: 3D tilt on hover
export function useTilt(max = 6) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0, rx = 0, ry = 0, tgtX = 0, tgtY = 0;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      tgtY = px * max * 2;
      tgtX = -py * max * 2;
    };
    const onLeave = () => { tgtX = 0; tgtY = 0; };
    const tick = () => {
      rx += (tgtX - rx) * 0.12;
      ry += (tgtY - ry) * 0.12;
      el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
      el.style.transform = '';
    };
  }, [max]);
  return ref;
}

// useScrollY: window.scrollY tracked via RAF
export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0, latest = 0;
    const tick = () => { setY(latest); raf = 0; };
    const onScroll = () => { latest = window.scrollY; if (!raf) raf = requestAnimationFrame(tick); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);
  return y;
}
