import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import Image from 'next/image';
import Logo from '../../../../public/cypresslogo.svg';

import { LoginFormData } from '@/interfaces';
import { loginUser } from '@/lib/authenticate/userAuthentication';

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginFormData>({
    phoneNumber: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Set loading state
    setIsLoading(true);

    // Attempt to login the user
    const response = await loginUser(formData);

    // Check if the login was successful
    if (response.success) {
      // Redirect to the otp page
      router.push('/otp');
    } else {
      setSubmitError('Login failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex justify-center items-center space-y-6 flex-col">
      <div className="flex justify-left items-center">
        <Image src={Logo} alt="cypress Logo" width={50} height={50} />
        <span className="font-semibold dark:text-white text-4xl first-letter:ml-2">Treminy</span>
      </div>
      <p className="text-foreground/60">An all-In-One Collaboration and Productivity Platform</p>
      <Input
        id="phoneNumber"
        name="phoneNumber"
        type="tel"
        placeholder="+1 234 567 8900"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="w-full"
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="••••••••"
        value={formData.password}
        onChange={handleChange}
        className="w-full"
      />
      {submitError && <p className="text-red-500">{submitError}</p>}
      <Button type="submit" className="w-full p-6" disabled={isLoading}>
        {!isLoading ? 'Login' : <Loader />}
      </Button>
      <p className="self-container">
        Don't have an account?{' '}
        <a href="/signup" className="text-primary">
          Sign Up
        </a>
      </p>
    </form>
  );
};

export default Login;
