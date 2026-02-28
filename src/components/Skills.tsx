import { cn } from "../lib/utils";
import { SkillIcon } from "react-skills-icons";
import type { SkillName } from "react-skills-icons";

type SkillProps = {
    name: SkillName;
    className: string;
};

const SKILLS: SkillProps[] = [
    {
        name: "react",
        className: "text-[#59C4DC] border-[#59C4DC]",
    },
    {
        name: "next",
        className: "text-[#336691] border-[#336691]",
    },
    {
        name: "javascript",
        className: "text-[#F7E01A] border-[#F7E01A]",
    },
    {
        name: "typescript",
        className: "text-[#3178C6] border-[#3178C6]",
    },
    {
        name: "tailwind",
        className: "text-[#39BDF8] border-[#39BDF8]",
    },
    {
        name: "go",
        className: "text-[#336691] border-[#336691]",
    },
    {
        name: "postgresql",
        className: "text-[#336691] border-[#336691]",
    },
    {
        name: "linux",
        className: "text-[#336691] border-[#336691]",
    },
    {
        name: "git",
        className: "text-[#336691] border-[#336691]",
    },
    {
        name: "github",
        className: "text-[#336691] border-[#336691]",
    },
    {
        name: "docker",
        className: "text-[#336691] border-[#336691]",
    },
];

const Skills = () => {
    return (
        <section className="h-screen flex flex-col items-center gap-10">
            <h1 className="text-[#A1A1A1] text-4xl">my skillset</h1>
            <div
                id="skills"
                className="flex flex-wrap items-center justify-center gap-5"
            >
                {SKILLS.map((skill: SkillProps) => (
                    <SkillIcon
                        skill={skill.name}
                        className={cn(
                            "text-[#A1A1A1] transition text-xl w-64 rounded-lg p-4 border border-[#A1A1A1]",
                        )}
                        size={48}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;
