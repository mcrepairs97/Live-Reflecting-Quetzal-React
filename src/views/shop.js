import React from 'react'

import { Helmet } from 'react-helmet'

import './shop.css'

const Shop = (props) => {
  return (
    <div className="shop-container">
      <Helmet>
        <title>Shop - Live Reflecting Quetzal</title>
        <meta property="og:title" content="Shop - Live Reflecting Quetzal" />
      </Helmet>
      <div className="shop-banner">
        <h1 className="shop-text">
          <span>Explore what we have in stock</span>
          <br></br>
          <span>while you find what you need</span>
        </h1>
      </div>
    </div>
  )
}

export default Shop
