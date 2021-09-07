import React, { useEffect, useState } from 'react'
import ProductList from './components/productList'
import ProductForm from './components/productForm'
import './App.scss';

import productsJson from './assets/data/products.json'
import { saveItem, deleteItem } from './crud'
function App() {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsJson)
  }, []);

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    document.title = selectedProduct?.name || 'Products'
  }, [selectedProduct]);

  const openEditProductForm = (product) => {
    setSelectedProduct(product)
  }

  const saveProduct = (product) => {
    saveItem({product,products, setProducts, setSelectedProduct})
  }

  const removeProduct = (productId) => {
    deleteItem(productId, products, setProducts)
  }

  const addProduct = () => {
    setSelectedProduct({ id: null, name: '', description: '', imgUrl: '', price: 0 })
  }

  return (
    <div className="app">
      <header>
        <h1>My Store</h1>
      </header>
      <div className="container">

        <button className="btn btn-add" onClick={addProduct}>Add</button>
        <div className="wrapper">
          <ProductList
            formIsOpen={selectedProduct ? true : false}
            selectedProductId={selectedProduct && selectedProduct.id}
            onDelete={removeProduct}
            onEdit={openEditProductForm}
            products={products} />
          {selectedProduct && <ProductForm onSaveProduct={saveProduct} product={selectedProduct} />}
        </div>
      </div>
    </div>
  );
}

export default App;
