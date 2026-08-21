export interface Application {
  id: number;
  company_name: string;
  job_title: string | null;
  job_url: string | null;
  location: string | null;
  status: ApplicationStatus;
  applied_date: string | null;
  last_updated: string | null;
  salary_range: string | null;
  cover_letter: string | null;
  notes: string | null;
  source: ApplicationSource;
  created_at: string;
  updated_at: string;
}

export type ApplicationStatus =
  | 'saved'
  | 'applied'
  | 'interviewing'
  | 'offer'
  | 'rejected'
  | 'withdrawn';

export type ApplicationSource =
  | 'manual'
  | 'linkedin'
  | 'indeed'
  | 'weworkremotely'
  | 'remoteok'
  | 'other';

export interface CreateApplicationDTO {
  company_name: string;
  job_title?: string;
  job_url?: string;
  location?: string;
  status?: ApplicationStatus;
  applied_date?: string;
  salary_range?: string;
  cover_letter?: string;
  notes?: string;
  source?: ApplicationSource;
}

export interface UpdateApplicationDTO extends Partial<CreateApplicationDTO> {
  id: number;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  count?: number;
  message?: string;
}
