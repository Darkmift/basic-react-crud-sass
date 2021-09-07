import './productThumbnail.scss'
import productImage from '../assets/images/productImg.png'

function ProductThumbnail({ product, onEditProduct, onDeleteProduct, onSaveProduct, selectedProductId }) {

  const baseCssClasses = 'product-thumbnail container'

  return (
    <div
      className={product.id === selectedProductId ? baseCssClasses + 'mark' : baseCssClasses}
      onClick={() => { onEditProduct(product); }}>
      <div className="img-content-wrapper">
        <img src={productImage} alt={product.name} />
        <div className="product-info">
          <p className="product-name">{product.name}</p>
          <p className="product-description">{product.description}</p>
        </div>
      </div>
      <button className="btn btn-delete" onClick={(evt) => {
        evt.stopPropagation()
        onDeleteProduct(product.id)
      }}>Delete</button>
    </div>)
}

export default ProductThumbnail