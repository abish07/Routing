function OrderCard({customerName,total,status,isPaid,avatarColor}){
    return(
        <div className="flex gap-5 bg-white w-[100vh] items-center justify-around text-xl">
            <div className="flex gap-4 items-center">
                <div className={`${avatarColor} rounded-full text-white p-3 my-2`}>{customerName[0]}</div>
                <h2>{customerName}</h2>
            </div>
            <div className="h-[30px] border border-gray-400"></div>
            <div>
                <h2 className="font-bold">Rs {Number(total).toLocaleString('en-NP')}</h2>
            </div>
            <div className="h-[30px] border border-gray-400"></div>
            <div className="bg-[#FFEDD5] rounded-full p-3">
                {status === "Pending" && <span>⏳ {status}</span>}
                {status === "Shipped" && <span>🚚 {status}</span>}
                {status === "Delivered" && <span>✅ {status}</span>}
            </div>
            <div className="h-[30px] border border-gray-400"></div>
            <div>
                {isPaid? <h2 className="rounded-full p-3 bg-[#DCFCE7] text-[#15803D]"> "✅ Paid"</h2>: 
                <h2 className="rounded-full p-3 bg-[#FEE2E2] text-[#DC2626]"> "❌ Unpaid" </h2>}
            </div>
        </div>
    )
}
export default OrderCard;