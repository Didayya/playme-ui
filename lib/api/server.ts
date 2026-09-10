import { getAccessToken, setTokens } from '@/lib/auth/cookies'; // Assuming setTokens exists to save new tokens

const API_URL = process.env.PLAYME_API_URL!;

// Helper function to call the refresh endpoint
async function refreshTokens(): Promise<string | null> {
  try {
    // Replace with your actual refresh token logic or endpoint
    const response = await fetch(`${API_URL}/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });

    if (!response.ok) throw new Error('Refresh failed');

    const data = await response.json();
    
    // Save the new tokens (access token, refresh token, etc.) back to cookies
    await setTokens(data); 
    
    return data.accessToken;
  } catch (error) {
    console.error('Failed to refresh authentication token:', error);
    return null;
  }
}

export async function apiServer<T>(
  path: string,
  options: RequestInit = {},
  isRetry = false // Prevents infinite loops if the refresh token itself is invalid
): Promise<T> {
  const token = await getAccessToken();

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    cache: 'no-store',
  });

  // If unauthorized and we haven't tried refreshing yet, attempt a token refresh
  if (response.status === 401 && !isRetry) {
    const newToken = await refreshTokens();

    if (newToken) {
      // Re-run the exact same request with the new token
      return apiServer<T>(
        path, 
        {
          ...options,
          headers: {
            ...options.headers,
            Authorization: `Bearer ${newToken}`,
          }
        }, 
        true // Set isRetry to true to avoid an infinite loop if the retry fails
      );
    }
  }

  // Standard error handling
  if (!response.ok) {
    let errorDetail = '';
    try {
      const errorBody = await response.json();
      errorDetail = errorBody.message || JSON.stringify(errorBody);
    } catch {
      errorDetail = await response.text();
    }
    throw new Error(`API request failed (${response.status}): ${errorDetail}`);
  }

  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}
