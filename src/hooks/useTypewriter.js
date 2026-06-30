import { useState, useEffect, useRef } from 'react';

export function useTypewriter(phrases, typeMs = 75, deleteMs = 38, pauseType = 1600, pauseDelete = 350) {
  const [text, setText] = useState('');
  const pi = useRef(0);
  const ci = useRef(0);
  const del = useRef(false);

  useEffect(() => {
    let t;
    const tick = () => {
      const cur = phrases[pi.current];
      if (!del.current) {
        ci.current += 1;
        setText(cur.substring(0, ci.current));
        if (ci.current === cur.length) { del.current = true; t = setTimeout(tick, pauseType); return; }
        t = setTimeout(tick, typeMs);
      } else {
        ci.current -= 1;
        setText(cur.substring(0, ci.current));
        if (ci.current === 0) {
          del.current = false;
          pi.current = (pi.current + 1) % phrases.length;
          t = setTimeout(tick, pauseDelete);
          return;
        }
        t = setTimeout(tick, deleteMs);
      }
    };
    t = setTimeout(tick, typeMs);
    return () => clearTimeout(t);
  }, [phrases, typeMs, deleteMs, pauseType, pauseDelete]);

  return text;
}
