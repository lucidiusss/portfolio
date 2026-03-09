import Image from "next/image";
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
                    <Image
                        width={64}
                        height={64}
                        className="rounded-full"
                        src="/covers/reloaded.jpg"
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
