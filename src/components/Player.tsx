import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import useSound from "use-sound";
import song from "../../static/songs/200 - sosocamo.flac";
import { useEffect, useRef, useState, useCallback } from "react";
import { Progress } from "./ui/progress";
import { Slider } from "./ui/slider";

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState([0.7]);
    const [isMuted, setIsMuted] = useState(false);
    const [previousVolume, setPreviousVolume] = useState([0.7]);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isSeeking, setIsSeeking] = useState(false);

    const animationFrameRef = useRef<number>();
    const targetTimeRef = useRef<number | null>(null);

    const [play, { sound, pause }] = useSound(song, {
        volume: isMuted ? 0 : volume[0],
        onload: () => {
            console.log("Sound loaded successfully");
            setIsLoading(false);
            if (sound) {
                const songDuration = sound.duration() || 0;
                setDuration(songDuration);
            }
        },
        onloaderror: (id, error) => {
            console.error("Error loading sound:", error);
            setIsLoading(false);
        },
        onplay: () => {
            console.log("Sound playing");
            setIsPlaying(true);
        },
        onpause: () => {
            console.log("Sound paused");
            setIsPlaying(false);
        },
        onend: () => {
            console.log("Sound ended");
            setIsPlaying(false);
            setCurrentTime(0);
        },
    });

    // Try to get duration when sound becomes available
    useEffect(() => {
        if (sound && duration === 0) {
            const songDuration = sound.duration();
            if (songDuration) {
                setDuration(songDuration);
            }
        }
    }, [sound, duration]);

    // Update progress while playing with smooth animation
    useEffect(() => {
        if (isPlaying && sound && !isSeeking) {
            const updateProgress = () => {
                if (sound) {
                    const seek = sound.seek() || 0;
                    setCurrentTime(seek);

                    if (isPlaying) {
                        animationFrameRef.current =
                            requestAnimationFrame(updateProgress);
                    }
                }
            };

            animationFrameRef.current = requestAnimationFrame(updateProgress);

            return () => {
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
            };
        }
    }, [isPlaying, sound, isSeeking]);

    // Handle seeking animation
    useEffect(() => {
        if (isSeeking && targetTimeRef.current !== null) {
            const animateSeek = () => {
                // Move towards target time quickly (using 0.5 for faster movement)
                setCurrentTime((prev) => {
                    const target = targetTimeRef.current!;
                    const diff = target - prev;

                    // If we're close enough, snap to target and stop seeking
                    if (Math.abs(diff) < 0.1) {
                        setIsSeeking(false);
                        targetTimeRef.current = null;
                        return target;
                    }

                    // Move 50% of the remaining distance each frame (very fast)
                    return prev + diff * 0.1;
                });

                if (isSeeking) {
                    animationFrameRef.current =
                        requestAnimationFrame(animateSeek);
                }
            };

            animationFrameRef.current = requestAnimationFrame(animateSeek);

            return () => {
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
            };
        }
    }, [isSeeking]);

    const stopProgressTracking = useCallback(() => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = undefined;
        }
    }, []);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            stopProgressTracking();
        };
    }, [stopProgressTracking]);

    // Update volume when it changes
    useEffect(() => {
        if (sound) {
            sound.volume(isMuted ? 0 : volume[0]);
        }
    }, [sound, volume, isMuted]);

    const togglePlay = useCallback(() => {
        if (!sound) return;

        if (isPlaying) {
            pause();
        } else {
            play();
        }
    }, [isPlaying, sound, play, pause]);

    const toggleMute = useCallback(() => {
        if (isMuted) {
            setVolume(previousVolume);
        } else {
            setPreviousVolume(volume);
            setVolume([0]);
        }
        setIsMuted(!isMuted);
    }, [isMuted, previousVolume, volume]);

    const handleVolumeChange = useCallback(
        (newVolume: number[]) => {
            setVolume(newVolume);
            if (isMuted && newVolume[0] > 0) {
                setIsMuted(false);
            }
        },
        [isMuted],
    );

    const handleProgressClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!sound || duration === 0) return;

            const rect = e.currentTarget.getBoundingClientRect();
            const clickPosition = (e.clientX - rect.left) / rect.width;
            const newTime = clickPosition * duration;

            // Immediately update audio position
            sound.seek(newTime);

            // Start seeking animation
            setIsSeeking(true);
            targetTimeRef.current = newTime;

            // If not playing, set the time directly
            if (!isPlaying) {
                setCurrentTime(newTime);
                setIsSeeking(false);
                targetTimeRef.current = null;
            }
        },
        [sound, duration, isPlaying],
    );

    const formatTime = (seconds: number) => {
        if (isNaN(seconds) || seconds === 0) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const progressValue = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <div className="fixed bottom-0 w-full justify-center flex text-white h-24 bg-[#111111] border-t border-[#a1a1a1] backdrop-blur-sm gap-10">
            <div className="w-1/2 h-full flex gap-5 justify-center flex-col items-center">
                <Button
                    size="icon"
                    variant="link"
                    className="bg-[#202020] rounded-full"
                    onClick={togglePlay}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : isPlaying ? (
                        <Pause />
                    ) : (
                        <Play />
                    )}
                </Button>
                <div className="w-full flex items-center gap-2">
                    <span className="text-xs text-gray-400 w-10 text-right">
                        {formatTime(currentTime)}
                    </span>
                    <div
                        className="flex-1 cursor-pointer group"
                        onClick={handleProgressClick}
                    >
                        <Progress
                            value={progressValue}
                            className="h-1.5 [&>div]:bg-white group-hover:bg-gray-600 transition-colors"
                        />
                    </div>
                    <span className="text-xs text-gray-400 w-10">
                        {formatTime(duration)}
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <Button
                    size="icon"
                    onClick={toggleMute}
                    className="bg-[#202020] rounded-full"
                >
                    {isMuted ? <VolumeX /> : <Volume2 />}
                </Button>
                <Slider
                    value={volume}
                    onValueChange={handleVolumeChange}
                    max={1}
                    step={0.01}
                    className="[&_[data-slot=slider-track]]:h-1
                            [&_[data-slot=slider-track]]:rounded-full
                            [&_[data-slot=slider-range]]:bg-[#313131]
                            [&_[data-slot=slider-range]]:rounded-full
                            [&_[data-slot=slider-thumb]]:h-4
                            [&_[data-slot=slider-thumb]]:w-4
                            [&_[data-slot=slider-thumb]]:bg-white
                            [&_[data-slot=slider-thumb]]:border
                            [&_[data-slot=slider-thumb]]:border-[#a1a1a1]
                            [&_[data-slot=slider-thumb]]:transition-transform
                            w-32"
                />
            </div>
        </div>
    );
};

export default Player;
