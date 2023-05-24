import React from 'react';
import AuthGuard from '@/components/AuthGuard/AuthGuard';

export const metadata = {
  title: 'Logged In Page',
  description: 'ログインしないと見れないページ',
};

export default function LoggedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <h1 className="text-3xl">ログイン後に見れるページ</h1>
      {children}
    </AuthGuard>
  );
}
