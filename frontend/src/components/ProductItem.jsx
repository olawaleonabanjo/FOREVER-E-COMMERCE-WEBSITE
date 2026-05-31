import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price}) => {
    const { currency } = useContext(ShopContext)
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
      <div className='overflow-hidden'>
        <img src={image[0]} className='hover:scale-110 transition ease-in-out duration-300' alt="" />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='font-medium text-sm'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem


// This component is used to display a single product item in the product listing page. It takes in the product id, image, name and price as props and displays them in a card format. The product name and price are displayed below the product image. The product image is wrapped in a Link component that navigates to the product details page when clicked. The product image also has a hover effect that scales the image up slightly when hovered over.
