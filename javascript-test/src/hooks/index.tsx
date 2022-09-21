/* eslint-disable no-undef */
import { UserProvider } from './user'
import React from 'react'

interface AuthProviderProps {
  children: any
}

export function AppProvider({ children }: AuthProviderProps) {
  return <UserProvider>{children}</UserProvider>
}
