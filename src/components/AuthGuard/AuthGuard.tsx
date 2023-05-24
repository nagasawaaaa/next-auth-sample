'use client';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

const AuthGuard = ({ children }: { children: React.ReactNode }): any => {
  const { status } = useSession();
  useEffect(() => {
    if (status === 'unauthenticated') {
      redirect('/auth/signin');
    }
  }, [status]);
  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'authenticated') return children;
};

export default AuthGuard;
