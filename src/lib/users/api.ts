import { RegisterData, LoginData, AuthResponse } from './types';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Register
export async function register(data: RegisterData): Promise<AuthResponse> {
    const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Registration failed');        
    }
    return res.json();
}

// Login
export async function login(data: LoginData): Promise<AuthResponse> {
    const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Login failed');
    }
    return res.json();

