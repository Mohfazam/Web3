export const RequestAirdrop = () => {

    function requestAirdrop() {
        alert("Hello");
    }

    return (
        <div>
            <input type="text" placeholder="Amount.." />
            <button onClick={requestAirdrop} className="border-4 p-2 bg-amber-300 hover:cursor-pointer">Request AirDrop</button>
        </div>
    )
}