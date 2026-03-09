"use client";
import { useEffect, useRef, useCallback } from "react";
import Lenis from "lenis";

export function useLenis(options = {}) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        if (lenisRef.current) return;

        const lenis = new Lenis({
            duration: 0.8,
            easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            syncTouch: false,
            touchMultiplier: 2,
            lerp: 0.4,
            wheelMultiplier: 1.5,
            eventsTarget: window,
            orientation: "vertical",
            gestureOrientation: "vertical",
            infinite: false,
            autoResize: true,
            ...options,
        });

        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        lenisRef.current = lenis;

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    const scrollTo = useCallback(
        (target: string | HTMLElement | number, opts = {}) => {
            if (lenisRef.current) {
                if (
                    typeof target === "string" ||
                    target instanceof HTMLElement
                ) {
                    const element =
                        typeof target === "string"
                            ? document.querySelector(target)
                            : target;

                    if (!element) {
                        console.warn(`Element not found`);
                        return;
                    }

                    // Get element's position
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;
                    const elementHeight = rect.height;

                    // Calculate position to center the element in viewport
                    // We want the element's center to be at viewport center
                    const viewportHeight = window.innerHeight;

                    // Log for debugging
                    console.log({
                        elementTop,
                        elementHeight,
                        viewportHeight,
                        scrollPosition:
                            elementTop - viewportHeight / 2 + elementHeight / 2,
                    });

                    // This puts the element's center at the viewport's center
                    const centerPosition =
                        elementTop - viewportHeight / 2 + elementHeight / 2;

                    // Ensure we don't scroll past the document boundaries
                    const maxScroll =
                        document.documentElement.scrollHeight - viewportHeight;
                    const finalPosition = Math.max(
                        0,
                        Math.min(centerPosition, maxScroll),
                    );

                    lenisRef.current.scrollTo(finalPosition, {
                        duration: 1.2,
                        easing: (t: number) =>
                            Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                        ...opts,
                    });
                } else {
                    lenisRef.current.scrollTo(target, {
                        duration: 1.2,
                        easing: (t: number) =>
                            Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                        ...opts,
                    });
                }
            }
        },
        [],
    );

    return { scrollTo };
}
