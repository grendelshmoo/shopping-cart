import React from 'react'



const CartItems = ({ shoppingList }) => {
  return (
    <div className="container m-2 p-2">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        { shoppingList }
      </div>
    </div>
  )
}

export default CartItems
