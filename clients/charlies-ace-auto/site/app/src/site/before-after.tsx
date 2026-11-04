import { useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, PointerEvent } from "react";

type BeforeAfterProps = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  width: number;
  height: number;
  caption: string;
};

const clamp = (n: number) => Math.min(100, Math.max(0, n));

/**
 * Before/after comparison. The "after" image fills the frame, the "before"
 * image sits on top and is clipped at --pos. Drag, click/tap, or use the
 * keyboard on the slider handle.
 */
export function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
  width,
  height,
  caption,
}: BeforeAfterProps) {
  const [pos, setPos] = useState(50);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const drag = useRef<{ id: number; startX: number; moved: boolean; touch: boolean } | null>(null);

  const posFromEvent = (clientX: number) => {
    const el = frameRef.current;
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0) return null;
    return clamp(((clientX - rect.left) / rect.width) * 100);
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const touch = e.pointerType === "touch";
    drag.current = { id: e.pointerId, startX: e.clientX, moved: !touch, touch };
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* capture is a nicety; dragging still works inside the frame */
    }
    if (!touch) {
      const next = posFromEvent(e.clientX);
      if (next !== null) setPos(next);
    }
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    if (!d.moved) {
      if (Math.abs(e.clientX - d.startX) < 4) return;
      d.moved = true;
    }
    const next = posFromEvent(e.clientX);
    if (next !== null) setPos(next);
  };

  const endDrag = (e: PointerEvent<HTMLDivElement>, commit: boolean) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    drag.current = null;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
    // A touch that never became a drag is a tap: jump to it.
    if (commit && d.touch && !d.moved) {
      const next = posFromEvent(e.clientX);
      if (next !== null) setPos(next);
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    let next: number | null = null;
    switch (e.key) {
      case "ArrowLeft":
      case "ArrowDown":
        next = pos - 5;
        break;
      case "ArrowRight":
      case "ArrowUp":
        next = pos + 5;
        break;
      case "PageDown":
        next = pos - 10;
        break;
      case "PageUp":
        next = pos + 10;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = 100;
        break;
      default:
        return;
    }
    e.preventDefault();
    setPos(clamp(next));
  };

  const rounded = Math.round(pos);
  const frameStyle = {
    "--pos": `${pos}%`,
    aspectRatio: `${width} / ${height}`,
  } as CSSProperties;

  return (
    <figure className="ba">
      <div
        ref={frameRef}
        className="ba__frame"
        style={frameStyle}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(e) => endDrag(e, true)}
        onPointerCancel={(e) => endDrag(e, false)}
      >
        <img
          className="ba__img ba__img--after"
          src={after}
          alt={afterAlt}
          width={width}
          height={height}
          loading="lazy"
          draggable={false}
        />
        <img
          className="ba__img ba__img--before"
          src={before}
          alt={beforeAlt}
          width={width}
          height={height}
          loading="lazy"
          draggable={false}
        />
        <span className="ba__label ba__label--before" aria-hidden="true">
          Before
        </span>
        <span className="ba__label ba__label--after" aria-hidden="true">
          After
        </span>
        <span className="ba__divider" aria-hidden="true" />
        <div
          className="ba__handle"
          role="slider"
          tabIndex={0}
          aria-label="Before and after comparison"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={rounded}
          aria-valuetext={`${rounded}% before`}
          onKeyDown={onKeyDown}
        >
          <span className="ba__dot" aria-hidden="true" />
        </div>
      </div>
      <figcaption className="ba__caption">{caption}</figcaption>
    </figure>
  );
}
