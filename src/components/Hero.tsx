import HeroNav from "./HeroNav";

const Hero = () => {
    return (
        <section className="w-full h-screen flex justify-between items-center rounded-xl p-4">
            <div className="w-2/3 flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                    <h1 className="text-4xl text-[#F5F5F5]">Nikita Isaev</h1>
                    <p className="text-2xl text-[#A1A1A1]">
                        creating functional and elegant web-apps, both for
                        others and myself.
                    </p>
                </div>
                <div className="flex items-center gap-5">
                    <img
                        className="rounded-full w-16 h-16"
                        src="https://avatars.githubusercontent.com/u/97850484?v=4"
                        alt="avatar"
                    />
                    <p className="text-[#a9a9a9] text-md font-light">
                        fullstack developer
                    </p>
                </div>
            </div>
            <HeroNav />
        </section>
    );
};

export default Hero;
