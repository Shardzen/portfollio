import { useRef, useState, useEffect } from 'react';

export function useReveal({ threshold = 0.15, once = true } = {}) {
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

export function Reveal({ children, delay = 0, y = 28, threshold = 0.15, style, as: Tag = 'div', ...rest }) {
  const [ref, vis] = useReveal({ threshold });
  return (
    <Tag ref={ref} style={{
      transform: vis ? 'translateY(0)' : `translateY(${y}px)`,
      opacity: vis ? 1 : 0,
      transition: `transform 1s cubic-bezier(.2,.7,.2,1) ${delay}ms, opacity .8s ${delay}ms`,
      ...style,
    }} {...rest}>{children}</Tag>
  );
}

export function SplitWords({ children, visible, delay = 0, stagger = 55 }) {
  const words = String(children).split(/(\s+)/);
  return (
    <span>
      {words.map((w, i) =>
        /\s/.test(w) ? <span key={i}>{w}</span> : (
          <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
            <span style={{
              display: 'inline-block',
              transform: visible ? 'translateY(0)' : 'translateY(110%)',
              opacity: visible ? 1 : 0,
              transition: `transform .95s cubic-bezier(.2,.7,.2,1) ${delay + i * stagger}ms, opacity .6s ${delay + i * stagger}ms`,
            }}>{w}</span>
          </span>
        )
      )}
    </span>
  );
}
