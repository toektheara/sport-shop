import React, { createContext, useContext, useState } from 'react';

export const MeContext = createContext({
  me: undefined,
  setMe: undefined
})

export const MeContextProvider = (props) => {
  const [me, setMe] = useState(undefined);

  return (
    <MeContext.Provider value={{ me, setMe }} >
      {props.children}
    </MeContext.Provider>
  )
}

const useMeContext = () => {
  const { me, setMe } = useContext(MeContext)

  return [me, setMe]
}

export default useMeContext;