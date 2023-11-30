'use client';

import { RegisterSchema } from '@/lib/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { set, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '../ui/input';
import { useState } from 'react';
import { isEmailTaken } from '@/lib/actions/users.action';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
      confirm: '',
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    setIsSubmitting(true);
    const { email, name, password } = values;
    try {
      const result = await isEmailTaken(email);

      if (result) {
        set(form.formState.errors, 'email', {
          type: 'manual',
          message: 'Email is already in use.',
        });
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, name, password }),
      });
    } catch (error) {
      setIsSubmitting(false);
    }

    setIsSubmitting(false);
    router.push('/');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter password"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Password must be at least 8 characters long,
                <br /> contain number and uppercase letter.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter confirmed password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Submitting...' : 'Register'}
        </Button>
      </form>
    </Form>
  );
};

export default Register;
