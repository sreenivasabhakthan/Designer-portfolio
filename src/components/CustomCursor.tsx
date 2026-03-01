'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Only enable on fine pointer devices (desktops/laptops)
        if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
            return;
        }

        const mouse = { x: -100, y: -100 };
        const circle = { x: -100, y: -100 };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
            }

            // Check if hovering over clickable elements
            const target = e.target as HTMLElement;
            let isHovering = false;

            if (target) {
                const computedStyle = window.getComputedStyle(target);
                isHovering =
                    target.closest('a') !== null ||
                    target.closest('button') !== null ||
                    computedStyle.getPropertyValue('cursor') === 'pointer';
            }

            if (circleRef.current) {
                if (isHovering) {
                    circleRef.current.style.backgroundColor = 'rgba(242, 86, 2, 0.1)';
                } else {
                    circleRef.current.style.backgroundColor = 'transparent';
                }
                // Save hover state as a dataset attribute to read in the animation loop
                circleRef.current.dataset.hovering = isHovering.toString();
            }
        };

        let animationFrameId: number;
        const animate = () => {
            // Smooth linear interpolation for the trailing circle
            circle.x += (mouse.x - circle.x) * 0.2;
            circle.y += (mouse.y - circle.y) * 0.2;

            if (circleRef.current) {
                const isHovering = circleRef.current.dataset.hovering === 'true';
                circleRef.current.style.transform = `translate3d(${circle.x}px, ${circle.y}px, 0) scale(${isHovering ? 1.5 : 1})`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[10000] hidden md:block"
                style={{
                    backgroundColor: '#F25602',
                    marginLeft: '-4px',
                    marginTop: '-4px',
                    transform: 'translate3d(-100px, -100px, 0)'
                }}
            />
            <div
                ref={circleRef}
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#F25602] pointer-events-none z-[9999] hidden md:block transition-colors duration-300"
                style={{
                    marginLeft: '-20px',
                    marginTop: '-20px',
                    transform: 'translate3d(-100px, -100px, 0)'
                }}
            />
        </>
    );
}
