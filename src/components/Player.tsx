import { useEffect } from "react";
import { useAudio, type AudioSource } from "@splicemood/react-music-player";

const Player = () => {
    const audio = useAudio<AudioSource>();

    useEffect(() => {
        audio.addToPlaylist({ src: "/songs/Rich Amiri - Mournin.mp3" });
        // Cleanup on unmount
        return () => {
            audio.replacePlaylist([]);
        };
    }, []);

    const handleClick = () => {
        audio.setVolumePercent(100);
        audio.togglePlayPause();
        console.log(audio.isPlaying);
    };

    return (
        <div>
            <button className="text-white" onClick={handleClick}>
                play
            </button>
            <input
                type="range"
                max={audio.maxTime}
                value={audio.currentTime}
                onChange={(ev) => {
                    const newTime = ev.currentTarget.value;
                    audio.setUpdateTime(Number(newTime));
                }}
            />
        </div>
    );
};

export default Player;
