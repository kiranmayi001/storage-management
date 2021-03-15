import classes from './AddExec.module.css'
import React, { useState, useEffect } from 'react'

function AddExec() {

    const [data, setData] = useState([])

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [DOB, setDOB] = useState()
    const [gender, setGender] = useState("")
    const [Experience, setExperience] = useState('')

    const HandleInput = (e) => {
        if (e.target["name"] === 'firstName') {
            setFirstName(e.target.value)
        }
        if (e.target["name"] === 'lastName') {
            setLastName(e.target.value)
        }
        if (e.target["name"] === 'DOB') {
            setDOB(e.target.value)
        }
        if (e.target["name"] === 'gender') {
            setGender(e.target.value)
        }
        if (e.target["name"] === 'Experience') {
            setExperience(e.target.value)
        }
        console.log(e.target.value)
    }



    const getData = () => {
        setData(JSON.parse(localStorage.getItem("ExecutiveData")))
    }

    useEffect(() => getData(), [])

    const HandleSubmit = (e) => {

        e.preventDefault()
        const ExecutiveDetail = {
            "firstName": firstName,
            "lastName": lastName,
            "DOB": DOB,
            "gender": gender,
            "Experience": Experience

        }
        console.log(ExecutiveDetail)
        let d = JSON.parse(localStorage.getItem("ExecutiveData"))
        console.log(d)
        d.push(ExecutiveDetail)
        setData(d)
        getData()
        localStorage.setItem("ExecutiveData", JSON.stringify(d))

    }


    return (
        <div className={classes.AddExec}>

            <form className={classes.Form} onSubmit={(e) => HandleSubmit(e)}>

                <input type="text" placeholder="First Name" name="firstName" onChange={(e) => HandleInput(e)} /><br />
                <input type="text" placeholder="Last Name" name="lastName" onChange={(e) => HandleInput(e)} /><br />
                <input type="date" placeholder="DOB" name="DOB" onChange={(e) => HandleInput(e)} /><br />
                <div className={classes.wrapper}>
                    <input type="radio" name="gender" value="male" className={classes.Gender} onChange={(e) => HandleInput(e)} />
                    <label for="male">Male</label><br />
                    <input type="radio" name="gender" value="female" className={classes.Gender} onChange={(e) => HandleInput(e)} />
                    <label for="female">Female</label><br />
                    <input type="radio" name="gender" value="other" className={classes.Gender} onChange={(e) => HandleInput(e)} />
                    <label for="other">Other</label><br />
                </div>
                <input type="text" placeholder="Experience in" name="Experience" onChange={HandleInput} /><br />

                <input type="submit" value="Add Executive" />

            </form>

        </div>
    )
}

export default AddExec
