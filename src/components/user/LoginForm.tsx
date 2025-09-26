'use client';
import { useState, FormEvent, ChangeEvent } from 'react';
import { login } from '@/lib/users/api';
import { useRouter } from 'next/navigation';
import { LoginData } from '@/lib/users/types';

// Typed error response from backend (e.g., { error: string })
interface ApiError {
  error: string;
}

export default function LoginForm() {
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: ''
  });
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const data = await login(formData);
      localStorage.setItem('token', data.token);
      // Reset form on success for better UX
      setFormData({ email: '', password: '' });
      router.push('/');
    } catch (error: unknown) {
      // Enhanced error handling with ApiError typing
      if (error instanceof Error) {
        setError(error.message);
      } else if (typeof error === 'object' && error !== null && 'error' in error) {
        setError((error as ApiError).error || 'Login failed');
      } else {
        setError('Login failed');
      }
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div>
        <label 
          htmlFor="email"
          className='block text-sm font-medium text-gray-700'>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className='mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          disabled={isLoading}
          required
        />
      </div>
      <div>
        <label 
          htmlFor="password" 
          className='block text-sm font-medium text-gray-700'>
          Password
        </label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={formData.password}
          onChange={handleChange}
          className='mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          disabled={isLoading}
          required
        />
      </div>
      <button 
        type="submit"
        className='w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed'
        disabled={isLoading}
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
      <p className='text-center text-sm text-gray-700'>
        Don't have an account?{' '}
        <a href="/register" className="ml-1 text-blue-600 hover:underline">
          Register
        </a>
      </p>
    </form>
  );
}