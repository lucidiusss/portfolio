"use client";
import type { FC } from "react";

interface ContainerProps {
    children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <div className="w-full h-full sm:w-3xl md:w-4xl lg:w-7xl px-4 md:px-0 md:mx-auto flex flex-col items-center">
            {children}
        </div>
    );
};

export default Container;
