import React, { useState } from 'react'

let AuthContext = React.createContext<userInfoType>(null!)
type userInfoType = {
  token: string
}

export default function AuthProvider({children}: {children: React.ReactNode}) {
  const [token, setToken] = useState<any>(null)
  let value = {
    token,
    setToken
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
