function ProductCard({name, price, category, inStock}){
    return (
    <div className="bg-red-200 m-3 p-2">
        <h3 className="flex justify-center text-xl">{name}</h3>
        <p>Rs {price}</p>
        <p>{category}</p>
        {inStock?<p>Available</p>:<p>SoldOut</p>}
    </div>
    )
}
export default ProductCard;