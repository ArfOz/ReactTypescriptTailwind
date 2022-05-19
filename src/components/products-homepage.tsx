import React from 'react'

const Product = ({ product }: { product: any }) => {
  return (
    <div className='group relative'>
      <div className='w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none'>
        <img
          src={product!.avatar}
          alt={product!.name}
          className='w-1/2 h-1/2 object-scale-down object-fill lg:w-full lg:h-full'
        />
      </div>

      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>
            <a href={product.href}>
              <span aria-hidden='true' className='absolute inset-0' />
              {product.name}
            </a>
          </h3>
        </div>
        <p className='text-sm font-medium text-gray-900'>{product!.price}</p>
      </div>
    </div>
  )
}

export default Product