import React from 'react'
import { createContext, useState } from "react";

export const AccountContext = createContext(null);

const AccountPvd = ({ children }) => {
    const [account, setAccount] =  useState();
  return (
    <AccountContext.Provider value={{
        account,
        setAccount
    }}>
        {children}
    </AccountContext.Provider>
  )
}

export default AccountPvd;