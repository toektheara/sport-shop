import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({
  token: undefined,
  setToken: undefined
})

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(undefined);

  return (
    <AuthContext.Provider value={{ token, setToken }} >
      {props.children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  const { token, setToken } = useContext(AuthContext)

  return [token, setToken]
}

export default useAuthContext;