import React from 'react'
import AdminNav from "../AdminNav/AdminNav"
import AddInventory from '../AddInventory/AddInventory'
import Topbar from '../Topbar/Topbar'
import classes from "./CreateOrder.module.css"

function CreateOrder() {
    return (
        <form className={classes.CreateOrder}>
            <h1>Create Orders</h1>
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

export default CreateOrder
