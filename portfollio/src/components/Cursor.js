import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let rx = -200, ry = -200, x = -200, y = -200;
    let raf = 0;

    const tick = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (dotRef.current)  dotRef.current.style.transform  = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => { x = e.clientX; y = e.clientY; };
    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);

    const onEnter = () => { if (ringRef.current) { ringRef.current.style.width = '72px'; ringRef.current.style.height = '72px'; } };
    const onLeave = () => { if (ringRef.current) { ringRef.current.style.width = '48px'; ringRef.current.style.height = '48px'; } };

    const addListeners = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    addListeners();
    const mo = new MutationObserver(addListeners);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} style={{ position:'fixed', top:0, left:0, width:6, height:6, borderRadius:'50%', background:'#fff', mixBlendMode:'difference', pointerEvents:'none', zIndex:99999 }} />
      <div ref={ringRef} style={{ position:'fixed', top:0, left:0, width:48, height:48, borderRadius:'50%', background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.45)', backdropFilter:'invert(100%)', mixBlendMode:'difference', pointerEvents:'none', zIndex:99998, transition:'width .25s, height .25s' }} />
    </>
  );
}
