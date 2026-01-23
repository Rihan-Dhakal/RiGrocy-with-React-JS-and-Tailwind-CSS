import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgSeaFood from '../../assets/seaFood-banner.jpg'






const Seafood = () => {
    return (
        <div>
            <CategoryPage title='Meat and SeaFood' bgImage={bgSeaFood} categories={['Meat', 'SeaFood']} />

        </div>
    )
}

export default Seafood