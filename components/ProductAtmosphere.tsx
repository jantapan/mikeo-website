"use client";

import Image from "next/image";
import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { useEffect, useRef } from "react";
import type { ProductEffect } from "@/lib/catalog";
import styles from "./ProductAtmosphere.module.css";

type AtmosphereEffect = ProductEffect | "portfolio";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  phase: number;
  alpha: number;
};

const palettes: Record<AtmosphereEffect, [string, string, string]> = {
  "veggie-bloom": ["#17612f", "#88b93f", "#f3cc39"],
  "pistachio-orbit": ["#356c2b", "#b7ca52", "#c8954f"],
  "birdnest-steam": ["#8c4d24", "#d6aa62", "#fff3cd"],
  "matcha-mist": ["#537922", "#9fbc47", "#e2ecad"],
  "cocoa-splash": ["#4b1f12", "#a8552c", "#f0b96f"],
  "tomato-burst": ["#b51f24", "#f06b3d", "#ffca5a"],
  "citrus-burst": ["#e74d17", "#ff8a20", "#ffd452"],
  "sakura-fall": ["#c83670", "#ef83aa", "#ffd0df"],
  "berry-glow": ["#7b174c", "#cf477b", "#f6a7c3"],
  "apple-crisp": ["#397125", "#89b83f", "#e9d74c"],
  "berry-fiber": ["#4f285f", "#b14075", "#f1a8c9"],
  "glowy-spark": ["#dd315d", "#ff879d", "#ffe0a3"],
  "fitty-fresh": ["#ef5f71", "#f6a4b3", "#fff1cb"],
  portfolio: ["#e30613", "#ef4860", "#f4b34a"],
};

const atmosphereArtwork: Partial<Record<AtmosphereEffect, string>> = {
  "veggie-bloom": "/images/product-atmosphere/veggie-bloom.webp",
  "pistachio-orbit": "/images/product-atmosphere/pistachio-orbit.webp",
  "birdnest-steam": "/images/product-atmosphere/birdnest-steam.webp",
  "matcha-mist": "/images/product-atmosphere/matcha-mist.webp",
  "cocoa-splash": "/images/product-atmosphere/cocoa-splash.webp",
  "tomato-burst": "/images/product-atmosphere/tomato-burst.webp",
  "citrus-burst": "/images/product-atmosphere/citrus-burst.webp",
  "sakura-fall": "/images/product-atmosphere/sakura-fall.webp",
  "berry-glow": "/images/product-atmosphere/berry-orbit.webp",
  "apple-crisp": "/images/product-atmosphere/apple-crisp.webp",
  "berry-fiber": "/images/product-atmosphere/berry-orbit.webp",
  "glowy-spark": "/images/product-atmosphere/berry-orbit.webp",
  "fitty-fresh": "/images/product-atmosphere/berry-orbit.webp",
};

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, index) => ({
    x: ((index * 37) % 101) / 100,
    y: ((index * 61) % 97) / 96,
    vx: 0.000035 + (index % 5) * 0.000012,
    vy: 0.000028 + (index % 7) * 0.000008,
    size: 3 + (index % 6) * 1.6,
    phase: index * 0.73,
    alpha: 0.28 + (index % 5) * 0.1,
  }));
}

function drawLeaf(context: CanvasRenderingContext2D, size: number) {
  context.beginPath();
  context.moveTo(-size, 0);
  context.quadraticCurveTo(0, -size, size, 0);
  context.quadraticCurveTo(0, size * 0.62, -size, 0);
  context.fill();
}

function drawPetal(context: CanvasRenderingContext2D, size: number) {
  context.beginPath();
  context.moveTo(0, -size);
  context.bezierCurveTo(size, -size * 0.4, size * 0.75, size * 0.75, 0, size);
  context.bezierCurveTo(-size * 0.75, size * 0.75, -size, -size * 0.4, 0, -size);
  context.fill();
}

