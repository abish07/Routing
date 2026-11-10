function OrderCard({customerName,total,status,isPaid,avatarColor}){
    return(
        <div className="grid grid-cols-[1.3fr_1fr_1fr_0.9fr] bg-white w-[100vh] items-center rounded-xl shadow-sm text-xl text-slate-900">
            <div className="flex gap-4 items-center p-3">
                <div className={`${avatarColor} rounded-full text-white p-3`}>
                    {customerName[0]}
                </div>
                <h2>{customerName}</h2>
            </div>
            <div className="border-l border-slate-200 h-12 flex items-center justify-center">
                <div>
                    <h2 className="font-bold">Rs {Number(total).toLocaleString('en-NP')}</h2>
                </div>
            </div>
            <div className="border-l border-slate-200 h-12 flex items-center justify-center">
                <div className="bg-[#FFEDD5] rounded-full p-3">
                    {status === "Pending" && <span>⏳ {status}</span>}
                    {status === "Shipped" && <span>🚚 {status}</span>}
                    {status === "Delivered" && <span>✅ {status}</span>}
                </div>
            </div>
            <div className="border-l border-slate-200 h-12 flex items-center justify-center">
                {isPaid
                ? <h2 className="rounded-full p-3 bg-[#DCFCE7] text-[#15803D]"> "✅ Paid"</h2>
                : <h2 className="rounded-full p-3 bg-[#FEE2E2] text-[#DC2626]"> "❌ Unpaid" </h2>}
            </div>
        </div>
    )
}
export default OrderCard;