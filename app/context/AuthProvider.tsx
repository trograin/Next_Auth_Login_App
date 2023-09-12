'use client'

import { SessionProvider } from 'next-auth/react'

export default function AuthProvider({ children }: {
    children: React.ReactNode
}) {
    //wrap the children component inside SessionProvider to push session data trough to the children
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}