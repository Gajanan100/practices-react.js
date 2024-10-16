
import React from 'react'

const NenuItems = (props) => {
  return (
   <>
         <div className='row w-100 mx-auto'>
                {
                    props.item.map((ele) => {
                        const { id, title, description, price, rating, stock, brand, category } = ele;
                        return (
                            <div key={id} className='col-12 col-md-4 border border-1  my-2 mx-2 mx-auto '>
                                <h3>ID: {id}</h3>
                                <h4>{title}</h4>
                                <p>{description}</p>
                                <div className='d-flex justify-content-between'>
                                    <h5>Price: ${price}</h5>
                                    <h5>Rating: {rating} ★</h5>
                                    <h5>Stock: {stock}</h5>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p>Brand: {brand}</p>
                                    <p>Category: {category}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
   </>
  )
}

export default NenuItems