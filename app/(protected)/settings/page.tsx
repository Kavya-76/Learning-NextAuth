"use client"
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import { logout } from '@/actions/logout'
import { useCurrentUser } from '@/hooks/use-current-user'

const SettingsPage = () => {
  const user = useCurrentUser();
    const session = useSession()
    const onClick = () =>{
      logout();
    }
  return (
    <div className='bg-white p-10 rounded-xl'>
        <button type='submit' onClick={onClick}>
          Sign Out
        </button>
    </div>
  )
}

export default SettingsPage
