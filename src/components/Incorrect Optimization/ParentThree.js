import React, { useState, useMemo, useEffect } from 'react'
import { ChildFour, MemoizedChildFour } from './ChildFour'

export const ParentThree = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')
    const [name, setName] = useState('Mariam')

    console.log('ParentThree Render')
    return (
        <div>
            <input type="text" placeholder='testing' onChange={(e) => setText(e.target.value)} />
            <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('code evolution')}>Change name</button>
           <MemoizedChildFour name={name} />

           {/* <MemoizedChildThree name={name} > */}
            {/* <strong> Hello </strong> */}
            {/* </MemoizedChildThree> */}
            <MemoizedChildFour name={name} />
        </div>
    )
}
