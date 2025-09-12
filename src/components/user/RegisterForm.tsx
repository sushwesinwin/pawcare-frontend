'use client';
import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { register } from '@/lib/users/api';
import { useRouter } from 'next/navigation';
import { RegisterData, AuthResponse } from '@/lib/users/types';

// Define backend error shape for type safety
interface ApiError {
  error: string;
}

export default function RegisterForm() {
  // Initialize form state with RegisterData type
  const [formData, setFormData] = useState<RegisterData>({
    name: '',
    email: '',
    password: ''
  } as RegisterData);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  // Load name/email from localStorage on mount (optional persistence)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedName = localStorage.getItem('registerName');
      const savedEmail = localStorage.getItem('registerEmail');
      setFormData(prev => ({
        ...prev,
        name: savedName || prev.name,
        email: savedEmail || prev.email
      }));
    }
  }, []);

  // Persist name/email to localStorage on change (skip password for security)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (formData.name) localStorage.setItem('registerName', formData.name);
      if (formData.email) localStorage.setItem('registerEmail', formData.email);
    }
  }, [formData.name, formData.email]);

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear saved data on password change (optional security)
    if (name === 'password' && value && typeof window !== 'undefined') {
      localStorage.removeItem('registerName');
      localStorage.removeItem('registerEmail');
    }
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    setError('');
    setIsLoading(true);

    try {
      const data: AuthResponse = await register(formData);
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token); // Store JWT
        localStorage.removeItem('registerName'); // Clear form data
        localStorage.removeItem('registerEmail');
      }
      setFormData({ name: '', email: '', password: '' }); // Reset form
      router.push('/'); // Redirect to home
    } catch (error: unknown) {
      // Enhanced error handling
      const errorMessage =
        error instanceof Error
          ? error.message
          : (error as ApiError)?.error || 'Registration failed';
      setError(errorMessage);
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {error && (
        <p className="text-red-500 text-sm font-medium" role="alert">
          {error}
        </p>
      )}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
          disabled={isLoading}
          required
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? 'name-error' : undefined}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
          disabled={isLoading}
          required
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? 'email-error' : undefined}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
          disabled={isLoading}
          required
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? 'password-error' : undefined}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isLoading}
      >
        {isLoading ? 'Registering...' : 'Register'}
      </button>
      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <a href="/login" className="text-blue-600 hover:underline">
          Login
        </a>
      </p>
    </form>
  );
}