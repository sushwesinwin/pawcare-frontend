import { RegisterData, LoginData, AuthResponse, ApiError } from '@/lib/users/types';

// Prefer an env-configured base URL. Fallbacks allow using Next.js rewrites/proxy or local dev.
const API_BASE = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_BASE_URL || '/api';

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE}${path}`;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  const resp = await fetch(url, { ...options, headers });

  // Try to parse JSON regardless of status to extract error details
  let payload: any = null;
  try {
    payload = await resp.json();
  } catch (_) {
    // ignore json parse errors; payload stays null
  }

  if (!resp.ok) {
    // Normalize error to message string using our ApiError shape when available
    const message =
      (payload && (payload as ApiError)?.error) ||
      payload?.message ||
      resp.statusText ||
      'Request failed';
    throw new Error(message);
  }

  return payload as T;
}

export async function register(data: RegisterData): Promise<AuthResponse> {
  return request<AuthResponse>('/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function login(data: LoginData): Promise<AuthResponse> {
  return request<AuthResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
