"use client";
import confetti from "canvas-confetti";

export default function BrushBurst() {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        const colors = ['#FF671F', '#E55615', '#FF7426', '#1A2530', '#F9F3E3', '#222222', '#FFFFFF'];

        // Larger paint droplets
        confetti({
            particleCount: 80,
            spread: 100,
            origin: { x, y },
            colors: colors,
            shapes: ['circle'],
            scalar: 1.5,
            gravity: 1.2,
            ticks: 150,
            disableForReducedMotion: true
        });

        // Smaller, farther-reaching splashes
        confetti({
            particleCount: 60,
            spread: 160,
            origin: { x, y },
            colors: colors,
            shapes: ['circle'],
            scalar: 0.8,
            gravity: 0.8,
            ticks: 200,
            disableForReducedMotion: true
        });
    };

    return (
        <div
            onClick={handleClick}
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white shadow-xl z-20 hidden md:flex cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300"
            title="Click me for a burst of colors!"
        >
            <span className="material-icons-round text-5xl">brush</span>
        </div>
    );
}
