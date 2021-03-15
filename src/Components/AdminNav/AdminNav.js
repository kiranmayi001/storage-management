import classes from './AdminNav.module.css';
import React from 'react'

// import Topbar from "../Topbar/Topbar"

function ExecNav(props) {

    const {
        showInventory,
        setShowInventory,
        showAddInventory,
        setShowAddInventory,
        showExecs,
        setShowExecs,
        showAddExec,
        setShowAddExec
    } = props;
    return (
        <>
            {/* <Topbar/> */}
            <div className={classes.AdminNav}>
                <button className={classes.Button} onClick={() => { return (setShowInventory(!showInventory), setShowAddInventory(false), setShowExecs(false), setShowAddExec(false)) }} >View Inventory</button>
                <button className={classes.Button} onClick={() => { return (setShowInventory(false), setShowAddInventory(!showAddInventory), setShowExecs(false), setShowAddExec(false)) }}>Add Inventory</button>
                <button className={classes.Button} onClick={() => { return (setShowInventory(false), setShowAddInventory(false), setShowExecs(!showExecs), setShowAddExec(false)) }}>View Team</button>
                <button className={classes.Button} onClick={() => { return (setShowInventory(false), setShowAddInventory(false), setShowExecs(false), setShowAddExec(!showAddExec)) }}>Add Sales Executive</button>

            </div>
        </>
    )

}

export default ExecNav;
