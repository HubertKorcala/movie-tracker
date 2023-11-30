'use server';

import { sql } from '@vercel/postgres';

export const isEmailTaken = async (email: string) => {
  try {
    const response = await sql`
          SELECT * FROM users WHERE email = ${email}`;

    const user = response.rows[0];

    if (user) {
      return true;
    }
  } catch (err) {
    console.log(err);
  }

  return false;
};
