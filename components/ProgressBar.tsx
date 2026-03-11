"use client";

import { useAudio } from "@splicemood/react-music-player";
import { Slider } from "./ui/slider";
import { memo, useMemo, useCallback, useState } from "react";

const SLIDER_CLASSES = {
    trackClassName:
        "h-32 bg-neutral-800 rounded-full transition-all duration-200",
    rangeClassName: "bg-[#a1a1a1] group-hover:bg-white rounded-full",
    thumbClassName:
        "block w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 hover:scale-125 transition-all duration-200 focus:outline-none",
} as const;

const formatTime = (timeInSeconds: number) => {
    if (!timeInSeconds || isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const ProgressBar = memo(() => {
    const audio = useAudio();
    const [isDragging, setIsDragging] = useState(false);
    const [dragValue, setDragValue] = useState<number | null>(null);

    const currentTime = audio.currentTime || 0;
    const maxTime = audio.maxTime || 0;

    const displayValue = useMemo(() => {
        if (isDragging && dragValue !== null) {
            return dragValue;
        }
        return currentTime;
    }, [isDragging, dragValue, currentTime]);

    const formattedCurrentTime = useMemo(
        () => formatTime(displayValue),
        [displayValue],
    );

    const formattedMaxTime = useMemo(() => formatTime(maxTime), [maxTime]);

    const handleValueChange = useCallback((value: number[]) => {
        setIsDragging(true);
        setDragValue(value[0]);
    }, []);

    const handleValueCommit = useCallback(
        (value: number[]) => {
            audio.setUpdateTime(value[0]);
            setIsDragging(false);
            setDragValue(null);
        },
        [audio],
    );

    const handleDragStart = useCallback(() => {
        setIsDragging(true);
    }, []);

    return (
        <div className="w-full flex items-center justify-center gap-3">
            <span className="text-[#a1a1a1] text-xs md:text-sm select-none min-w-10 text-center">
                {formattedCurrentTime}
            </span>

            <Slider
                value={[displayValue]}
                max={maxTime}
                min={0}
                step={0.1}
                onValueChange={handleValueChange}
                onValueCommit={handleValueCommit}
                onDragStart={handleDragStart}
                className="w-1/3 group cursor-pointer"
                trackClassName={SLIDER_CLASSES.trackClassName}
                rangeClassName={SLIDER_CLASSES.rangeClassName}
                thumbClassName={SLIDER_CLASSES.thumbClassName}
                showThumb={true}
            />

            <span className="text-[#a1a1a1] text-xs md:text-sm select-none min-w-10 text-center">
                {formattedMaxTime}
            </span>
        </div>
    );
});

ProgressBar.displayName = "ProgressBar";

export default ProgressBar;
