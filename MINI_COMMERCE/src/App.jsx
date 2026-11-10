import { useState } from 'react'
import OrderCard from "./components/OrderCard"
import './index.css'

const orders = [
    {
        id:1,
        customerName:"Abish",
        total:7000,
        status:"Pending",
        isPaid:true,
        avatarColor: "bg-blue-500"
    },
    {
        id:2,
        customerName:"Sulav",
        total:17000,
        status:"Shipped",
        isPaid:false,
        avatarColor: "bg-purple-500"
    },
    {
        id:3,
        customerName:"Lasta",
        total:24000,
        status:"Delivered",
        isPaid:true,
        avatarColor: "bg-green-500"
    },
    {
        id:4,
        customerName:"Bishwash",
        total:9000,
        status:"Pending",
        isPaid:true,
        avatarColor: "bg-purple-500"
    },
    {
        id:5,
        customerName:"Bimala",
        total:14500,
        status:"Shipped",
        isPaid:false,
        avatarColor: "bg-blue-500"
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
        <div className='bg-blue-50 h-[100vh]'>
            <div className='flex flex-col items-center p-[100px]'>
                <div className='flex border rounded bg-blue-900 w-[100vh] h-[70px] text-white items-center pl-20 gap-6' >
                    <h2 className='text-3xl'>🛒</h2>
                    <h3 className='text-3xl'><pre>|   Order Lists</pre></h3>
                </div>
                <div className='flex flex-col gap-3 pt-3'>
                    {visibleOrders.map((order)=>(
                        <OrderCard
                            key = {order.id}
                            customerName = {order.customerName}
                            total = {order.total}
                            status = {order.status}
                            isPaid = {order.isPaid}
                            avatarColor = {order.avatarColor}
                        />
                    ))}
                </div>
                <div>
                    <button onClick={handleClick}>{showUnpaidOnly?"Showing All":"Showing unPaid Only"}</button>
                </div>
            </div>
        </div>
  )
}

export default App
