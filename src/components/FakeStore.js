import React, { useEffect, useState } from 'react'
import UseProduct from './UseProduct';

const FakeStore = () => {
  
  const products = UseProduct();
  
  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      {products && products.map((product) => (
        <div key={product.id} stlye={{margin: '20px', padding: '15px', border: '1px solid black'}}>
          <img src={product.image} alt={product.title} style={{width: '300px'}}/>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>  )
}

export default FakeStore;