function drawStar(context: CanvasRenderingContext2D, size: number) {
  context.beginPath();
  for (let index = 0; index < 8; index += 1) {
    const radius = index % 2 === 0 ? size : size * 0.26;
    const angle = index * Math.PI / 4 - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (index === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  }
  context.closePath();
  context.fill();
}

function drawAtmosphere(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  particles: Particle[],
  effect: AtmosphereEffect,
  elapsed: number,
  pointer: { x: number; y: number },
  burst: number,
) {
  const [primary, secondary, highlight] = palettes[effect];
  context.clearRect(0, 0, width, height);

  const glow = context.createRadialGradient(
    width * (0.5 + pointer.x * 0.05),
    height * (0.48 + pointer.y * 0.05),
    0,
    width * 0.5,
    height * 0.5,
    Math.max(width, height) * 0.66,
  );
  glow.addColorStop(0, `${secondary}24`);
  glow.addColorStop(0.5, `${primary}12`);
  glow.addColorStop(1, `${primary}00`);
  context.fillStyle = glow;
  context.fillRect(0, 0, width, height);

  if (effect === "birdnest-steam") {
    context.lineWidth = Math.max(1.5, width / 420);
    for (let index = 0; index < 5; index += 1) {
      const phase = elapsed * 0.00045 + index * 1.2;
      const x = width * (0.3 + index * 0.1);
      context.strokeStyle = index % 2 ? `${highlight}78` : `${secondary}70`;
      context.beginPath();
      context.moveTo(x + Math.sin(phase) * 10, height * 0.78);
      context.bezierCurveTo(
        x - 34,
        height * 0.58,
        x + 42 + Math.cos(phase) * 12,
        height * 0.38,
        x + Math.sin(phase * 1.4) * 22,
        height * 0.08,
      );
      context.stroke();
    }
  }

  particles.forEach((particle, index) => {
    const time = elapsed * 0.00018;
    const pulse = 1 + Math.sin(time * 3 + particle.phase) * 0.14 + burst * 0.65;
    let x = ((particle.x + elapsed * particle.vx) % 1.18 - 0.09) * width;
    let y = ((particle.y + elapsed * particle.vy) % 1.18 - 0.09) * height;

    if (effect === "sakura-fall") {
      x += Math.sin(time * 4 + particle.phase) * 34;
      y = ((particle.y + elapsed * particle.vy * 2.2) % 1.16 - 0.08) * height;
    } else if (effect === "pistachio-orbit") {
      const radiusX = width * (0.25 + (index % 4) * 0.035);
      const radiusY = height * (0.2 + (index % 3) * 0.035);
      const angle = time * (0.7 + (index % 4) * 0.12) + particle.phase;
      x = width * 0.5 + Math.cos(angle) * radiusX;
      y = height * 0.5 + Math.sin(angle) * radiusY;
    } else if (effect === "citrus-burst" || effect === "tomato-burst") {
      const angle = particle.phase + time * 0.35;
      const radius = (0.12 + ((particle.y + time * 0.05) % 0.55) + burst * 0.16) * Math.min(width, height);
      x = width * 0.5 + Math.cos(angle) * radius;
      y = height * 0.52 + Math.sin(angle) * radius;
    } else if (effect === "cocoa-splash") {
      x += Math.sin(time * 2.2 + particle.phase) * 26;
      y += Math.cos(time * 1.7 + particle.phase) * 18;
    } else if (effect === "matcha-mist") {
      x += Math.sin(time + particle.phase) * 42;
      y -= elapsed * particle.vy * height * 0.42;
    }

    x += pointer.x * (12 + index % 5);
    y += pointer.y * (8 + index % 4);
    const size = particle.size * pulse;

    context.save();
    context.translate(x, y);
    context.rotate(time + particle.phase);
    context.globalAlpha = particle.alpha;
    context.fillStyle = index % 3 === 0 ? highlight : index % 2 === 0 ? secondary : primary;
    context.strokeStyle = context.fillStyle;

    if (effect === "sakura-fall") {
      drawPetal(context, size);
    } else if (effect === "veggie-bloom" || effect === "apple-crisp" || effect === "fitty-fresh") {
      drawLeaf(context, size * 1.4);
    } else if (effect === "pistachio-orbit") {
      context.scale(1.65, 0.72);
      context.beginPath();
      context.arc(0, 0, size, 0, Math.PI * 2);
      context.fill();
    } else if (effect === "citrus-burst") {
      context.lineWidth = Math.max(1.5, size * 0.22);
      context.beginPath();
      context.arc(0, 0, size * 1.4, 0.15, Math.PI * 1.55);
      context.stroke();
    } else if (effect === "cocoa-splash") {
      context.beginPath();
      context.ellipse(0, 0, size * 0.72, size * 1.55, 0, 0, Math.PI * 2);
      context.fill();
      if (index % 4 === 0) {
        context.globalAlpha *= 0.55;
        context.lineWidth = 1.5;
        context.beginPath();
        context.arc(0, 0, size * 2.7, 0, Math.PI * 2);
        context.stroke();
      }
    } else if (effect === "glowy-spark") {
      drawStar(context, size * 1.6);
    } else if (effect === "berry-fiber") {
      context.lineWidth = Math.max(1, size * 0.18);
      context.beginPath();
      context.moveTo(-size * 2, 0);
      context.bezierCurveTo(-size, -size * 2, size, size * 2, size * 2, 0);
      context.stroke();
    } else {
      context.beginPath();
      context.arc(0, 0, size, 0, Math.PI * 2);
      context.fill();
    }
    context.restore();
  });
}

export function ProductAtmosphere({
  effect,
  label,
  hint,
  children,
  showControl = true,
  className = "",
}: {
  effect: AtmosphereEffect;
  label: string;
  hint?: string;
  children: ReactNode;
  showControl?: boolean;
  className?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const visibleRef = useRef(true);
  const reducedMotionRef = useRef(false);
  const pointerRef = useRef({ x: 0, y: 0 });
  const burstUntilRef = useRef(0);
  const artwork = atmosphereArtwork[effect];

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const particles = createParticles(coarsePointer ? 15 : 27);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let logicalWidth = 0;
    let logicalHeight = 0;

    const render = (time: number) => {
      const burst = Math.max(0, Math.min(1, (burstUntilRef.current - time) / 900));
      drawAtmosphere(
        context,
        logicalWidth,
        logicalHeight,
        particles,
        effect,
        reducedMotionRef.current ? 0 : time,
        pointerRef.current,
        reducedMotionRef.current ? 0 : burst,
      );
    };

    const tick = (time: number) => {
      render(time);
      if (visibleRef.current && !reducedMotionRef.current) {
        animationRef.current = window.requestAnimationFrame(tick);
      } else {
        animationRef.current = null;
      }
    };

    const start = () => {
      if (animationRef.current === null && visibleRef.current && !reducedMotionRef.current) {
        animationRef.current = window.requestAnimationFrame(tick);
      }
    };

    const resize = () => {
      const bounds = root.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      logicalWidth = Math.max(1, bounds.width);
      logicalHeight = Math.max(1, bounds.height);
      canvas.width = Math.round(logicalWidth * dpr);
      canvas.height = Math.round(logicalHeight * dpr);
      canvas.style.width = `${logicalWidth}px`;
      canvas.style.height = `${logicalHeight}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      render(performance.now());
    };

    const handleMotionChange = () => {
      reducedMotionRef.current = reducedMotion.matches;
      if (reducedMotion.matches && animationRef.current !== null) {
        window.cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      render(performance.now());
      start();
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting;
      if (!entry.isIntersecting && animationRef.current !== null) {
        window.cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      start();
    }, { rootMargin: "120px" });

    reducedMotionRef.current = reducedMotion.matches;
    resizeObserver.observe(root);
    intersectionObserver.observe(root);
    reducedMotion.addEventListener("change", handleMotionChange);
    resize();
    start();

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      reducedMotion.removeEventListener("change", handleMotionChange);
      if (animationRef.current !== null) window.cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    };
  }, [effect]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerRef.current = { x, y };
    event.currentTarget.style.setProperty("--atmosphere-x", `${x * 8}px`);
    event.currentTarget.style.setProperty("--atmosphere-y", `${y * 6}px`);
    event.currentTarget.style.setProperty("--artwork-x", `${x * -14}px`);
    event.currentTarget.style.setProperty("--artwork-y", `${y * -11}px`);
  }

  function handlePointerEnter(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse") playBurst();
  }

  function resetPointer(event: PointerEvent<HTMLDivElement>) {
    pointerRef.current = { x: 0, y: 0 };
    event.currentTarget.style.setProperty("--atmosphere-x", "0px");
    event.currentTarget.style.setProperty("--atmosphere-y", "0px");
    event.currentTarget.style.setProperty("--artwork-x", "0px");
    event.currentTarget.style.setProperty("--artwork-y", "0px");
  }

  function playBurst() {
    burstUntilRef.current = performance.now() + 1400;
  }

  return (
    <div
      ref={rootRef}
      className={`${styles.root} ${className}`}
      data-atmosphere={effect}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      style={{
        "--atmosphere-x": "0px",
        "--atmosphere-y": "0px",
        "--artwork-x": "0px",
        "--artwork-y": "0px",
      } as CSSProperties}
    >
      {artwork && (
        <Image
          className={styles.artwork}
          src={artwork}
          width={1536}
          height={1024}
          sizes="(max-width: 900px) 100vw, 60vw"
          alt=""
          aria-hidden="true"
          draggable={false}
        />
      )}
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.content}>{children}</div>
      {showControl && (
        <button
          className={styles.control}
          type="button"
          onClick={playBurst}
          aria-label={label}
          title={hint ? `${label} · ${hint}` : label}
        >
          <span aria-hidden="true">✦</span>
        </button>
      )}
    </div>
  );
}
