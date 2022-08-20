import React, { useState } from 'react'
import { ChildOne } from './ChildOne'
import { ParentOne } from './ParentOne'

export const GrandParent = () => {
    const [newCount, setNewCount]= useState(0)
  return (
    <div>
<button onClick={()=>setNewCount(newc=> newc + 1)}>
    GrandParent - {newCount}
</button>
<ParentOne>
    <ChildOne />
</ParentOne>
    </div>
  )
}
