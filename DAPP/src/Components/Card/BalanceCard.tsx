import { Wallet } from "lucide-react"
import { CardTop } from "../UI/CardTop"

export const BalanceCard = () => {
    return (
        <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6">
            <div className="">
                <CardTop Text="Balance" Icon={<Wallet size={24} />} />
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-dark-tertiary border border-[#2a2a2a] rounded-full mb-4">
                    <span className="text-2xl font-bold text-[#3b82f6]">S</span>
                </div>

                <div>
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-3xl font-bold text-[#ffffff]">2.85</span>
                        <span className="text-2xl font-medium text-[#3b82f6]">SOL</span>
                    </div>
                </div>
                <div>
                    <p className="text-[#a3a3a3]">Available balance</p>
                </div>
                <div>
                    <p className="text-[#a3a3a3]">≈ $66.83 USD</p>
                </div>
            </div>
        </div>
    )
}