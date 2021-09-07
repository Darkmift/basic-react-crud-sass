const saveItem = (product, products, setProducts,
  setSelectedProduct) => {

  if (!product) {
    setSelectedProduct(null)
    return
  }

  if (product.id) {
    const idx = products.findIndex(p => p.id === product.id)
    products[idx] = product;
  } else {
    var uniqid = Date.now();
    product.id = uniqid;
    products.push(product);
  }
  setProducts([...products])
  setSelectedProduct(null)
}

const deleteItem = (productId, products, setProducts) => {
  setProducts(products.filter(p => p.id !== productId))
}



export {
  saveItem,
  deleteItem
}