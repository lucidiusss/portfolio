import Container from "./components/Container";
import Player from "./components/Player";

const Playlist = () => {
    return (
        <main className="h-screen flex items-center flex-col justify-center">
            <Container>
                <div className="w-full h-full flex flex-col gap-10 items-center justify-center">
                    <h1 className="text-white text-4xl">my playlist</h1>
                    <div className="border bg-[#111111] border-[#a1a1a1] w-full h-2/3 rounded-lg"></div>
                </div>
            </Container>
            <Player />
        </main>
    );
};

export default Playlist;
