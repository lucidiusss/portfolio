import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

const Player = () => {
    return (
        <div className=" fixed bottom-5 flex flex-col h-16 bg-black/20 backdrop-blur-sm w-full gap-5 items-center justify-center">
            <Controls />
            <ProgressBar />
        </div>
    );
};

export default Player;
