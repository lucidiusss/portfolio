import { Button } from "@heroui/react";
import { useAudio } from "@splicemood/react-music-player";
import { Pause, Play } from "lucide-react";

const Controls = () => {
    const audio = useAudio();

    const handleClick = () => {
        audio.togglePlayPause();
    };

    return (
        <div>
            <Button
                onClick={handleClick}
                className="  rounded-lg w-12 h-12 p-4  bg-neutral-900 hover:bg-neutral-800 text-[#a1a1a1] hover:text-white"
            >
                {!audio.isPlaying ? (
                    <Play className="w-6 h-6" />
                ) : (
                    <Pause className="w-6 h-6" />
                )}
            </Button>
        </div>
    );
};

export default Controls;
