import { useAudio } from "@splicemood/react-music-player";
import { useState, useRef, useEffect } from "react";

const ProgressBar = () => {
    const audio = useAudio();
    const [isDragging, setIsDragging] = useState(false);
    const progressRef = useRef<HTMLDivElement>(null);
    const indicatorRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number>();

    const formatTime = (timeInSeconds: number) => {
        if (!timeInSeconds || isNaN(timeInSeconds)) return "0:00";
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    // Let React Compiler handle memoization
    const handleSeek = (e: React.MouseEvent | MouseEvent) => {
        if (!progressRef.current) return;

        const rect = progressRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        const newTime = (percentage / 100) * audio.maxTime;

        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
        }

        rafRef.current = requestAnimationFrame(() => {
            audio.setUpdateTime(newTime);
        });
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        handleSeek(e);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        handleSeek(e);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
        }
    };

    useEffect(() => {
        if (!isDragging && indicatorRef.current) {
            const percentage = (audio.currentTime / audio.maxTime) * 100;
            indicatorRef.current.style.transform = `scaleX(${percentage / 100})`;
        }
    }, [audio.currentTime, audio.maxTime, isDragging]);

    return (
        <div className="w-1/2 flex items-center gap-3">
            <span className="text-white">{formatTime(audio.currentTime)}</span>
            <div
                ref={progressRef}
                className="w-full h-2 bg-neutral-600 rounded-full cursor-pointer relative overflow-hidden"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <div
                    ref={indicatorRef}
                    className={`absolute inset-y-0 left-0 w-full origin-left transition-transform duration-75 ${isDragging ? "bg-neutral-100" : "bg-neutral-400"}`}
                    style={{ transform: "scaleX(0)" }}
                />
            </div>
            <span className="text-white">{formatTime(audio.maxTime)}</span>
        </div>
    );
};
