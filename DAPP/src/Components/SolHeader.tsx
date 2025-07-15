import { Network } from "./Header/Network"

export const SolHEader = () => {
    return (
        <div className="flex items-center justify-between mb-8 bg-[#0a0a0a]">
            <h1 className="text-[#ffffff] text-2xl">
                Solana Wallet
            </h1>
            <div className="flex items-center gap-3">
                <div>
                    <Network />
                </div>
                <div className="bg-red-700 w-24 h-14 mr-12">
                    sdkb
                </div>
            </div>
        </div>
    )
}