import { useState } from 'react'
import OrderCard from "./components/OrderCard"

const orders = [
    {
        id:1,
        customerName:"Abish",
        total:7000,
        status:"Pending",
        isPaid:true
    },
    {
        id:2,
        customerName:"Sulav",
        total:17000,
        status:"Shipped",
        isPaid:false
    },
    {
        id:3,
        customerName:"Lasta",
        total:24000,
        status:"Delivered",
        isPaid:true
    },
    {
        id:4,
        customerName:"Bishwash",
        total:9000,
        status:"Pending",
        isPaid:true
    },
    {
        id:5,
        customerName:"Bimala",
        total:14500,
        status:"Shipped",
        isPaid:false
    }
];
const UnPaidOrders = orders.filter((order)=>(
    order.isPaid!==true
))
function App() {
    const [showUnpaidOnly,setshowUnpaidOnly] = useState(true);
    const visibleOrders = showUnpaidOnly?orders:UnPaidOrders;
    function handleClick(){
        setshowUnpaidOnly(!showUnpaidOnly);
    }
    return(
        <div>
            <div>
                <h3>Order Lists</h3>
            </div>
            <div>
                {visibleOrders.map((order)=>(
                    <OrderCard
                        key = {order.id}
                        customerName = {order.customerName}
                        total = {order.total}
                        status = {order.status}
                        isPaid = {order.isPaid}
                    />
                ))}
            </div>
            <div>
                <button onClick={handleClick}>{showUnpaidOnly?"Showing All":"Showing unPaid Only"}</button>
            </div>
        </div>
  )
}

export default App
