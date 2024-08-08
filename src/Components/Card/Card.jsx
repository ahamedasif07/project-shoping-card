import PropTypes from 'prop-types';
const Card = ({card,handleAddToCart}) => {
    const {id,title,image,price,description,category}=card;
    // console.log(card)

    return (
        <div className=''>
            <div className="card card-compact  bg-base-100 h-[500px]  shadow-xl">
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
      
      <button onClick={()=>handleAddToCart(card)} className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
            </div>
        </div>
    );
};
Card.propTypes ={
    card :PropTypes.object.isRequired,
    handleAddToCart:PropTypes.func.isRequired

}
export default Card;