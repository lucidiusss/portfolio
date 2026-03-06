import { Button } from "@heroui/react";
import { AudioLines } from "lucide-react";
import { useState } from "react";
import Controls from "./Controls";

const MiniPlayer = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="fixed top-20 left-0">
            {!isOpen ? (
                <Button
                    onClick={() => setIsOpen(true)}
                    className=" rounded-lg w-12 h-12 border border-neutral-700 p-4  bg-neutral-900 hover:bg-neutral-800 text-[#a1a1a1] hover:text-white "
                >
                    <AudioLines className="w-6 h-6" />
                </Button>
            ) : (
                <>
                    <Controls />
                </>
            )}
        </div>
    );
};

export default MiniPlayer;
