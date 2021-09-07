import React, { useState, useEffect } from 'react'
import './productForm.scss'
import productImage from '../assets/images/productImg.png'

function ProductForm({ product, onSaveProduct }) {

  const [formData, setProductInfo] = useState({ ...product });

  useEffect(() => {
    setProductInfo({ ...product })
  }, [product])


  const setFormData = (ev) => {
    const productCopy = { ...formData }
    productCopy[ev.target.name] = ev.target.value;
    setProductInfo(productCopy)
  }

  return (<form className="product-form">
    <img src={productImage} alt={formData.name} />
    <div className="input-container">
      <span>Name</span>
      <input type="text" name="name" value={formData.name} onChange={setFormData} />
    </div>
    <div className="input-container">
      <span>Description</span>
      <input type="text" name="description" value={formData.description} onChange={setFormData} />
    </div>
    <div className="input-container">
      <span>Price</span>
      <input className="input-price" type="number" name="price" value={formData.price} onChange={setFormData} />
    </div>

    <div className="btn-container">

      <button className="btn submit-btn" onClick={(evt) => {
        evt.preventDefault()
        onSaveProduct(formData)
      }}>Save</button>

      <button className="btn cancel-btn" onClick={(evt) => {
        evt.preventDefault()
        onSaveProduct(null)
      }}>Cancel</button>
    </div>

  </form>)
}

export default ProductForm