import React from 'react'


export const ChildTwo = () => {
    console.log('ChildTwo render')
  return ( <div>ChildTwo Component</div>
  )
}
export const MemoizedChildTwo =React.memo(ChildTwo)
