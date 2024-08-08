import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({handleAddToCart}) => {
// console.log(handleAddToCart)
    const [cards,setCards]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])


    return (
        <div className="md:w-2/3 p-2 ">
            {/* <h2>all Cards : {cards.length}</h2> */}
            
            <div className="grid md:grid-cols-2 gap-4">
            {
                cards.map(card => <Card 
                    key={card.id} 
                    card={card}
                    handleAddToCart={handleAddToCart}
                    ></Card>)
            }
            </div>

        </div>
    );
};

Cards.propTypes = {
    handleAddToCart : PropTypes.func.isRequired
}

export default Cards;