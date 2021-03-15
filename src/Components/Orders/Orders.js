import React, { useState, useEffect } from 'react'
import classes from "./Orders.module.css"

function Orders() {
    const [data, setData] = useState([])
    const [inp, setInp] = useState('')

    function getData() {
        setData(JSON.parse(localStorage.getItem("InventoryData")))


    }

    // const fetchData = () => {

    // }

    useEffect(() => getData(), [])


    useEffect(() => {
        setInp(JSON.parse(localStorage.getItem("searchName")))

        let filtD = data.filter(item => {
            return item.medicinename.includes(inp)
        })
        console.log(filtD)
    }, [inp, data])

    return (
        <table >
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
                        <td className={classes.TableHead}>{item.manufacturername}</td>
                        <td className={classes.TableHead}>{item.price}</td>
                        <td className={classes.TableHead}>{item.stock}</td>
                        <td className={classes.TableHead}>{item.discount}</td>
                        {/* <td><button style={{ padding: "10px" }}>Delete</button></td> */}
                    </tr>
                )
            })}




        </table>
    )
}

export default Orders;
