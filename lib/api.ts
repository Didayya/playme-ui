const API_URL = process.env.PLAYME_API_URL;

if (!API_URL) {
  throw new Error("PLAYME_API_URL is not configured.");
}

export async function playmeApi<T>(
  path: string,
  init: RequestInit = {},
  accessToken?: string,
): Promise<T> {
  const headers = new Headers(init.headers);
  headers.set("Content-Type", "application/json");

  if (accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`);
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers,
    cache: "no-store",
  });

  const body = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      body?.message ||
      body?.error ||
      `PlayMe API request failed with status ${response.status}`;

    throw new Error(message);
  }

  return body as T;
}
