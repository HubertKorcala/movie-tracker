'use client';
import { signIn, signOut } from 'next-auth/react';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

type Provider = {
  id: string;
  name: string;
};

type Providers = {
  [key: string]: Provider;
};

const LoginProvidersButtons: React.FC<{ providers: Providers }> = ({
  providers,
}) => {
  return (
    <div className="flex gap-4 flex-col">
      <Button onClick={() => signOut()}>Sign Out</Button>
      {Object.values(providers).map((provider: Provider) =>
        provider.name === 'Credentials' ? (
          <Button key={provider.name}>
            <Link href="/signin/credentials">
              Sign in with Email and Password
            </Link>
          </Button>
        ) : (
          <div key={provider.name}>
            <Button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </Button>
          </div>
        )
      )}
    </div>
  );
};

export default LoginProvidersButtons;
