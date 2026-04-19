"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import {
  type ComponentType,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import { cn } from "@/lib/utils";

type DotLottieProps = {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  layout?: { fit: "cover" | "contain"; align: [number, number] };
  renderConfig?: { devicePixelRatio?: number; freezeOnOffscreen?: boolean };
};

const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false },
) as unknown as ComponentType<DotLottieProps>;

type CommonProps = {
  className?: string;
  objectPosition?: string;
  rootMargin?: string;
  loop?: boolean;
};

type VideoProps = CommonProps & {
  kind: "video";
  src: string;
  poster?: string;
};

type LottieProps = CommonProps & {
  kind: "lottie";
  src: string;
  fit?: "cover" | "contain";
};

type ImageProps = CommonProps & {
  kind: "image";
  src: string;
  alt: string;
};

export type AnimatedMediaProps = VideoProps | LottieProps | ImageProps;

export function AnimatedMedia(props: AnimatedMediaProps) {
  if (props.kind === "image") {
    return (
      <Image
        src={props.src}
        alt={props.alt}
        fill
        unoptimized
        className={cn(
          "absolute inset-0 h-full w-full object-cover",
          props.className,
        )}
        style={
          props.objectPosition
            ? { objectPosition: props.objectPosition }
            : undefined
        }
      />
    );
  }

  if (props.kind === "video") {
    return <LazyVideo {...props} />;
  }

  return <LazyLottie {...props} />;
}

function useInViewport<T extends Element>(rootMargin = "200px") {
  const [node, setNode] = useState<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!node) return;
    let unmountTimer: ReturnType<typeof setTimeout> | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          if (unmountTimer) {
            clearTimeout(unmountTimer);
            unmountTimer = null;
          }
          setIsInView(true);
        } else {
          unmountTimer = setTimeout(() => setIsInView(false), 800);
        }
      },
      { rootMargin },
    );
    observer.observe(node);
    return () => {
      if (unmountTimer) clearTimeout(unmountTimer);
      observer.disconnect();
    };
  }, [node, rootMargin]);

  return { setNode, node, isInView };
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (notify) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", notify);
      return () => mq.removeEventListener("change", notify);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

function LazyVideo({
  src,
  poster,
  className,
  objectPosition,
  rootMargin,
  loop = true,
}: VideoProps) {
  const { setNode, node, isInView } =
    useInViewport<HTMLVideoElement>(rootMargin);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!node || !isInView) return;
    if (reducedMotion) {
      node.pause();
      return;
    }
    const tryPlay = () => {
      node.play().catch(() => {
        /* autoplay blocked — leave paused */
      });
    };
    if (node.readyState >= 2) {
      tryPlay();
    } else {
      node.addEventListener("loadeddata", tryPlay, { once: true });
      return () => node.removeEventListener("loadeddata", tryPlay);
    }
  }, [node, isInView, reducedMotion]);

  return (
    <video
      ref={setNode}
      className={cn("absolute inset-0 h-full w-full object-cover", className)}
      style={objectPosition ? { objectPosition } : undefined}
      muted
      loop={loop}
      playsInline
      autoPlay={!reducedMotion}
      preload="metadata"
      poster={poster}
      tabIndex={-1}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

function LazyLottie({
  src,
  className,
  objectPosition,
  rootMargin,
  loop = true,
  fit = "cover",
}: LottieProps) {
  const { setNode, isInView } = useInViewport<HTMLDivElement>(rootMargin);
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div
      ref={setNode}
      className={cn("absolute inset-0 h-full w-full", className)}
      style={objectPosition ? { objectPosition } : undefined}
      aria-hidden="true"
    >
      {isInView ? (
        <DotLottieReact
          src={src}
          loop={loop && !reducedMotion}
          autoplay={!reducedMotion}
          className="h-full w-full"
          layout={{ fit, align: [0.5, 0.5] }}
          renderConfig={{
            devicePixelRatio: Math.min(
              typeof window !== "undefined" ? window.devicePixelRatio : 1,
              1.25,
            ),
            freezeOnOffscreen: true,
          }}
        />
      ) : null}
    </div>
  );
}
