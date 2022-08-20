import React, {useState} from 'react'
const initState= ['Bruce', 'Kent']

export const ArrayUseState = () => {
    const [persons, setPersons] = useState(initState)

    const hanldeClick =() => {
// persons.push('Maryam kay')
// persons.push('Maryam Bee')
const newPerson =[...persons]
newPerson.push('Maryan Kay')
newPerson.push('Maryam Bee')
setPersons(newPerson)
    }
    console.log('array UseState Render')
  return (
    <div>
<button onClick={hanldeClick}>Click</button>
{
 persons.map(person => (<div key={person}>{person}</div>))  
}
    </div>
  )
}
