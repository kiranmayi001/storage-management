import React, { useState, useEffect } from 'react'
import classes from "./Execs.module.css"
import Executive from "../Executive/Executive"

function Execs() {

    const [data, setData] = useState([])

    const getData = () => {
        setData(JSON.parse(localStorage.getItem("ExecutiveData")))
    }

    useEffect(() => getData(), [])


    const HandleDelete = (id) => {
        alert(id)

        let leftData = data.filter(item => {
            return item.id != id
        })
        localStorage.setItem("ExecutiveData", JSON.stringify(leftData))
        setData(leftData)
        getData()

    }

    return (
        <table className={classes.Inventory}>
            <tr >
                <th className={classes.TableHead}> First Name</th>
                <th className={classes.TableHead}> Last Name</th>
                <th className={classes.TableHead}>Date of birth</th>
                <th className={classes.TableHead}>Gender</th>
                <th className={classes.TableHead}>Experience Years</th>
            </tr>

            {data && data.map(item => {
                return (
                    <tr >
                        <td className={classes.TableHead}> {item.firstName}</td>
                        <td className={classes.TableHead}>{item.lastName}</td>
                        <td className={classes.TableHead}>{item.DOB}</td>
                        <td className={classes.TableHead}>{item.gender}</td>
                        <td className={classes.TableHead}>{item.Experience}</td>
                        <td><button onClick={() => HandleDelete(item.id)} style={{ padding: "10px", backgroundColor: "#C08D00" }}>Delete</button></td>
                    </tr>
                )
            })}


            {/*  First Name, Last Name, Date of birth, Gender, Experience Years
 */}

        </table>
    )
}

export default Execs
