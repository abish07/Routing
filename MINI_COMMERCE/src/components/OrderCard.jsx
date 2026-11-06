function OrderCard({customerName,total,status,isPaid}){
    return(
        <div>
            <h2>{customerName}</h2>
            <h2>{total}</h2>
            <h2>{status}</h2>
            <h2>{isPaid?"Paid":"Unpaid"}</h2>
        </div>
    )
}
export default OrderCard;