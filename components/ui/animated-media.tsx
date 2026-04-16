"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import {
  type ComponentType,
  type CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { cn } from "@/lib/utils";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
}) as unknown as ComponentType<{
  animationData: unknown;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: CSSProperties;
  rendererSettings?: {
    preserveAspectRatio?: string;
    progressiveLoad?: boolean;
  };
}>;

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
  const inViewRef = useRef(false);

  const subscribe = useCallback(
    (notify: () => void) => {
      if (!node) return () => {};
      if (typeof IntersectionObserver === "undefined") {
        inViewRef.current = true;
        notify();
        return () => {};
      }
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting && !inViewRef.current) {
            inViewRef.current = true;
            notify();
          }
        },
        { rootMargin },
      );
      observer.observe(node);
      return () => observer.disconnect();
    },
    [node, rootMargin],
  );

  const isInView = useSyncExternalStore(
    subscribe,
    () => inViewRef.current,
    () => false,
  );

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
  const [animationData, setAnimationData] = useState<unknown>(null);

  useEffect(() => {
    if (!isInView || animationData) return;
    let cancelled = false;
    fetch(src)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setAnimationData(data);
      })
      .catch(() => {
        /* swallow — card will stay blank if the JSON fails to load */
      });
    return () => {
      cancelled = true;
    };
  }, [isInView, src, animationData]);

  return (
    <div
      ref={setNode}
      className={cn("absolute inset-0 h-full w-full", className)}
      style={objectPosition ? { objectPosition } : undefined}
      aria-hidden="true"
    >
      {animationData ? (
        <Lottie
          animationData={animationData}
          loop={loop && !reducedMotion}
          autoplay={!reducedMotion}
          className="h-full w-full [&_svg]:!h-full [&_svg]:!w-full"
          rendererSettings={{
            preserveAspectRatio:
              fit === "cover" ? "xMidYMid slice" : "xMidYMid meet",
          }}
        />
      ) : null}
    </div>
  );
}
