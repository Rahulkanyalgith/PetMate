/* eslint-disable react/prop-types */
import { useState } from 'react';
import MyContext from './MyContext';

function MyState({children}) {
    const [loading, setloading] = useState(false)
  return (
    <MyContext.Provider value={{
        loading,
        setloading
    }}>
       {children}
    </MyContext.Provider>
  )
}

export default MyState