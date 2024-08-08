import PropTypes from 'prop-types';
import Cart from './Cart';


const Carts = ({carts,handleRemoveFromCart}) => {
    console.log(carts)
   
    return (
        <div className='md:w-1/3 p-2 ' >
            <h2 className='flex justify-center mb-3 font-bold text-2xl bg-slate-300 p-2 rounded-md'>Carts</h2>

            <div className=''>
            {
                carts.map(cart => <Cart key={cart.id} 
                    handleRemoveFromCart={handleRemoveFromCart}
                    cart={cart}
                    ></Cart>)
            }
            </div>
        </div>
        

    )
       
};

Carts.propTypes = {
    carts : PropTypes.array.isRequired,
    handleRemoveFromCart:PropTypes.func.isRequired
}
export default Carts;