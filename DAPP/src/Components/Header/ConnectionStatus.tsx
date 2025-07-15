import { Wallet } from "lucide-react";

export const ConnectionStatus = () => {
    return (
        <div className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-[#2a2a2a] rounded-lg">
            <div className="w-2 h-2 bg-[#22c55e] rounded-full" />
            <Wallet size={18} className="text-[#a3a3a3]" />
            <span className="text-sm text-[#a3a3a3] font-medium">
                Connected
            </span>
        </div>
    );
};
