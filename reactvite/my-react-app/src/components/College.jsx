import React, {useState} from "react"

function College() {
    const [name, setName] = useState("a")
    const [college, setCollege] = useState("a")

    function nameAssign() {
        setName("Rahul")
    }

    function collegeAssign() {
        setCollege("ABES Engineering College")
    }

    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>College: {college}</h2>
            <button onClick={nameAssign}>Name</button>
            <button onClick={collegeAssign}>College</button>
        </div>
    )
}

export default College