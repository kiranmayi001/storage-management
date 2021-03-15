import classes from './Inventory.module.css'
import React, { useState, useEffect } from 'react'

// import inventoryData from "../inventoryData/inventoryData"

function Inventory() {

    const [data, setData] = useState([])
    const getData = () =>
        setData(JSON.parse(localStorage.getItem("InventoryData")))


    useEffect(() => getData(), [])


    const HandleDelete = (id) => {
        alert(id)
        let leftData = data.filter(item => {
            return item.id !== id
        })
        setData({ leftData })
        localStorage.setItem("InventoryData", JSON.stringify(leftData))
        getData()
    }

    return (
        <div className={classes.Inv}>
            <table classNam={classes.Inventory}>
                <tr >
                    <th className={classes.TableHead}>Name</th>
                    <th className={classes.TableHead}>Manufacturer Name</th>
                    <th className={classes.TableHead}>Price</th>
                    <th className={classes.TableHead}>Stock</th>
                    <th className={classes.TableHead}>Discount</th>
                </tr>

                {data && data.map(item => {
                    return (
                        <tr >
                            <td className={classes.TableHead}>{item.medicinename}</td>
                            <td className={classes.TableHead}> {item.manufacturername}</td>
                            <td className={classes.TableHead}>{item.price}</td>
                            <td className={classes.TableHead}>{item.stock}</td>
                            <td className={classes.TableHead}>{item.discount}</td>
                            <th><button onClick={() => HandleDelete(item.id)} className={classes.DeleteButton} style={{ padding: "10px", backgroundColor: "#C08D00" }}>Delete</button></th>
                        </tr>

                    )
                })}




            </table>

        </div >
    )
}

export default Inventory
