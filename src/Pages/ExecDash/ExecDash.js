import React, { useState } from 'react'
import ExecNav from '../../Components/ExecNav/ExecNav';
import Orders from '../../Components/Orders/Orders';
import CreateOrder from '../../Components/CreateOrder/CreateOrder';
import classes from './ExecDash.module.css';

function ExecDash(props) {
    const [showOrders, setShowOrders] = useState(true);
    const [showCreateOrder, setShowCreateOrder] = useState(false); 
    return (
        <div className = {classes.ExecDash}>
            {/* Hello Exec! */}
            <ExecNav 
                showOrders={showOrders}
                setShowOrders={setShowOrders}
                showCreateOrder={showCreateOrder}
                setShowCreateOrder={setShowCreateOrder}
            />
            <div className={classes.wrapper}>
            {showOrders && <Orders />}
            {showCreateOrder && <CreateOrder />}
            </div>
        </div>
    )
}

export default ExecDash
