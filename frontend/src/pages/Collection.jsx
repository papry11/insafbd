import React, { useState } from 'react'
import { ShopContext } from '../context/ShopContext'


const Collection = () => {

    const { products } = useState(ShopContext);
  return (
    <div className='Flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
          {/* filter side */}
          <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
      
          </div>
    </div>
  )
}

export default Collection
