import type { SongType } from "@/types/globalTypes";

const Song = ({ song }: { song: SongType }) => {
    return (
        <div className="hover:bg-[#A1A1A1] group px-4 py-2 select-none">
            <h1 className="text-white">{song.title}</h1>
            <p className="group-hover:text-white text-[#A1A1A1]">
                {song.artist}
            </p>
        </div>
    );
};

export default Song;
