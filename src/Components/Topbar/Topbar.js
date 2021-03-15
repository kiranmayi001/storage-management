import React, { useState, useEffect, } from 'react'
import { Link } from 'react-router-dom'

// export const inp = React.createContext()

import classes from "./Topbar.module.css"

function Topbar(props) {

    const [inputText, setInputText] = useState('')
    const [logout, setLogout] = useState(false)
    const [ls, setls] = useState(false)

    const getData = () => {
        setls(JSON.parse(localStorage.getItem("loginstat")))
    }

    // useEffect(() => getData(), [logout])


    const HandleInputSearch = (e) => {
        console.log(e.target.value)
        let data = e.target.value
        setInputText(data)
        // searchData()
        localStorage.setItem("searchName", JSON.stringify(e.target.value))
    }

    // const HandleLogout = () => {
    //     alert("logout")
    //     setLogout(!logout)
    //     localStorage.setItem("loginStat", JSON.stringify(false))

    //     getData()

    // }

    return (
        <div className={classes.Topbar}>

            <input type="search" className={classes.Input_Search} onChange={(e) => HandleInputSearch(e)} />
            {/* <button onClick={HandleSearchClick}>search</button> */}
            {/* <h2 onClick={HandleLogout}>Logout</h2> */}
            {
                                   props.loginStatus ? <Link to="/" className="logout" onClick={props.handleuserLogout}>Logout</Link> :   <span></span>

            }

            {/*  {
                    this.props.loginStatus ? <Link to="/" className={classes.logout} onClick={this.props.handleuserLogout}>Logout</Link> : 
                    <span></span>
                } */}
        </div>
    )
}

export default Topbar
