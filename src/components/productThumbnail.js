import React, { useState } from 'react';
import './productThumbnail.scss'
import productImage from '../assets/images/productImg.png'

function ProductThumbnail({ product, onEditProduct, onDeleteProduct, onSaveProduct, selectedProductId }) {

  const [isFadingOut, setIsFadingOut] = useState(false);

  const baseCssClasses = 'product-thumbnail container'
  const conditionalCssClasses =
    (isFadingOut ? 'fade-out ' : 'fade-in ') +
    (product.id === selectedProductId ? baseCssClasses + ' mark' : baseCssClasses)

  const removeProduct = (evt) => {

    evt.stopPropagation()
    setIsFadingOut(true)

    setTimeout(() => {
      onDeleteProduct(product.id)
      setIsFadingOut(false)
    }, 300)
  }

  return (
    <div
      className={conditionalCssClasses}
      onClick={() => { onEditProduct(product); }}>
      <div className="img-content-wrapper">
        <img src={productImage} alt={product.name} />
        <div className="product-info">
          <p className="product-name">{product.name}</p>
          <p className="product-description">{product.description}</p>
        </div>
      </div>
      <button className="btn btn-delete" onClick={(evt) => removeProduct(evt)}>Delete</button>
    </div>)
}

export default ProductThumbnail