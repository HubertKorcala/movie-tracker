import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const { email, name, password } = await request.json();

    const hashedPassword = await hash(password, 10);

    await sql`
      INSERT INTO users (email, name, password)
      VALUES (${email}, ${name}, ${hashedPassword})`;
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: 'success' });
}
