import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices , setPrice] = useState([]);

    useEffect(()=>{
     
        fetch('prices.json')
        .then(res =>res.json())
        .then(data => setPrice(data))

    },[])
    return (
        <div>
            <h1 className='text-3xl bg-purple-600 text-purple-900 text-center mt-8 p-8'>Awsome affortable price</h1>
           <div className='grid grid-cols-3 gap-3'> 
           {
                prices.map(price=> <PriceCard key={price.id} price={price}> </PriceCard>)
            }
           </div>
        </div>
    );
};

export default PriceList;