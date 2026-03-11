import Image from "next/image";
import HeroNav from "./HeroNav";

const Hero = () => {
    return (
        <section className="w-full h-screen flex md:flex-row flex-col gap-16 justify-center md:justify-between items-center">
            <div className="w-fit flex  items-center flex-col gap-5">
                <div className="flex flex-col gap-5 text-center md:text-start">
                    <h1 className="text-4xl text-[#F5F5F5]">Nikita Isaev</h1>
                    <p className="text-xl text-[#A1A1A1] ">
                        creating functional and elegant web-apps, both for
                        others and myself.
                    </p>
                </div>
                <div className="flex items-center gap-5">
                    <Image
                        width={64}
                        height={64}
                        className="rounded-full h-12 w-12"
                        src="/covers/reloaded.jpg"
                        alt="avatar"
                    />
                    <p className="text-[#a9a9a9] text-base font-light">
                        fullstack developer
                    </p>
                </div>
            </div>
            <HeroNav />
        </section>
    );
};

export default Hero;
