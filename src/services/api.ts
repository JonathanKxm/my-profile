import type {
  Application,
  CreateApplicationDTO,
  UpdateApplicationDTO,
  ApiResponse,
} from '../types/application';

const API_BASE = '/api';

async function handleResponse<T>(response: Response): Promise<T> {
  const data = await response.json() as ApiResponse<T>;

  if (!response.ok || !data.success) {
    throw new Error(data.error || 'An error occurred');
  }

  return data.data as T;
}

export async function listApplications(filters?: {
  status?: string;
  search?: string;
}): Promise<Application[]> {
  const params = new URLSearchParams();
  if (filters?.status) params.set('status', filters.status);
  if (filters?.search) params.set('search', filters.search);

  const query = params.toString();
  const url = `${API_BASE}/applications${query ? `?${query}` : ''}`;

  const response = await fetch(url);
  return handleResponse<Application[]>(response);
}

export async function getApplication(id: number): Promise<Application> {
  const response = await fetch(`${API_BASE}/applications/${id}`);
  return handleResponse<Application>(response);
}

export async function createApplication(
  data: CreateApplicationDTO
): Promise<Application> {
  const response = await fetch(`${API_BASE}/applications`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse<Application>(response);
}

export async function updateApplication(
  id: number,
  data: Partial<UpdateApplicationDTO>
): Promise<Application> {
  const response = await fetch(`${API_BASE}/applications/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse<Application>(response);
}

export async function deleteApplication(id: number): Promise<void> {
  const response = await fetch(`${API_BASE}/applications/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const data = await response.json() as ApiResponse;
    throw new Error(data.error || 'Failed to delete');
  }
}
