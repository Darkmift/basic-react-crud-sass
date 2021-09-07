import React from 'react'

import ProductThumbnail from './productThumbnail'
import './productList.css'

function ProductList({ formIsOpen, products, onEdit, onDelete, selectedProductId }) {

  const renderProducts = products.map(product => {
    return <ProductThumbnail selectedProductId={selectedProductId} onDeleteProduct={onDelete} onEditProduct={onEdit} key={product.id} product={product} />
  })

  return (<div className="product-list" style={{ flex: formIsOpen ? '1.25' : '0.98' }}>
    {products.length && renderProducts}
  </div>)
}
export default ProductList