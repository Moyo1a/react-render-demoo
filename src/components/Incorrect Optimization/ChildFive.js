import React from 'react'

export const ChildFive = ( {name, person} ) => {
    console.log('ChidFive Component')
    return (
       
    <div>
 Hello { name } {person.fname} {person.lname}
    </div>
  )
}
export const MemoizedChildFive = React.memo(ChildFive)
