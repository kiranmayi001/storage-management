import classes from './AddInventory.module.css'
import React from 'react'

function AddInventory() {


    return (
        <form className={classes.AddInventory}>
            <h1>Add Inventory</h1>
            <input type="text" name="orderId" placeholder="Enter the order id" /><br />
            <input type="text" name="customerName" placeholder="Enter customer name" /><br />
            <input type="text" name="customerContactNumber" placeholder="Enter customer contact number" /><br />
            {/* <span>Product Name</span>  */}
                <div className={classes.wrapper}>
                    <span><input type="text" name="productName" placeholder="Product name" className={classes.ProductName} />
                        <input type="text" placeholder="quantity" className={classes.qty} /></span><br />
                </div>
           
            <input type="text" name="totalPrice" placeholder="Total Price" /><br />

            <input type="submit" value="Add to Inventory" />
        </form>

    )
}

export default AddInventory
