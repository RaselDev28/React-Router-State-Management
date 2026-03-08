import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromis}) => {

    const PricingData=use(pricingPromis)
    // console.log(PricingData)
    return (
        <div>
             <h2 className='text-5xl my-5 text-center'>Get our Plan</h2>
             
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                  PricingData.map(pricing=> <PricingCard
                    key={pricing.id}
                    pricing={pricing}></PricingCard>)  
                }
            </div>
        </div>
    ); 
};

export default PricingOptions;