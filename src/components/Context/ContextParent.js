import React, { Children, useState} from 'react'
import { MemoizedChildA } from './ContextChildren'


export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

export const ContextParent = ({children}) => {
  const [count, setCount] = useState(0)
   
  console.log('ContextParent render')


  return (
   <>
   <button onClick={()=>setCount((c)=> c + 1)}>Count {count}</button>
   <CountProvider value ={count}>
   {/* < MemoizedChildA /> */}
   {children}
    </CountProvider>
   </>
  )
}

export default ContextParent
