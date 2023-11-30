import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { sql } from '@vercel/postgres';

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
    }),
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        email: {},
        name: {},
        password: {},
      },
      async authorize(credentials, req) {
        const response = await sql`
          SELECT * FROM users WHERE email = ${credentials?.email}`;

        const user = response.rows[0];

        const isPasswordCorrect = await compare(
          credentials?.password ?? '',
          user?.password
        );

        if (isPasswordCorrect) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }: any) {
      if (profile) {
        const response = await sql`
          SELECT * FROM users WHERE email = ${profile?.email}`;

        const user = response.rows[0];

        if (!user) {
          await sql`
            INSERT INTO users (name, email, image)
            VALUES (${profile?.name}, ${profile?.email}, ${
              profile?.picture ?? profile?.avatar_url ?? profile?.image
            })`;
          return true;
        }
      }

      return true;
    },
    async session({ session }: any) {
      const response = await sql`
        SELECT id, name, email, image FROM users WHERE email = ${session?.user?.email}`;

      const user = response.rows[0];

      session.user.id = user.id;

      return session;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
