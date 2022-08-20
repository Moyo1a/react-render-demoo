
import React, { useState, useMemo, useCallback } from 'react'
import { MemoizedChildFive } from './ChildFive'

export const ParentFour = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('omolara')
    const person = {
        fname: 'Mariam',
        lname: 'Kelani'
    }

 const memoizedPerson = useMemo(()=> person, [])

const handleClick = () => {}
    const memoizedHandleClick = useCallback(handleClick, [])

    console.log('ParentFOUR Render')
    return (
        <div>

            <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Maykay Baby')}>Change name</button>

            <MemoizedChildFive name={name}  person= {memoizedPerson} />
        </div>
    )
}
