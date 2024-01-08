import LoginProvidersButtons from '@/components/LoginProvidersButtons';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default async function SignIn() {
  const providers = await getProviders();
  const session = await getServerSession();

  if (session) {
    redirect('/');
  }

  if (!providers) {
    return null;
  }

  return (
    <>
      <LoginProvidersButtons providers={providers} />
    </>
  );
}
