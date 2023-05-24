'use client';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  const { status } = useSession();
  return (
    <main>
      <h1 className="text-3xl">Hello Next.js 13</h1>
      {status === 'unauthenticated' && (
        <Link href={'/auth/signin'}>Sign In</Link>
      )}
      {status === 'authenticated' && (
        <Link href={'/loggedin'}>ログイン後に見れるページへ</Link>
      )}
    </main>
  );
}
