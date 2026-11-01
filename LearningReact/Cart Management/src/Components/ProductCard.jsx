function ProductCard({name, price, category, inStock}){
    return (
        <div>
            <div className="card">
                <h3>{name}</h3>
                <p>{price}</p>
                <p>{category}</p>
                {inStock?<p>Available</p>:<p>SoldOut</p>}
            </div>
        </div>
    )
}
export default ProductCard;