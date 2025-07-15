import { Wallet } from "lucide-react"
import { CardTop } from "../UI/CardTop"

export const BalanceCard = () => {
    return (
        <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6">
            <div className="">
                <CardTop Text="Balance" Icon={<Wallet size={24} />} />
            </div>
        </div>
    )
}