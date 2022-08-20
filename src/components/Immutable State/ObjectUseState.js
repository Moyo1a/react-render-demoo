import React, { useState } from 'react'

const init = {
    fname: 'Maryam',
    lname: 'Moyo'
}
export const ObjectUseState = () => {
    const [person, setPerson] = useState(init)
   
    const changeName = () => {
        // person.fname = 'Tayo'
        // person.lname = 'Kemo'
        // setPerson(person)
        const newPerson = {...person}
        newPerson.fname ='Tayo'
        newPerson.lname = 'Kemo'
        setPerson(newPerson)
    }
console.log('Object UseState render')
    return (
        <div>
            <button onClick={changeName}>{person.fname} {person.lname}</button>
        </div>
    )
}
