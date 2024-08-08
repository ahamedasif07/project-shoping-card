
const Cart = ({cart,handleRemoveFromCart}) => {
    console.log(cart)
    const {id,title,image,price,description,category} = cart;
    return (
        <div>

<div className="card mb-4 card-compact bg-base-100 h-[500px]  shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{category}</h2>
    <p>{description}</p>
    <p className='font-semibold text-lg'>{price} $ </p>
    <div className="card-actions justify-end">

      <button onClick={()=>handleRemoveFromCart(cart)}  className="btn btn-primary">Remove</button>
    </div>
  </div>
            </div>
        </div>
    );
};

export default Cart;