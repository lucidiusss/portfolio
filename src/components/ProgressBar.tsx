import { useAudio } from "@splicemood/react-music-player";
import { Slider } from "./ui/slider";

const ProgressBar = () => {
    const audio = useAudio();

    const formatTime = (timeInSeconds: number) => {
        if (!timeInSeconds || isNaN(timeInSeconds)) return "0:00";
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    return (
        <div className="w-1/2 flex items-center gap-3">
            <span className="text-white select-none">
                {formatTime(audio.currentTime)}
            </span>
            <Slider
                value={[audio.currentTime]}
                max={audio.maxTime}
                step={0.1}
                onValueChange={(value) => audio.setUpdateTime(value[0])}
                className="w-full group"
                trackClassName="h-4 bg-neutral-800 rounded-full transition-all duration-200"
                rangeClassName="bg-[#a1a1a1] group-hover:bg-white rounded-full"
                thumbClassName="block w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 hover:scale-125 transition-all duration-200 focus:outline-none"
            />
            <span className="text-white select-none">
                {formatTime(audio.maxTime)}
            </span>
        </div>
    );
};
export default ProgressBar;
