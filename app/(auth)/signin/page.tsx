import LoginProvidersButtons from '@/components/LoginProvidersButtons';
import { getProviders } from 'next-auth/react';

export default async function SignIn() {
  const providers = await getProviders();

  if (!providers) {
    return null;
  }

  return (
    <>
      <LoginProvidersButtons providers={providers} />
    </>
  );
}
